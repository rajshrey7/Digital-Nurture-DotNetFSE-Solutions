using System;
using System.IO;
using System.Text;

class Program
{
    static void Main()
    {
        File.WriteAllText("sample.txt", "Hello C#");

        using(FileStream fs =
            new FileStream("sample.txt", FileMode.Open))
        {
            byte[] buffer = new byte[fs.Length];
            fs.Read(buffer,0,buffer.Length);

            Console.WriteLine(
                Encoding.UTF8.GetString(buffer));
        }

        using(MemoryStream ms = new())
        {
            byte[] data =
                Encoding.UTF8.GetBytes("Memory Stream");

            ms.Write(data);

            Console.WriteLine(ms.Length);
        }
    }
}