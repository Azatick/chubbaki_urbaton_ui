import { AxiosWrapper } from "./axios";

export class GoogleGeocodingApi extends AxiosWrapper {
  static baseUrl = "https://maps.googleapis.com/maps/api";
  static apiKey = "AIzaSyAOkjXD2KVJAHl-QvLNKLl3uk226eTTPgA";

  static async getAddressByCoord({
    longitude,
    latitude
  }: {
    longitude: number;
    latitude: number;
  }): Promise<string> {
    const location = (await this.get(`/geocode/json`, {
      latlng: `${latitude},${longitude}`,
      key: this.apiKey,
      location_type: "ROOFTOP",
      result_type: "street_address"
    })).data.results[0];

    return location && location.formatted_address;
  }
}
