export class Lavorazione {
    LAVORAZIONE_ID: number;
    NAME: string;
    DATA_CREAZIONE: Date;
    VELOCITA_LAMA_SP: number;
    LUNGHEZZA_TAGLIO: number;

    
    clone(l: Lavorazione){
        this.LAVORAZIONE_ID = l.LAVORAZIONE_ID;
        this.NAME = l.NAME;
        this.DATA_CREAZIONE = l.DATA_CREAZIONE; 
        this.VELOCITA_LAMA_SP = l.VELOCITA_LAMA_SP;
        this.LUNGHEZZA_TAGLIO = l.LUNGHEZZA_TAGLIO;
        
    }

    init(){
        this.LAVORAZIONE_ID = -1;
        this.NAME = "";
        this.DATA_CREAZIONE = new Date(); 
        this.VELOCITA_LAMA_SP = 0;
        this.LUNGHEZZA_TAGLIO = 0;
    }
}