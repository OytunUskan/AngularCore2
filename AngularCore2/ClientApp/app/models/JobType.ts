import { IJobType } from "../components/interfaces/IJobType";

export class JobType implements IJobType {
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