import { HttpI } from "@/domain/ports";
import { BuildingRepositoryI } from "@/domain/ports/buildingRepository";

const baseUrl = process.env.NEXT_PUBLIC_ORULO_API_URL;

export function BuildingRepositoryHttp(http: HttpI): BuildingRepositoryI {
  async function getBuildings() {
    const buildings = await http.get(`${baseUrl}/api/v2/buildings`, {
      headers: {
        authorization: "bearer 2z1eozFJXUmqP0iLMVw_WqFehHWYfXUG_JyKeBde3pw",
      },
    });

    return buildings;
  }

  return { getBuildings };
}
