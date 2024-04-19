using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using backend.Helpers;
using backend.Models;
using Microsoft.AspNetCore.Mvc;

namespace backend.Controllers 
{
    [Route("user")]
    [ApiController]

    public class UserController : ControllerBase
    {
        [HttpPost("create-student")]
        public async Task<IActionResult> CreateStudent([FromBody] StudentModel userSignupData)
        {
            if (ModelState.IsValid)
            {

                return Ok($"User {userSignupData.userName} signed up successfully.");
            }

            return BadRequest("Invalid signup data.");
        }

        [HttpPost("create-teacher")]
        public async Task<IActionResult> CreateTeacher([FromBody] StudentModel userSignupData)
        {
            if (ModelState.IsValid)
            {

                return Ok($"User {userSignupData.userName} signed up successfully.");
            }

            return BadRequest("Invalid signup data.");
        }

        [HttpGet("teacher-details")]
        public async Task<IActionResult> GetTeacherDetails([FromQuery] int userId)
        {
            if (ModelState.IsValid)
            {

                return Ok($"User signed up successfully.");
            }

            return BadRequest("Invalid signup data.");
        }
        [HttpGet("student-details")]
        public async Task<IActionResult> GetStudentDetails([FromQuery] int userId)
        {
            if (ModelState.IsValid)
            {
                UserHelper userhelper = new StudentHelper();
                return Ok($"User signed up successfully.");
            }

            return BadRequest("Invalid signup data.");
        }
        [HttpGet("admin-details")]
        public async Task<IActionResult> GetAdminDetails([FromQuery] int userId)
        {
            if (ModelState.IsValid)
            {

                return Ok($"User signed up successfully.");
            }

            return BadRequest("Invalid signup data.");
        }
        
    }
}