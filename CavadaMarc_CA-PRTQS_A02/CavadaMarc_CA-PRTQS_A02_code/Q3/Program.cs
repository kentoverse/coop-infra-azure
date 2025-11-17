using System;
using Q3_Fibonacci.Models;

class Program
{
    static void Main()
    {
        Console.WriteLine("Q3 — Fibonacci with operator overloading");

        Console.Write("Enter n (position, >=1): ");
        if (!int.TryParse(Console.ReadLine(), out int n) || n < 1)
        {
            Console.WriteLine("Invalid n");
            return;
        }

        var fib = new FibNumber(n);
        Console.WriteLine(fib);

        var fibNext = ++fib;
        Console.WriteLine($"After ++  : {fibNext}");

        Console.Write("Enter m to add (>=0): ");
        if (!int.TryParse(Console.ReadLine(), out int m) || m < 0) m = 0;
        var fibPlus = fib + m;
        Console.WriteLine($"After +{m} : {fibPlus}");
    }
}
