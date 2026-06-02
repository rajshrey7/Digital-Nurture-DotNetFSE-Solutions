using System;
using System.Collections.Generic;

class Program
{
    static void Main()
    {
        List<string> names = new()
        {
            "Alice",
            "Bob",
            "Charlie"
        };

        Dictionary<int, string> students = new()
        {
            {1,"Raj"},
            {2,"Aman"}
        };

        foreach (var n in names)
            Console.WriteLine(n);

        foreach (var s in students)
            Console.WriteLine($"{s.Key} {s.Value}");
    }
}