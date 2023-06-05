import { Build } from "./build";

export class Tunnel extends Build {
    private length: number;
    private diameter: number;
  
    constructor(name: string, location: string, length: number, diameter: number) {
      super(name, location, 0, false);
      this.length = length;
      this.diameter = diameter;
    }
  
    get length_() {
      return this.length;
    }
  
    set length_(length: number) {
      this.length = length;
    }
  
    get diameter_() {
      return this.diameter;
    }
  
    set diameter_(diameter: number) {
      this.diameter = diameter;
    }
  
    startConstruction() {
      console.log(`Construction of the tunnel named ${this.name} has started at ${this.location}.`);
    }
  
    completeConstruction() {
      this.isCompleted = true;
      console.log(`Construction of the tunnel named ${this.name} has been completed.`);
    }
  
    demolish() {
      console.log(`Demolishing the tunnel named ${this.name} located at ${this.location}.`);
    }
  }
  