using AngularCore2.Model;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace AngularCore2.DBContext
{
    public class JobDBContext : DbContext
    {
        public JobDBContext(DbContextOptions options) : base(options) { }

        public DbSet<CompanyAddress> CompanyAddress { get; set; }
        public DbSet<CompanyType> CompanyType { get; set; }
        public DbSet<DeveloperJob> DeveloperJob { get; set; }
        public DbSet<Industry> Industry { get; set; }
        public DbSet<JobType> JobType { get; set; }

    }
}
