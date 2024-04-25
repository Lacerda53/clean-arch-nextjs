export type Building = {
  apts_per_floor: number;
  bathrooms: number;
  bedrooms: number;
  default_image: DefaultImageDTO;
  developer: {
    id: string;
    name: string;
  };
  opening_date?: string;
  address: {
    street_type: string;
    street: string;
    number: string;
    city: number;
    area: string;
    state: string;
  };
  publisher?: {
    name: string;
    id: string;
  };
  description: string;
  features: string[];
  favorited?: boolean;
  finality: string;
  id: number;
  images: string[];
  max_area: number;
  max_bathrooms: number;
  max_bedrooms: number;
  max_parking: number;
  max_suites: number;
  min_area: number;
  min_bathrooms: number;
  min_bedrooms: number;
  min_parking: number;
  min_price: number;
  min_suites: number;
  name: string;
  number_of_floors: number;
  number_of_towers: number;
  orulo_url: string;
  parking: number;
  private_area: number;
  price_per_private_square_meter: number;
  suites: number;
  stage: string;
  status: string;
  type: string;
  stock: number;
  updated_at: string;
  virtual_tour?: string;
  webpage?: string;
  typologies?: TypologiesDTO[];
  commercial_contacts?: CommercialContactBuildingDTO[];
  files?: BuildingFileDTO[];
  videos?: BuildingVideoDTO[];
  product_plan_flags?: BuildingProductPlanFlagsDTO;
};

type BuildingProductPlanFlagsDTO = {
  floor_plans_enabled: boolean;
  videos_enabled: boolean;
  virtual_tour_enabled: boolean;
};

type BuildingVideoDTO = {
  id: string;
  url: string;
  description: string;
};

type BuildingFileDTO = {
  id: string;
  name: string;
};

type DefaultImageDTO = {
  id: string;
  description: string;
  ["200x140"]: string;
  ["520x280"]: string;
};

type TypologiesDTO = {
  id: string;
  type: string;
  original_price: number;
  discount_price: number;
  private_area: number;
  total_area: number;
  bedrooms: number;
  bathrooms: number;
  suites: number;
  parking: number;
  solar_position?: string;
  condominium_value?: number;
  urban_land_tax?: number;
  rental_price?: number;
  stock: number;
  total_units?: number;
  reference: string;
  updated_at: string;
};

type CommercialContactBuildingDTO = {
  id: string;
  commercial_contact_rated: number;
  broker_commission: number;
  name: string;
  rating: string;
  real_estate_agency_commission: number;
  total_ratings: number;
  partner: Record<string, unknown>;
};
