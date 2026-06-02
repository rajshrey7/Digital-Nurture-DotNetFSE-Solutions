using System;

class Contact
{
    public string? Name { get; set; }
}

class Program
{
    static void Main()
    {
        Contact? c = null;

        Console.WriteLine(c?.Name ?? "No Contact");
    }
}