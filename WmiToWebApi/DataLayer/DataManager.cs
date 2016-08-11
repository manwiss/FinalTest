using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Globalization;
using System.Linq;
using System.Management;
using System.Net;
using System.Net.Sockets;
using System.Text;
using System.Threading.Tasks;
using System.Xml.Schema;
using Microsoft.VisualBasic;

namespace DataLayer
{
    public abstract class DataManager
    {



        public virtual string GetMetric(ComputerMetrics metric)
        {
            string value = "";
            switch ((int)metric)
            {

                //Machinename
                case 1:

                    value = Environment.MachineName;
                    break;


                //Current user
                case 2:
                    value = System.Security.Principal.WindowsIdentity.GetCurrent().Name;
                    break;

                //CPU name
                case 3:
                    ManagementObjectSearcher mos =
                     new ManagementObjectSearcher(@"root\CIMV2", "SELECT * FROM Win32_Processor");
                    foreach (ManagementObject managementObject in mos.Get())
                    {
                        value = managementObject["Name"].ToString();
                    }
                    break;


                //Total amount of ram
                case 4:
                    ManagementObjectSearcher RamSearcher = new ManagementObjectSearcher("SELECT Capacity FROM Win32_PhysicalMemory");

                    UInt64 Capacity = 0;
                    foreach (ManagementObject WniPART in RamSearcher.Get())
                    {
                        Capacity += Convert.ToUInt64(WniPART.Properties["Capacity"].Value);
                    }
                    Capacity = Capacity / 1024 / 1024;
                    value = Capacity.ToString();
                    break;

                //Name of video card
                case 5:
                    ManagementObjectSearcher VideoCardSearcher
                     = new ManagementObjectSearcher("SELECT * FROM Win32_DisplayConfiguration");

                    string graphicsCard = string.Empty;
                    foreach (ManagementObject managementObject in VideoCardSearcher.Get())
                    {
                        foreach (PropertyData property in managementObject.Properties)
                        {
                            if (property.Name == "Description")
                            {
                                graphicsCard = property.Value.ToString();
                            }
                        }
                    }
                    value = graphicsCard;
                    break;

                //IP adress
                case 6:
                    var host = Dns.GetHostEntry(Dns.GetHostName());
                    foreach (var ip in host.AddressList)
                    {
                        if (ip.AddressFamily == AddressFamily.InterNetwork)
                        {
                            value = ip.ToString();
                        }
                    }
                    break;

                //CPU USAGE
                case 7:
                    var Cpusearcher = new ManagementObjectSearcher("select * from Win32_PerfFormattedData_PerfOS_Processor");
                    foreach (var obj in Cpusearcher.Get().Cast<ManagementObject>())
                    {
                        value = obj["PercentProcessorTime"].ToString();
                        break;
                    }
                    break;

                // RAM Usage in percentage
                case 8:
                    ManagementObjectSearcher searcher =
                      new ManagementObjectSearcher(@"root\CIMV2",
                      "SELECT * FROM Win32_OperatingSystem");

                    foreach (ManagementObject queryObj in searcher.Get())
                    {
                        double free = Double.Parse(queryObj["FreePhysicalMemory"].ToString());
                        double total = Double.Parse(queryObj["TotalVisibleMemorySize"].ToString());
                        value = Math.Round((total - free) / total * 100, 0).ToString();
                    }

                    break;


                // Free disk space
                case 9:
                    ManagementObject disk = new ManagementObject("win32_logicaldisk.deviceid=\"c:\"");
                    disk.Get();
                    long t = Convert.ToInt64(disk["FreeSpace"].ToString());
                    t = t / 1024 / 1024; // turning to MB
                    value = t.ToString();
                    break;


                // Average disk queue length
                case 10:
                    var AverageDiskQueueLengthSearcher = new ManagementObjectSearcher("select * from Win32_PerfFormattedData_PerfDisk_PhysicalDisk");
                    foreach (var obj in AverageDiskQueueLengthSearcher.Get().Cast<ManagementObject>())
                    {
                        value = obj["AvgDiskQueueLength"].ToString();
                        break;
                    }

                    break;

                default:
                    value = "";
                    break;



            }

            return value;
        }



        public abstract ComputerSummary GetComputerSummary();
        public abstract List<string> GetApplicationList();
        public abstract List<string> GetHardwareList();
    }
}