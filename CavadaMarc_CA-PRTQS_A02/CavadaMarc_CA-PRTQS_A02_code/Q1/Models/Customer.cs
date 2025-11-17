using System;

namespace Q1_Customers.Models
{
    public class Customer
    {
        public int Id { get; set; }
        public string FirstName { get; set; } = "";
        public string LastName { get; set; } = "";
        public DateTime DateOfBirth { get; set; }

        public override string ToString() => $"{Id}: {FirstName} {LastName} (DOB: {DateOfBirth:yyyy-MM-dd})";
    }
}
