import ITransportadora from "./ITransportadora";

export default class Transportadora implements ITransportadora{
    send(): void {
        console.log("Enviando o pacote por Transportadora");
    }
    receive(): void {
        console.log("Recebendo o pacote por Transportadora");
    }
    
}