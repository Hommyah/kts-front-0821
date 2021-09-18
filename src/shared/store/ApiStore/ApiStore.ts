import qs from "qs";

import * as type from "./types";

export default class ApiStore implements type.IApiStore {
  readonly baseUrl: string = "https://openlibrary.org";
  readonly coversUrl: string = "https://covers.openlibrary.org";

  async request<SuccessT, ErrorT = any, ReqT = {}>(
    params: type.RequestParams<ReqT>
  ): Promise<type.ApiResponse<SuccessT, ErrorT>> {
    let query = qs.stringify(params.data);
    const url = `${this.baseUrl}${params.endpoint}?${query}`;
    try {
      const resp = await fetch(url, {
        method: params.method,
        headers: params.headers,
      });
      return {
        success: resp.status === type.StatusHTTP.OK,
        status: resp.status,
        data: await resp.json(),
      };
    } catch (e: any) {
      return {
        success: false,
        status: e.status,
        data: e.data,
      };
    }
  }

  async requestImage(
    params: type.RequestParams<any>
  ): Promise<{ data: Blob; success: boolean; status: number }> {
    let query = qs.stringify(params.data);
    const url = `${this.coversUrl}${params.endpoint}?${query}`;
    try {
      const resp = await fetch(url, {
        method: params.method,
        headers: params.headers,
      });
      return {
        success: resp.status === type.StatusHTTP.OK,
        status: resp.status,
        data: await resp.blob(),
      };
    } catch (e: any) {
      return {
        success: false,
        status: e.status,
        data: e.data,
      };
    }
  }
}
