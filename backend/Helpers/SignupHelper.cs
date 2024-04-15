using System;
using System.Collections.Generic;
using System.Data.SqlClient;
using System.Linq;
using System.Threading.Tasks;
using backend.Enums;
using backend.Models;
using backend.Utility.Database;

namespace backend.Helpers
{
    public class SignupHelper
    {
        private readonly string connectionString = DBConnection.getConnectionString;

        public async Task SignupAdminUser(UserSignUpModel userSignupData)
        {
            await InsetAdminInDatabase(userSignupData);
        }

        private async Task InsetAdminInDatabase(UserSignUpModel userSignupData)
        {
            using (SqlConnection connection = new SqlConnection(connectionString))
            {
                await connection.OpenAsync();
                SqlCommand command = new("InsertAdminUser", connection)
                {
                    CommandType = System.Data.CommandType.StoredProcedure
                };
                command.Parameters.AddWithValue("@userName", userSignupData.userName);
                command.Parameters.AddWithValue("@firstName", userSignupData.firstName);
                command.Parameters.AddWithValue("@lastName", userSignupData.lastName);
                command.Parameters.AddWithValue("@userPassword", userSignupData.password);
                command.Parameters.AddWithValue("@emailID", userSignupData.emailId);
                command.Parameters.AddWithValue("@contact", userSignupData.contact);
                command.Parameters.AddWithValue("@userType", UserType.ADMIN);
                
                await command.ExecuteNonQueryAsync();
            }
        }
    }
}