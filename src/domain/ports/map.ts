import { Building } from "../entities/building";

export interface MapI {
  listPoints: () => Promise<Building[]>;
}
