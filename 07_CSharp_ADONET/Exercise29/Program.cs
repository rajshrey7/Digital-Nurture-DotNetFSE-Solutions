using System;
using System.Net;

class Program
{
    static void Main()
    {
        string input =
            "<script>alert('hack')</script>";

        string safe =
            WebUtility.HtmlEncode(input);

        Console.WriteLine(safe);
    }
}