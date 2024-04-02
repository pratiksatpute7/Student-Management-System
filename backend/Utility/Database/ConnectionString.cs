using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace backend.Utility.Database
{
    public static class ConnectionString
    {
        private static string connectionString = "Server=localhost, 1433\\Catalog=YourDBName;Database=YourDBName;User=sa; Password=YourPassword;";  
        public static string getConnectionString { get => connectionString; }  
    }
}