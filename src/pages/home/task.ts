export class Tasks{

    constructor(title){
        this.title=title;
        this.isEdit=false;
        this.idDone=false;
    }

    id:number;
    title:string;
    isEdit:boolean;
    idDone:boolean;

}