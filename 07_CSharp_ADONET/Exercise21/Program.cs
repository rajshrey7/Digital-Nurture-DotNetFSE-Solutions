using System;

class Program
{
    static void Show(object obj)
    {
        if (obj is int n)
            Console.WriteLine($"Integer {n}");

        Console.WriteLine(obj switch
        {
            string s => $"String {s}",
            int i => $"Number {i}",
            _ => "Unknown"
        });
    }

    static void Main()
    {
        Show(100);
        Show("Hello");
    }
}