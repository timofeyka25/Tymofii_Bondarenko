import { Tunnel } from "./tunnel";

export class RailwayTunnel extends Tunnel {
  private numTracks: number;

  constructor(name: string, location: string, length: number, diameter: number, numTracks: number) {
    super(name, location, length, diameter);
    this.numTracks = numTracks;
  }

  get numTracks_() {
    return this.numTracks;
  }

  set numTracks_(numTracks: number) {
    this.numTracks = numTracks;
  }

  startConstruction() {
    console.log(`Construction of the railway tunnel named ${this.name} has started at ${this.location}.`);
  }

  completeConstruction() {
    this.isCompleted = true;
    console.log(`Construction of the railway tunnel named ${this.name} has been completed.`);
  }

  demolish() {
    console.log(`Demolishing the railway tunnel named ${this.name} located at ${this.location}.`);
  }
}