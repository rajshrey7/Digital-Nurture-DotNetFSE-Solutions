using System;
using System.IO;
using System.Text.Json;

class User
{
    public string Name { get; set; }
    public int Age { get; set; }
    public string Email { get; set; }
}

class Program
{
    static void Main()
    {
        User user = new()
        {
            Name="Raj",
            Age=21,
            Email="raj@gmail.com"
        };

        string json = JsonSerializer.Serialize(user);

        File.WriteAllText("user.json", json);

        string data = File.ReadAllText("user.json");

        User obj = JsonSerializer.Deserialize<User>(data);

        Console.WriteLine(obj.Name);
    }
}