using System;

class Student
{
    public required string Name { get; set; }
    public required int RollNo { get; set; }
}

class Program
{
    static void Main()
    {
        Student s = new()
        {
            Name = "Raj",
            RollNo = 101
        };

        Console.WriteLine($"{s.Name} {s.RollNo}");
    }
}