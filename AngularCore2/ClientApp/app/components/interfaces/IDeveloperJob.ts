import { JobType } from "../../models/JobType";
import { ICompanyAddress } from "./ICompanyAddress";
import { IJobType } from "./IJobType";
import { IIndustryType } from "./IIndustryType";
import { ICompanyType } from "./ICompanyType";

export interface IDeveloperJob {

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