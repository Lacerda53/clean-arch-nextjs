import { Repository } from "@/adapter/repositories";
import { Building } from "@/domain/entities/building";
import { useEffect, useState } from "react";

export function useBuildings() {
  const [buildings, setBuildings] = useState<Building[]>();
  const [isLoading, setIsLoading] = useState(false);

  const loadBuildings = async () => {
    setIsLoading(true);
    const response = await Repository.buildings.getBuildings();
    setBuildings(response);
    setIsLoading(false);
  };

  useEffect(() => {
    loadBuildings();
  }, []);

  return { buildings, isLoading };
}
