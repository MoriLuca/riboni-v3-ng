export class PlcParametriLive{
    //elenco delle tags dinamiche ricevute, per poter far visualizzare in modo dinamico tutte le 
    //tags che vengono passate
    normalTags: ITag[];
    criticalTags: ITag[];
    utilityTags: ITag[];
    alarmsTags: ITag[];

    public constructor(){
        this.normalTags = [];
        this.criticalTags = [];
        this.utilityTags = [];
        this.alarmsTags = [];
    }
}

export interface ITag {
    name: string;
    value: any;
}