using System;
using System.Collections.Generic;
using System.Linq;

class Order
{
    public int OrderId { get; set; }
    public string CustomerName { get; set; }
    public double TotalAmount { get; set; }
}

class Program
{
    static void Main()
    {
        List<Order> orders = new()
        {
            new(){OrderId=1,CustomerName="A",TotalAmount=1000},
            new(){OrderId=2,CustomerName="B",TotalAmount=5000}
        };

        var result = orders
            .Where(o => o.TotalAmount > 2000)
            .Select(o => new
            {
                o.OrderId,
                o.CustomerName
            });

        foreach (var item in result)
            Console.WriteLine(item);
    }
}