using System;
using System.Linq;
using System.Collections.Generic;
using Q2_ItemsJoin.Models;

class Program
{
    static void Main()
    {
        var names = new List<ItemName>
        {
            new(){ Sno=1, Id=101, Iname="Pen" },
            new(){ Sno=2, Id=102, Iname="Notebook" },
            new(){ Sno=3, Id=103, Iname="Eraser" },
            new(){ Sno=4, Id=104, Iname="Ruler" },
        };

        var prices = new List<ItemPrice>
        {
            new(){ Id=101, Price=1.25m },
            new(){ Id=102, Price=3.50m },
            new(){ Id=103, Price=0.75m },
            new(){ Id=104, Price=1.00m },
        };

        Console.WriteLine("Q2 — Items join (LINQ)");
        Console.WriteLine("All items with prices:");
        var joined = from n in names
                     join p in prices on n.Id equals p.Id
                     select new { n.Iname, p.Price };

        foreach (var j in joined) Console.WriteLine($"{j.Iname} - ${j.Price}");

        Console.Write("\nEnter item name to lookup price: ");
        var input = (Console.ReadLine() ?? "").Trim();
        var q = (from n in names
                 join p in prices on n.Id equals p.Id
                 where n.Iname.Equals(input, StringComparison.OrdinalIgnoreCase)
                 select p.Price).FirstOrDefault();

        if (q == default(decimal))
            Console.WriteLine("Item not found");
        else
            Console.WriteLine($"{input} price: ${q}");
    }
}
