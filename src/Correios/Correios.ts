import ICorreios from "./ICorreios";

export default class Correios implements ICorreios{
    sendCorreios(): void {
        console.log("Enviando pacote pelos Correios");
    }
    receiveCorreios(): void {
        console.log("Recebendo pacote dos Correios");
    }
    
}