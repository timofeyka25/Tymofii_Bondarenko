import { House } from "./house";

export class Apartment extends House {
  private numUnits: number;

  constructor(name: string, location: string, area: number, numRooms: number, numUnits: number) {
    super(name, location, area, numRooms);
    this.numUnits = numUnits;
  }

  get numUnits_() {
    return this.numUnits;
  }

  set numUnits_(numUnits: number) {
    this.numUnits = numUnits;
  }

  startConstruction() {
    console.log(`Construction of the apartment complex named ${this.name} has started at ${this.location}.`);
  }

  completeConstruction() {
    this.isCompleted = true;
    console.log(`Construction of the apartment complex named ${this.name} has been completed.`);
  }

  demolish() {
    console.log(`Demolishing the apartment complex named ${this.name} located at ${this.location}.`);
  }
}