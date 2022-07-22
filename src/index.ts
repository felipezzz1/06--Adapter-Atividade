import TransportadoraAdapter from "./Adapters/TransportadoraAdapter";
import Correios from "./Correios/Correios";
import ICorreios from "./Correios/ICorreios";
import Transportadora from "./Transportadora/Transportadora";

const transp : ICorreios = new TransportadoraAdapter(new Transportadora);

transp.receiveCorreios();
transp.sendCorreios();

const transp1 : ICorreios = new Correios();
transp1.receiveCorreios();
transp1.sendCorreios();