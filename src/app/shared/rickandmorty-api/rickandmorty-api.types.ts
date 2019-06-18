// General Types

export interface Paginated<T> {
  info: {
    count: number;
    pages: number,
    next: string;
    prev: string;
  };

  results: T[];
}

export interface ResourceObject {
  id: number;
  url: string;
  created: string;
}


// Location Types

export interface ListLocationsParams {
  name: string;
}

// TODO: Renamed Location to RAMLocation to prevent confusion with the web's Location type.
export interface RAMLocation extends ResourceObject {
  name: string;
  type: string;
  dimension: string;
  residents: string[];
}
