export abstract class Build {
    protected name: string;
    protected location: string;
    private area: number;
    protected isCompleted: boolean;
  
    constructor(name: string, location: string, area: number, isCompleted: boolean) {
      this.name = name;
      this.location = location;
      this.area = area;
      this.isCompleted = isCompleted;
    }
  
    get name_() {
      return this.name;
    }
  
    get location_() {
      return this.location;
    }
  
    get area_() {
      return this.area;
    }
  
    get isCompleted_() {
      return this.isCompleted;
    }
  
    set name_(name: string) {
      this.name = name;
    }
  
    set location_(location: string) {
      this.location = location;
    }
  
    set area_(area: number) {
      this.area = area;
    }
  
    set isCompleted_(isCompleted: boolean) {
      this.isCompleted = isCompleted;
    }
  
    abstract startConstruction(): void;
    abstract completeConstruction(): void;
    abstract demolish(): void;
  }
  