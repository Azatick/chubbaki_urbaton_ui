export interface WasteTakePoint {
  id: string;
  location: {
    id: string;
    address: string;
    longitude: number;
    latitude: number;
  };
  name: string;
}
