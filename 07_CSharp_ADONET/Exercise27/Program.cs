using System;
using System.Threading;

class Program
{
    static readonly object lock1 = new();
    static readonly object lock2 = new();

    static void Task1()
    {
        if(Monitor.TryEnter(lock1,1000))
        {
            try
            {
                Console.WriteLine("Lock1 Acquired");
            }
            finally
            {
                Monitor.Exit(lock1);
            }
        }
    }

    static void Main()
    {
        Thread t = new(Task1);
        t.Start();
        t.Join();
    }
}