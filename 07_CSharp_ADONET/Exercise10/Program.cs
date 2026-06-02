using System;

class Car
{
    public string Make;
    public string Model;
    public int Year;

    public Car()
    {
        Make = "Unknown";
        Model = "Unknown";
        Year = 0;
    }

    public Car(string make, string model, int year)
    {
        Make = make;
        Model = model;
        Year = year;
    }
}

class Program
{
    static void Main()
    {
        Car c1 = new();
        Car c2 = new("Toyota", "Camry", 2024);

        Console.WriteLine($"{c1.Make} {c1.Model}");
        Console.WriteLine($"{c2.Make} {c2.Model}");
    }
}