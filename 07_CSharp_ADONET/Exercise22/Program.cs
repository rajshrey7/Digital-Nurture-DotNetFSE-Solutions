using System;

class Program
{
    static (int, string) GetData()
    {
        return (1, "Raj");
    }

    static void Main()
    {
        var (id, name) = GetData();

        Console.WriteLine(id);
        Console.WriteLine(name);
    }
}