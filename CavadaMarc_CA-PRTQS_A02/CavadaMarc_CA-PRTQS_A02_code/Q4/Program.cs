using System;
using System.IO;

class Program
{
    static void Main()
    {
        Console.WriteLine("Q4 — Copy File");
        Console.Write("Enter source file path (relative OK): ");
        var src = Console.ReadLine()?.Trim() ?? "";
        Console.Write("Enter destination file path: ");
        var dest = Console.ReadLine()?.Trim() ?? "";

        try
        {
            if (!File.Exists(src))
            {
                Console.WriteLine($"Source file not found: {src}");
                return;
            }

            var destDir = Path.GetDirectoryName(dest);
            if (!string.IsNullOrEmpty(destDir) && !Directory.Exists(destDir))
                Directory.CreateDirectory(destDir);

            File.Copy(src, dest, overwrite: true);
            Console.WriteLine($"Copied {src} -> {dest}");
        }
        catch (Exception ex)
        {
            Console.WriteLine("Error copying file: " + ex.Message);
        }
    }
}
