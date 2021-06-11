export class ApiModel {
    name: string = "";
    version: string = "";
    namespace: string = "";
    payload: any;
    status: string = "DESIGN";
    tags: string[] = [];
    kvPairs: any = {}; 
    constructor(){ }
}