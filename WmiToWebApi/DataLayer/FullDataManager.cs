using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using System.Management;
using System.Net;
using System.Text;
using System.Threading.Tasks;
using Microsoft.Win32;

namespace DataLayer
{
    public class FullDataManager : DataManager
    {
        public override ComputerSummary GetComputerSummary()
        {
            var computerSummary = new ComputerSummary
            {
                Name = GetMetric(ComputerMetrics.ComputerName),
                User = GetMetric(ComputerMetrics.User),
                Cpu = GetMetric(ComputerMetrics.CpuName),
                Ram = Convert.ToInt32(GetMetric(ComputerMetrics.Ram)),
                VideoCard = GetMetric(ComputerMetrics.VideoCard),
                Ip = System.Net.IPAddress.Parse(GetMetric(ComputerMetrics.Ip)),
                CpuUsage = Convert.ToInt32(GetMetric(ComputerMetrics.CpuUsage)),
                RamUsage = Convert.ToInt32(GetMetric(ComputerMetrics.RamUsage)),
                AvailableDiskSpaceGb = Convert.ToInt32(GetMetric(ComputerMetrics.AvailableDiskSpace)),
                AverageDiskQueueLength = Convert.ToInt32(GetMetric(ComputerMetrics.AverageDiskQueueLength))
            };


            return computerSummary;

        }

        public override List<string> GetApplicationList()
        {

            List<string> applicationList = new List<string>();
            ManagementObjectSearcher ManagementObjectSearcher = new ManagementObjectSearcher("SELECT * FROM Win32_Product");
            foreach (ManagementObject managementObject in ManagementObjectSearcher.Get())
            {
                applicationList.Add(managementObject["Name"].ToString());
            }

            return applicationList;
        }

        public override List<string> GetHardwareList()
        {
            List<string> HardwareList = new List<string>();


            ManagementObjectSearcher magaManagementObjectSearcher = new ManagementObjectSearcher("SELECT * FROM Win32_PnPEntity");
            foreach (ManagementObject managementObject in magaManagementObjectSearcher.Get())
            {
                if (managementObject["Name"] != null)
                    HardwareList.Add(managementObject["Name"].ToString());
            }

            return HardwareList;


        }

    }
}

