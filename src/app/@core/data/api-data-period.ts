
export abstract class ApiDataPeriod {
  abstract get(entity:string, period:string): number[];
}
