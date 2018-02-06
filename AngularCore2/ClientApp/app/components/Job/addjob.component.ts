import { Component } from '@angular/core';
import { DeveloperJobDataService } from '../../services/developerdatajobservice'
import { IIndustryType } from '../interfaces/IIndustryType';
import { ICompanyType } from '../interfaces/ICompanyType';
import { IJobType } from '../interfaces/IJobType';
import { ICompanyAddress } from '../interfaces/ICompanyAddress';
import { IDeveloperJob } from '../interfaces/IDeveloperJob';
import { DeveloperJob } from '../../models/DeveloperJob';
import { CompanyAddress } from '../../models/CompanyAddress';
import { JobType } from '../../models/JobType';
import { IndustryType } from '../../models/IndustryType';
import { CompanyType } from '../../models/CompanyType';

@Component({
    selector: 'addjob',
    template: require('./addjob.component.html'),
    providers: [DeveloperJobDataService]
})
export class AddjobComponent {


    private industryType: IIndustryType[];
    private companyType: ICompanyType[];
    private jobType: IJobType[];

    public devJob: DeveloperJob = this.initializeDeveloperJob();


    private initializeDeveloperJob() {
        return new DeveloperJob("", "", new CompanyAddress(0, "", "", "", "", "", ""), "", false, false, new JobType(0, "", "", false, new Date), "", new IndustryType(0, "", "", false, new Date), 0, "", new CompanyType(0, "", "", false, new Date), 0, "", false, new Date, new Date);
    }
    constructor(private dataService: DeveloperJobDataService) {
        this.dataService.getAllIndustryTypes().subscribe(resp => {
            this.industryType = resp.json() as IIndustryType[];

            //console.log(this.industryType);
        }, error => console.error(error));

        this.dataService.getAllCompanyTypes().subscribe(resp => {
            this.companyType = resp.json() as ICompanyType[];

            //console.log(this.companyType);
        }, error => console.error(error));

        this.dataService.getAllJobTypes().subscribe(resp => {
            this.jobType = resp.json() as IJobType[];

            //console.log(this.jobType);
        }, error => console.error(error));


    }


    onSubmit() {
        console.log(this.devJob);
    }


}
