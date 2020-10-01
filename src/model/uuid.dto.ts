import { IsUUID } from "class-validator";

class UUID {
    @IsUUID() id: string;

    constructor(id: string){
        this.id = id;
    }
}