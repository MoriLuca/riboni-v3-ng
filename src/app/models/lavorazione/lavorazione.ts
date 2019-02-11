export class Lavorazione {
    LAVORAZIONE_ID: number;
    NAME: string;
    DATA_CREAZIONE: Date;
    PARAM_1: number;
    PARAM_2: number;
    PARAM_3: number;
    PARAM_4: number;
    PARAM_5: number;
    PARAM_6: number;
    PARAM_7: number;
    PARAM_8: number;
    PARAM_9: number;

    
    clone(l: Lavorazione){
        this.LAVORAZIONE_ID = l.LAVORAZIONE_ID;
        this.NAME = l.NAME;
        this.DATA_CREAZIONE = l.DATA_CREAZIONE; 
        this.PARAM_1 = l.PARAM_1;
        this.PARAM_2 = l.PARAM_2;
        this.PARAM_3 = l.PARAM_3;
        this.PARAM_4 = l.PARAM_4;
        this.PARAM_5 = l.PARAM_5;
        this.PARAM_6 = l.PARAM_6;
        this.PARAM_7 = l.PARAM_7;
        this.PARAM_8 = l.PARAM_8;
        this.PARAM_9 = l.PARAM_9;
        
    }

    init(){
        this.LAVORAZIONE_ID = -1;
        this.NAME = "";
        this.DATA_CREAZIONE = new Date(); 
        this.PARAM_1 = 0;
        this.PARAM_2 = 0;
        this.PARAM_3 = 0;
        this.PARAM_4 = 0;
        this.PARAM_5 = 0;
        this.PARAM_6 = 0;
        this.PARAM_7 = 0;
        this.PARAM_8 = 0;
        this.PARAM_9 = 0;
    }
}