using System;

class Person
{
    public string Name;
}

class Program
{
    static void ModifyValue(int number)
    {
        number = 100;
    }

    static void ModifyReference(Person person)
    {
        person.Name = "Bob";
    }

    static void Main()
    {
        int num = 50;

        Console.WriteLine("Before ModifyValue: " + num);

        ModifyValue(num);

        Console.WriteLine("After ModifyValue: " + num);

        Console.WriteLine();

        Person p = new Person();
        p.Name = "Alice";

        Console.WriteLine("Before ModifyReference: " + p.Name);

        ModifyReference(p);

        Console.WriteLine("After ModifyReference: " + p.Name);
    }
}