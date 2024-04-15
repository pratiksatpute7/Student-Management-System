using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using backend.Models;
using Microsoft.AspNetCore.Mvc;

namespace backend.Controllers
{
    [Route("class")]
    [ApiController]
    public class ClassController : ControllerBase
    {
        [HttpPost("create")]
        public async Task<IActionResult> CreateClass ([FromBody] UserSignUpModel userSignupData)
        {
            if (ModelState.IsValid)
            {

                return Ok($"Create class successfully.");
            }

            return BadRequest("Invalid signup data.");
        }

        [HttpGet("details")]
        public async Task<IActionResult> CreateClass ([FromQuery] int classId)
        {
            if (ModelState.IsValid)
            {

                return Ok($"Create class successfully.");
            }

            return BadRequest("Invalid signup data.");
        }

        [HttpPost("enroll-students")]
        public async Task<IActionResult> EnrollStudents ([FromQuery] int classId)
        {
            if (ModelState.IsValid)
            {

                return Ok($"Create class successfully.");
            }

            return BadRequest("Invalid signup data.");
        }
    }
}