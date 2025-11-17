using System;
using System.Numerics;

namespace Q3_Fibonacci.Models
{
    public class FibNumber
    {
        public int N { get; }

        public FibNumber(int n) { if (n < 1) throw new ArgumentOutOfRangeException(nameof(n)); N = n; }

        public BigInteger Value => Compute(N);

        private static BigInteger Compute(int n)
        {
            if (n <= 2) return BigInteger.One;
            BigInteger a = 1;
            BigInteger b = 1;
            for (int i = 3; i <= n; i++)
            {
                var next = a + b;
                a = b;
                b = next;
            }
            return b;
        }

        public static FibNumber operator ++(FibNumber f) => new FibNumber(f.N + 1);

        public static FibNumber operator +(FibNumber f, int m)
        {
            if (m < 0) throw new ArgumentOutOfRangeException(nameof(m));
            return new FibNumber(f.N + m);
        }

        public override string ToString() => $"F({N}) = {Value}";
    }
}
