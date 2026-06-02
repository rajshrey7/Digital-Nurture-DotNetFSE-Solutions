using System;

class Student
{
    public string Name { get; set; }
}

class Program
{
    static void Main()
    {
        var number = 100;
        var text = "Hello";

        Student s = new() { Name = "Raj" };

        Console.WriteLine($"{number} : {number.GetType()}");
        Console.WriteLine($"{text} : {text.GetType()}");
        Console.WriteLine($"{s.Name} : {s.GetType()}");
    }
}