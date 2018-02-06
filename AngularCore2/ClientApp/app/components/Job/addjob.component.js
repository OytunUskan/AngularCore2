var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component } from '@angular/core';
import { DeveloperJobDataService } from '../../services/developerdatajobservice';
import { DeveloperJob } from '../../models/DeveloperJob';
import { CompanyAddress } from '../../models/CompanyAddress';
import { JobType } from '../../models/JobType';
import { IndustryType } from '../../models/IndustryType';
import { CompanyType } from '../../models/CompanyType';
var AddjobComponent = /** @class */ (function () {
    function AddjobComponent(dataService) {
        var _this = this;
        this.dataService = dataService;
        this.devJob = this.initializeDeveloperJob();
        this.dataService.getAllIndustryTypes().subscribe(function (resp) {
            _this.industryType = resp.json();
            //console.log(this.industryType);
        }, function (error) { return console.error(error); });
        this.dataService.getAllCompanyTypes().subscribe(function (resp) {
            _this.companyType = resp.json();
            //console.log(this.companyType);
        }, function (error) { return console.error(error); });
        this.dataService.getAllJobTypes().subscribe(function (resp) {
            _this.jobType = resp.json();
            //console.log(this.jobType);
        }, function (error) { return console.error(error); });
    }
    AddjobComponent.prototype.initializeDeveloperJob = function () {
        return new DeveloperJob("", "", new CompanyAddress(0, "", "", "", "", "", ""), "", false, false, new JobType(0, "", "", false, new Date), "", new IndustryType(0, "", "", false, new Date), 0, "", new CompanyType(0, "", "", false, new Date), 0, "", false, new Date, new Date);
    };
    AddjobComponent.prototype.onSubmit = function () {
        console.log(this.devJob);
    };
    AddjobComponent = __decorate([
        Component({
            selector: 'addjob',
            template: require('./addjob.component.html'),
            providers: [DeveloperJobDataService]
        }),
        __metadata("design:paramtypes", [DeveloperJobDataService])
    ], AddjobComponent);
    return AddjobComponent;
}());
export { AddjobComponent };
//# sourceMappingURL=addjob.component.js.map