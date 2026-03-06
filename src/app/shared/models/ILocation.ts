export interface ILocation {
  id: number;
  user?: number;
  ville: string;
  pays: string;
  region: string | null;
  latitude: number | null;
  longitude: number | null;
  google_maps_url: string | null;
}