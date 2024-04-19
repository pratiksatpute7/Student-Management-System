using System;
using System.Collections.Generic;
using System.Data.SqlClient;
using System.Linq;
using System.Threading.Tasks;
using backend.Models;
using backend.Utility.Database;

namespace backend.Helpers
{
    public class ClassHelper
    {
        private readonly string connectionString = DBConnection.getConnectionString;

        public async Task CreateClass(CreateClassModel classData)
        {
            await CreateClassInDatabase(classData);
        }

        public async Task UpdateClass(ClassModel classData)
        {
            await UpdateClassInDatabase(classData);
        }

        public async Task<ClassModel> GetClassDetails (int classId)
        {
            return await GetClassDetailFromDatabase(classId);
        }

        public async Task DeleteClass (int classId)
        {
            await DeleteClassInDatabase(classId);
        }

        private async Task CreateClassInDatabase(CreateClassModel classData)
        {
            using (SqlConnection connection = new SqlConnection(connectionString))
            {
                await connection.OpenAsync();
                SqlCommand command = new("CreateClass", connection)
                {
                    CommandType = System.Data.CommandType.StoredProcedure
                };
                command.CommandType = System.Data.CommandType.StoredProcedure;
                command.Parameters.AddWithValue("@className", classData.className);
                command.Parameters.AddWithValue("@classTerm", classData.classTerm);
                command.Parameters.AddWithValue("@teacherId", classData.teacherId);
                command.Parameters.AddWithValue("@location", classData.location);
                command.Parameters.AddWithValue("@classDescription", classData.classDescription);
                command.Parameters.AddWithValue("@startTime", classData.startTime);
                command.Parameters.AddWithValue("@endTime", classData.endTime);

                await command.ExecuteNonQueryAsync();
                await connection.CloseAsync();
            }

        }

        private async Task UpdateClassInDatabase(ClassModel classData)
        {
            using (SqlConnection connection = new SqlConnection(connectionString))
            {
                await connection.OpenAsync();
                SqlCommand command = new("UpdateClass", connection)
                {
                    CommandType = System.Data.CommandType.StoredProcedure
                };
                command.CommandType = System.Data.CommandType.StoredProcedure;
                command.Parameters.AddWithValue("@classId", classData.classId);
                command.Parameters.AddWithValue("@className", classData.className);
                command.Parameters.AddWithValue("@classTerm", classData.classTerm);
                command.Parameters.AddWithValue("@teacherId", classData.teacherId);
                command.Parameters.AddWithValue("@location", classData.location);
                command.Parameters.AddWithValue("@classDescription", classData.classDescription);
                command.Parameters.AddWithValue("@startTime", classData.startTime);
                command.Parameters.AddWithValue("@endTime", classData.endTime);

                await command.ExecuteNonQueryAsync();
                await connection.CloseAsync();
            }
        }

        private async Task<ClassModel> GetClassDetailFromDatabase (int classId)
        {
            ClassModel classData = new ClassModel();
            using (SqlConnection connection = new SqlConnection(connectionString))
            {
                await connection.OpenAsync();
                SqlCommand command = new("GetClassDetails", connection)
                {
                    CommandType = System.Data.CommandType.StoredProcedure
                };
                command.Parameters.AddWithValue("@classId", classId);
                
                using (SqlDataReader reader = await command.ExecuteReaderAsync())
                {
                    while (reader.Read())
                    {
                        classData.className = reader["className"].ToString();
                        classData.classId = Convert.ToInt32(reader["classId"]);
                        classData.classDescription = reader["classDescription"].ToString();
                        classData.classTerm = reader["classTerm"].ToString();
                        classData.teacherId = Convert.ToInt32(reader["teacherId"]);
                        classData.startTime = Convert.ToDateTime(reader["startTime"]);
                        classData.endTime = Convert.ToDateTime(reader["endTime"]);
                        classData.location = reader["location"].ToString();
                    }
                }
            }

            return classData;
        }

        private async Task DeleteClassInDatabase(int classId)
        {
            using (SqlConnection connection = new SqlConnection(connectionString))
            {
                await connection.OpenAsync();
                SqlCommand command = new("DeleteClass", connection)
                {
                    CommandType = System.Data.CommandType.StoredProcedure
                };
                command.CommandType = System.Data.CommandType.StoredProcedure;
                command.Parameters.AddWithValue("@classId", classId);

                await command.ExecuteNonQueryAsync();
                await connection.CloseAsync();
            }
        }
    }
}