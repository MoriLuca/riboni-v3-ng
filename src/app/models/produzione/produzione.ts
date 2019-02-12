export class Produzione {
    
    PRODUZIONE_ID: number;
    CODICE_PRODUZIONE: string;
    NOME_LAVORAZIONE: string;
    LAVORAZIONE_ID: number;
    TARGET: number;
    PRODOTTI: number;
    PRIORITA: number;

    
    // clone(l: Lavorazione){
    //     this.LAVORAZIONE_ID = l.LAVORAZIONE_ID;
    //     this.NAME = l.NAME;
    //     this.DATA_CREAZIONE = l.DATA_CREAZIONE; 
    //     this.PARAM_1 = l.PARAM_1;
    //     this.PARAM_2 = l.PARAM_2;
    //     this.PARAM_3 = l.PARAM_3;
    //     this.PARAM_4 = l.PARAM_4;
    //     this.PARAM_5 = l.PARAM_5;
    //     this.PARAM_6 = l.PARAM_6;
    //     this.PARAM_7 = l.PARAM_7;
    //     this.PARAM_8 = l.PARAM_8;
    //     this.PARAM_9 = l.PARAM_9;
        
    // }

    init(){
        this.PRODUZIONE_ID = 0;
        this.CODICE_PRODUZIONE = "";
        this.NOME_LAVORAZIONE = "";
        this.LAVORAZIONE_ID = 0;
        this.TARGET = 0;
        this.PRODOTTI = 0;
        this.PRIORITA = 0;
    }
}