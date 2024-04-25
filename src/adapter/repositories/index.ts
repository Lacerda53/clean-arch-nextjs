import { httpClient } from "../http";
import { BuildingRepositoryHttp } from "./buildingRepositoryHttp";

function buildRepository() {
  const http = httpClient;

  return {
    buildings: { ...BuildingRepositoryHttp(http) },
  };
}

export const Repository = buildRepository();
