using System;
using System.Diagnostics;

class Program
{
    static void Main()
    {
        Trace.Listeners.Add(
            new TextWriterTraceListener("log.txt"));

        Trace.AutoFlush = true;

        Trace.WriteLine("Application Started");

        Console.WriteLine("Logged Successfully");
    }
}