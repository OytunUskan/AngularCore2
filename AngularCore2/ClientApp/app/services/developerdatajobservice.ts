import { Injectable } from '@angular/core'
import { Http } from '@angular/http'

@Injectable()
export class DeveloperJobDataService {

    private baseUrl: string = "http://localhost:56592/api/";
    constructor(private http: Http) {
       
    }


    public getAllIndustryTypes() {
        return this.http.get(this.baseUrl + "Industries");
    }

    public getAllCompanyTypes() {
        return this.http.get(this.baseUrl + "CompanyTypes");
    }

    public getAllJobTypes() {
        return this.http.get(this.baseUrl + "JobTypes");
    }

}