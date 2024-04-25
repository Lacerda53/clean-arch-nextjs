import { HttpI } from "@/domain/ports";
import { BuildingRepositoryI } from "@/domain/ports/buildingRepository";

const baseUrl = process.env.NEXT_PUBLIC_ORULO_API_URL!;
const token = process.env.NEXT_PUBLIC_ORULO_API_KEY!;

export function BuildingRepositoryHttp(http: HttpI): BuildingRepositoryI {
  async function getBuildings() {
    const { buildings } = await http.get(`${baseUrl}/api/v2/buildings`, {
      headers: {
        authorization: `bearer ${token}`,
      },
    });

    return buildings;
  }

  return { getBuildings };
}
