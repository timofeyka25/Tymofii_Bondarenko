import { House } from "./house";
import { Apartment } from "./apart";
import { Tunnel } from "./tunnel";
import { RailwayTunnel } from "./railwayTunnel";

const house = new House("Dream House", "123 Main Street", 2000, 4);
house.startConstruction();
house.completeConstruction();
console.log(house.numRooms_);

const apartment = new Apartment("City Apartments", "456 Elm Street", 5000, 2, 50);
apartment.startConstruction();
apartment.completeConstruction();
console.log(apartment.numRooms_);
console.log(apartment.numUnits_);

const tunnel = new Tunnel("Underground Passage", "789 Oak Street", 1000, 5);
tunnel.startConstruction();
tunnel.completeConstruction();
console.log(tunnel.length_);
console.log(tunnel.diameter_);

const railwayTunnel = new RailwayTunnel("Railway Passage", "567 Pine Street", 1500, 6, 2);
railwayTunnel.startConstruction();
railwayTunnel.completeConstruction();
console.log(railwayTunnel.length_);
console.log(railwayTunnel.diameter_);
console.log(railwayTunnel.numTracks_);

