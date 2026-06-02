using System;

class Program
{
    static void RefMethod(ref int x)
    {
        x += 10;
    }

    static void OutMethod(out int x)
    {
        x = 100;
    }

    static void InMethod(in int x)
    {
        Console.WriteLine(x);
    }

    static void Main()
    {
        int a = 5;

        RefMethod(ref a);
        Console.WriteLine(a);

        OutMethod(out int b);
        Console.WriteLine(b);

        InMethod(a);
    }
}