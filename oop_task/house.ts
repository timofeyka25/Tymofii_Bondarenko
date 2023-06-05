import { Build } from "./build";

export class House extends Build {
    private numRooms: number;
  
    constructor(name: string, location: string, area: number, numRooms: number) {
      super(name, location, area, false);
      this.numRooms = numRooms;
    }
  
    get numRooms_() {
      return this.numRooms;
    }
  
    set numRooms_(numRooms: number) {
      this.numRooms = numRooms;
    }
  
    startConstruction() {
      console.log(`Construction of the house named ${this.name} has started at ${this.location}.`);
    }
  
    completeConstruction() {
      this.isCompleted = true;
      console.log(`Construction of the house named ${this.name} has been completed.`);
    }
  
    demolish() {
      console.log(`Demolishing the house named ${this.name} located at ${this.location}.`);
    }
  }