using System;
using System.Linq;
using Q1_Customers.Models;

class Program
{
    static Customer[] seedCustomers() =>
        new Customer[]
        {
            new() { Id = 1, FirstName="Ana", LastName="Reyes", DateOfBirth=new DateTime(1998,3,12) },
            new() { Id = 2, FirstName="Bruno", LastName="Smith", DateOfBirth=new DateTime(1995,6,4) },
            new() { Id = 3, FirstName="Carlos", LastName="Diaz", DateOfBirth=new DateTime(2000,1,20) },
            new() { Id = 4, FirstName="Diana", LastName="Lee", DateOfBirth=new DateTime(1992,12,2) },
            new() { Id = 5, FirstName="Elena", LastName="Martinez", DateOfBirth=new DateTime(1999,7,7) },
            new() { Id = 6, FirstName="Faisal", LastName="Khan", DateOfBirth=new DateTime(1988,11,11) },
            new() { Id = 7, FirstName="Grace", LastName="Park", DateOfBirth=new DateTime(2001,5,30) },
        };

    static void Main()
    {
        var customers = seedCustomers();

        Console.WriteLine("Q1 — Customer LINQ Demo");
        Console.WriteLine("Commands: findbyid, findbyfirstname, sortbyfirstname, list, exit");
        while (true)
        {
            Console.Write("\n> ");
            var cmd = Console.ReadLine()?.Trim().ToLower();
            if (string.IsNullOrEmpty(cmd)) continue;
            if (cmd == "exit") break;

            switch (cmd)
            {
                case "findbyid":
                    Console.Write("Enter id: ");
                    if (int.TryParse(Console.ReadLine(), out int id))
                    {
                        var c = customers.FirstOrDefault(x => x.Id == id);
                        Console.WriteLine(c is null ? "Customer doesn't exist" : $"{c.FirstName} {c.LastName}");
                    }
                    else Console.WriteLine("Invalid id");
                    break;

                case "findbyfirstname":
                    Console.Write("Enter first name: ");
                    var fn = (Console.ReadLine() ?? "").Trim();
                    var found = customers.FirstOrDefault(x => x.FirstName.Equals(fn, StringComparison.OrdinalIgnoreCase));
                    Console.WriteLine(found is null ? "Customer doesn't exist" : $"DOB: {found.DateOfBirth:yyyy-MM-dd}");
                    break;

                case "sortbyfirstname":
                    var sorted = customers.OrderBy(c => c.FirstName).ToArray();
                    Console.WriteLine("Sorted by first name:");
                    foreach (var c in sorted) Console.WriteLine(c);
                    break;

                case "list":
                    foreach (var c in customers) Console.WriteLine(c);
                    break;

                default:
                    Console.WriteLine("Unknown command");
                    break;
            }
        }
    }
}
