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
    public class CourseHelper(IConfiguration configuration)
    {
        private readonly string connectionString = DBConnection.getConnectionString;
        private readonly IConfiguration? _configuration = configuration;

        public async Task CreateCourse(CreateCouresModel course)
        {
            await InsertCourseInDatabase(course);
        }

        public async Task UpdateCourse(CourseModel course)
        {
            await UpdateCourseInDatabase(course);
        }

        public async Task DeleteCourse(int courseId)
        {
            await DeleteCourseInDatabase(courseId);
        }

        public async Task<CourseModel> GetCourse(int courseId)
        {
            return await GetCourseDetailsFromDatabase(courseId);
        }

        private async Task<CourseModel> GetCourseDetailsFromDatabase(int courseId)
        {
            CourseModel course = new CourseModel();
            using (SqlConnection connection = new SqlConnection(connectionString))
            {
                await connection.OpenAsync();
                SqlCommand command = new("GetCourseDetails", connection)
                {
                    CommandType = System.Data.CommandType.StoredProcedure
                };
                command.Parameters.AddWithValue("@courseId", courseId);
                
                using (SqlDataReader reader = await command.ExecuteReaderAsync())
                {
                    while (reader.Read())
                    {
                        course.courseName = reader["courseName"].ToString();
                        course.courseId = Convert.ToInt32(reader["courseId"]);
                        course.courseDescription = reader["courseDescription"].ToString();
                        course.courseCode = reader["courseCode"].ToString();
                        course.maxCapacity = Convert.ToInt32(reader["maxCapacity"]);
                        course.credits = Convert.ToInt32(reader["credits"]);
                        course.departmentId = (Department)reader["departmentId"];
                    }
                }
            }
            return course;
        }

        private async Task InsertCourseInDatabase(CreateCouresModel course)
        {
            using (SqlConnection connection = new SqlConnection(connectionString))
            {
                await connection.OpenAsync();
                SqlCommand command = new("CreateCourse", connection)
                {
                    CommandType = System.Data.CommandType.StoredProcedure
                };
                command.CommandType = System.Data.CommandType.StoredProcedure;
                command.Parameters.AddWithValue("@courseName", course.courseName);
                command.Parameters.AddWithValue("@courseDescription", course.courseDescription);
                command.Parameters.AddWithValue("@courseCode", course.courseCode);
                command.Parameters.AddWithValue("@maxCapacity", course.maxCapacity);
                command.Parameters.AddWithValue("@departmentId", course.departmentId);
                command.Parameters.AddWithValue("@credits", course.credits);

                await command.ExecuteNonQueryAsync();
                await connection.CloseAsync();
            }

        }
        private async Task UpdateCourseInDatabase(CourseModel course)
        {
            using (SqlConnection connection = new SqlConnection(connectionString))
            {
                await connection.OpenAsync();
                SqlCommand command = new("UpdateCourse", connection)
                {
                    CommandType = System.Data.CommandType.StoredProcedure
                };

                command.CommandType = System.Data.CommandType.StoredProcedure;
                command.Parameters.AddWithValue("@courseId", course.courseId);
                command.Parameters.AddWithValue("@courseName", course.courseName);
                command.Parameters.AddWithValue("@courseDescription", course.courseDescription);
                command.Parameters.AddWithValue("@courseCode", course.courseCode);
                command.Parameters.AddWithValue("@maxCapacity", course.maxCapacity);
                command.Parameters.AddWithValue("@departmentId", course.departmentId);
                command.Parameters.AddWithValue("@credits", course.credits);

                await command.ExecuteNonQueryAsync();
                await connection.CloseAsync();
            }
        }

        private async Task DeleteCourseInDatabase(int courseId)
        {
            using (SqlConnection connection = new SqlConnection(connectionString))
            {
                await connection.OpenAsync();
                SqlCommand command = new("DeleteCourse", connection)
                {
                    CommandType = System.Data.CommandType.StoredProcedure
                };

                command.CommandType = System.Data.CommandType.StoredProcedure;
                command.Parameters.AddWithValue("@courseId", courseId);

                await command.ExecuteNonQueryAsync();
                await connection.CloseAsync();
            }
        }
    }
}