using System;

class Person
{
    public string? Name { get; set; }
}

class Program
{
    static void Main()
    {
        Person? p = null;

        Console.WriteLine(p?.Name ?? "Name Not Available");
    }
}