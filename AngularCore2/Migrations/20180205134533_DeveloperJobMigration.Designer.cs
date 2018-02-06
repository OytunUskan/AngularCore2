﻿// <auto-generated />
using AngularCore2.DBContext;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.EntityFrameworkCore.Migrations;
using Microsoft.EntityFrameworkCore.Storage;
using Microsoft.EntityFrameworkCore.Storage.Internal;
using System;

namespace AngularCore2.Migrations
{
    [DbContext(typeof(JobDBContext))]
    [Migration("20180205134533_DeveloperJobMigration")]
    partial class DeveloperJobMigration
    {
        protected override void BuildTargetModel(ModelBuilder modelBuilder)
        {
#pragma warning disable 612, 618
            modelBuilder
                .HasAnnotation("ProductVersion", "2.0.1-rtm-125")
                .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

            modelBuilder.Entity("AngularCore2.Model.CompanyAddress", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd();

                    b.Property<string>("Address1");

                    b.Property<string>("Address2");

                    b.Property<string>("City");

                    b.Property<string>("CountryName");

                    b.Property<string>("State");

                    b.Property<string>("ZipCode");

                    b.HasKey("Id");

                    b.ToTable("CompanyAddress");
                });

            modelBuilder.Entity("AngularCore2.Model.CompanyType", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd();

                    b.Property<DateTime?>("CreatedDate");

                    b.Property<string>("Description");

                    b.Property<bool>("IsActive");

                    b.Property<string>("Name");

                    b.HasKey("Id");

                    b.ToTable("CompanyType");
                });

            modelBuilder.Entity("AngularCore2.Model.DeveloperJob", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd();

                    b.Property<int?>("CompanyAddressId");

                    b.Property<string>("CompanyName");

                    b.Property<int>("CompanySize");

                    b.Property<int>("CompanyTypeId");

                    b.Property<DateTime?>("CreatedDate");

                    b.Property<DateTime?>("DeactivatedDate");

                    b.Property<bool?>("EquitySharing");

                    b.Property<string>("ExperianceLevel");

                    b.Property<int>("IndustryId");

                    b.Property<bool>("IsActive");

                    b.Property<string>("JobDescription");

                    b.Property<string>("JobTitle");

                    b.Property<int>("JobTypeId");

                    b.Property<bool?>("RemoteOption");

                    b.Property<string>("SalaryRange");

                    b.HasKey("Id");

                    b.HasIndex("CompanyAddressId");

                    b.HasIndex("CompanyTypeId");

                    b.HasIndex("IndustryId");

                    b.HasIndex("JobTypeId");

                    b.ToTable("DeveloperJob");
                });

            modelBuilder.Entity("AngularCore2.Model.Industry", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd();

                    b.Property<DateTime?>("CreatedDate");

                    b.Property<string>("Description");

                    b.Property<bool>("IsActive");

                    b.Property<string>("Name");

                    b.HasKey("Id");

                    b.ToTable("Industry");
                });

            modelBuilder.Entity("AngularCore2.Model.JobType", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd();

                    b.Property<DateTime?>("CreatedDate");

                    b.Property<string>("Description");

                    b.Property<bool>("IsActive");

                    b.Property<string>("Name");

                    b.HasKey("Id");

                    b.ToTable("JobType");
                });

            modelBuilder.Entity("AngularCore2.Model.DeveloperJob", b =>
                {
                    b.HasOne("AngularCore2.Model.CompanyAddress", "CompanyAddress")
                        .WithMany()
                        .HasForeignKey("CompanyAddressId");

                    b.HasOne("AngularCore2.Model.CompanyType", "CompanyType")
                        .WithMany()
                        .HasForeignKey("CompanyTypeId")
                        .OnDelete(DeleteBehavior.Cascade);

                    b.HasOne("AngularCore2.Model.Industry", "Industry")
                        .WithMany()
                        .HasForeignKey("IndustryId")
                        .OnDelete(DeleteBehavior.Cascade);

                    b.HasOne("AngularCore2.Model.JobType", "JobType")
                        .WithMany()
                        .HasForeignKey("JobTypeId")
                        .OnDelete(DeleteBehavior.Cascade);
                });
#pragma warning restore 612, 618
        }
    }
}
