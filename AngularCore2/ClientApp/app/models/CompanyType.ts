import { ICompanyType } from "../components/interfaces/ICompanyType";

export class CompanyType implements ICompanyType {

    constructor(id: number, name: string, description: string, isActive: boolean, createdDate: Date) {
        this.id = id;
        this.name = name;
        this.description = description;
        this.isActive = isActive;
        this.createdDate = createdDate;
    }

    id: number;
    name: string;
    description: string;
    isActive: boolean;
    createdDate: Date;
}