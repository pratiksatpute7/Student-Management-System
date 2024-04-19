using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using backend.Models;

namespace backend.Helpers
{
    public class StudentHelper : UserHelper
    {
        public override async Task<UserModel> GetUserDetails()
        {
            return new StudentModel();
        }
    }
}