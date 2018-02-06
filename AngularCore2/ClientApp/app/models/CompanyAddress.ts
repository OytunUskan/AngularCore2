import { ICompanyAddress } from "../components/interfaces/ICompanyAddress";

export class CompanyAddress implements ICompanyAddress {

    constructor(id: number, address1: string, address2: string, city: string, state: string, zipCode:string, countryName: string) {
        this.Id = id;
        this.Address1 = address1;
        this.Address2 = address2;
        this.City = city;
        this.State = state;
        this.ZipCode = zipCode;
        this.CountryName = countryName;
    }

    Id: number;
    Address1: string;
    Address2: string;
    City: string;
    State: string;
    ZipCode: string;
    CountryName: string;

    

  
}