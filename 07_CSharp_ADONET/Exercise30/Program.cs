using System;
using System.Data.SqlClient;

class Program
{
    static void Main()
    {
        string connectionString =
            "Server=localhost;Database=CompanyDB;Trusted_Connection=True;";

        using(SqlConnection con =
            new SqlConnection(connectionString))
        {
            con.Open();

            SqlCommand insert =
                new SqlCommand(
                "INSERT INTO Employees(Name) VALUES('Raj')",
                con);

            insert.ExecuteNonQuery();

            SqlCommand read =
                new SqlCommand(
                "SELECT * FROM Employees",
                con);

            SqlDataReader dr = read.ExecuteReader();

            while(dr.Read())
            {
                Console.WriteLine(dr["Name"]);
            }

            dr.Close();

            SqlCommand update =
                new SqlCommand(
                "UPDATE Employees SET Name='Aman' WHERE Name='Raj'",
                con);

            update.ExecuteNonQuery();

            SqlCommand delete =
                new SqlCommand(
                "DELETE FROM Employees WHERE Name='Aman'",
                con);

            delete.ExecuteNonQuery();
        }
    }
}