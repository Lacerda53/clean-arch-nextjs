import { Building } from "../entities/building";

export interface BuildingRepositoryI {
  getBuildings: () => Promise<Building[]>;
}
