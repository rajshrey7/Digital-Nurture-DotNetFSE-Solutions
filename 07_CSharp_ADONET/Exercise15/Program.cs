using System;

abstract class Vehicle
{
    public abstract void Drive();
}

interface IDrivable
{
    void Start();
}

class Car : Vehicle, IDrivable
{
    public override void Drive()
    {
        Console.WriteLine("Car Driving");
    }

    public void Start()
    {
        Console.WriteLine("Car Started");
    }
}

class Program
{
    static void Main()
    {
        Car c = new();
        c.Start();
        c.Drive();
    }
}