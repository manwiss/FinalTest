using System;
using System.Collections.Generic;
using System.Linq;
using System.Net.Http;
using System.Net.Http.Headers;
using System.Text;
using System.Threading.Tasks;
using Newtonsoft.Json;
using DataLayer;
using System.Timers;

namespace WmiToWebApi
{
    class Program
    {
        static void Main(string[] args)
        {
            Timer aTimer = new Timer();
            aTimer.Elapsed +=new ElapsedEventHandler(OnTimedEvent);
            aTimer.Interval = 5000;
            aTimer.Enabled = true;
            aTimer.Start();

            Console.WriteLine("Enter \'q\' to quit .");
            while (Console.Read() != 'q') ;









            /*
            DateTime TimeStamp = DateTime.Now;
            double ProcessorUsage = double.Parse(fullDataManager.GetMetric(ComputerMetrics.CpuUsage));
            double MemoryUsage = double.Parse(fullDataManager.GetMetric(ComputerMetrics.RamUsage));
            Console.WriteLine(TimeStamp);
            Console.WriteLine(ProcessorUsage);
            Console.WriteLine(MemoryUsage);
            Console.ReadKey();
            */

        }


        private static void OnTimedEvent(object source, ElapsedEventArgs ee)
        {
            using (var client = new HttpClient())
            {
                FullDataManager fullDataManager = new FullDataManager();
                client.BaseAddress = new Uri("http://192.168.10.106/");
                client.DefaultRequestHeaders.Accept.Clear();
                client.DefaultRequestHeaders.Accept.Add(new MediaTypeWithQualityHeaderValue("application/json"));

                var newUsageReport = new UsageData
                {

                    TimeStamp = DateTime.Now.AddHours(-2),
                    ProcessorUsage = double.Parse(fullDataManager.GetMetric(ComputerMetrics.CpuUsage)),
                    MemoryUsage = double.Parse(fullDataManager.GetMetric(ComputerMetrics.RamUsage))
                };


                var json = JsonConvert.SerializeObject(newUsageReport);

                var content = new StringContent(json);

                content.Headers.ContentType = new MediaTypeWithQualityHeaderValue("application/json");

                var response = client.PostAsync("api/virtualmachines/6/usagereports", content);

                var result = response.Result;
                Console.WriteLine("Data sent successfully...");
            }

        }
    }
}
