using System;
using System.Collections.Generic;
using System.Data.SqlClient;
using System.Linq;
using System.Threading.Tasks;

namespace backend.Utility.Database
{
    public static class DBConnection
    {
        private static readonly string connectionString = "Server=localhost, 1433\\Catalog=StudentManagementSystem;Database=StudentManagementSystem;User=SA; Password=Password123;";  
        public static string getConnectionString { get => connectionString; }  

        public static async Task<SqlDataReader> ExecuteSPWithParameters(SqlCommand command)
        {
            using (SqlConnection con = new(connectionString))
            {
                await con.OpenAsync();
                SqlDataReader reader = await command.ExecuteReaderAsync();
                return reader;
   
            }
        }
    }
}