using System;

class Base
{
    public string PublicVar = "Public";
    private string PrivateVar = "Private";
    protected string ProtectedVar = "Protected";

    public void ShowPrivate()
    {
        Console.WriteLine(PrivateVar);
    }
}

class Derived : Base
{
    public void Show()
    {
        Console.WriteLine(PublicVar);
        Console.WriteLine(ProtectedVar);
    }
}

class Program
{
    static void Main()
    {
        Derived d = new();
        d.Show();
    }
}