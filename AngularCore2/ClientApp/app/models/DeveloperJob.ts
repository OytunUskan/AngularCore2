import { IDeveloperJob } from "../components/interfaces/IDeveloperJob";
import { ICompanyAddress } from "../components/interfaces/ICompanyAddress";
import { IJobType } from "../components/interfaces/IJobType";
import { IIndustryType } from "../components/interfaces/IIndustryType";
import { ICompanyType } from "../components/interfaces/ICompanyType";

export class DeveloperJob implements IDeveloperJob {


    constructor(jobTitle: string, companyName: string, companyAddress: ICompanyAddress, salaryRange: string,
        remoteOption: boolean, equitySharing: boolean, jobType: IJobType, experianceLevel: string, industry: IIndustryType,
        industryId: number, companySize: string, companyType: ICompanyType, companyTypeId: number, jobDescription: string,
        isActive: boolean, createdDate: Date, deactivatedDate: Date) {
        this.JobTitle = jobTitle;
        this.CompanyName = companyName;
        this.CompanyAddress = companyAddress;
        this.SalaryRange = salaryRange;
        this.RemoteOption = remoteOption;
        this.EquitySharing = equitySharing;
        this.JobType = jobType;
        this.ExperianceLevel = experianceLevel;
        this.Industry = industry;
        this.IndustryId = industryId;
        this.CompanySize = companySize;
        this.CompanyType = companyType;
        this.CompanyTypeId = companyTypeId;
        this.JobDescription = jobDescription;
        this.IsActive = isActive;
        this.CreatedDate = createdDate;
        this.DeactivatedDate = deactivatedDate;

    }

    Id: number;
    JobTitle: string;
    CompanyName: string;
    CompanyAddress: ICompanyAddress;
    SalaryRange: string;
    RemoteOption: boolean;
    EquitySharing: boolean;
    JobType: IJobType;
    JobTypeId: number;
    ExperianceLevel: string;
    Industry: IIndustryType;
    IndustryId: number;
    CompanySize: string;
    CompanyType: ICompanyType;
    CompanyTypeId: number;
    JobDescription: string;
    IsActive: boolean;
    CreatedDate: Date;
    DeactivatedDate: Date;





}