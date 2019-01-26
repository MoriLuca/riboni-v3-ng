export class PlcParametriLive{
    //elenco delle tags dinamiche ricevute, per poter far visualizzare in modo dinamico tutte le 
    //tags che vengono passate
    liveMonitor: ITag[];
    criticalTags: ITag[];

    public constructor(){
        this.liveMonitor = [];
        this.criticalTags = [];
    }
}

export interface ITag {
    name: string;
    value: any;
}