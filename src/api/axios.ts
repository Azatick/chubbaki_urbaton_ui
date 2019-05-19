import axios, { AxiosResponse, AxiosRequestConfig } from "axios";

export class AxiosWrapper {
  static baseUrl = "https://dev.kpfu.cloud:5001/api";

  static getUrl(path: string) {
    return `${this.baseUrl}${path}`;
  }

  static async get<P = any, R = any>(
    path: string,
    params?: P,
    config?: AxiosRequestConfig
  ): Promise<AxiosResponse<R>> {
    return await axios.get(this.getUrl(path), {
      params,
      ...config
    });
  }

  static async post<P = any, R = any>(
    path: string,
    params: P,
    config?: AxiosRequestConfig
  ): Promise<AxiosResponse<R>> {
    return await axios.post(this.getUrl(path), params, config);
  }

  static async put<P = any, R = any>(
    path: string,
    params: P,
    config?: AxiosRequestConfig
  ): Promise<AxiosResponse<R>> {
    return await axios.put(this.getUrl(path), params, config);
  }

  static async delete<R = any>(
    path: string,
    config?: AxiosRequestConfig
  ): Promise<AxiosResponse<R>> {
    return await axios.delete(this.getUrl(path), config);
  }
}
