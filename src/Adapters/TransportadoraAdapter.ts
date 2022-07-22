import ICorreios from "../Correios/ICorreios";
import Transportadora from "../Transportadora/Transportadora";

export default class TransportadoraAdapter implements ICorreios{
    constructor(private transportadora : Transportadora){
        console.log("Adaptando Transportadora em Correios");
    }
    sendCorreios(): void {
        this.transportadora.send();
    }
    receiveCorreios(): void {
        this.transportadora.receive();
    }
    
}