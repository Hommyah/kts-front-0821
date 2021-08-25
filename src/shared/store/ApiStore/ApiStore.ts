import * as type from "./types"
import qs from 'qs';


export default class ApiStore implements type.IApiStore {
    readonly baseUrl: string = "https://openlibrary.org";

    async request<SuccessT, ErrorT = any, ReqT = {}>(params: type.RequestParams<ReqT>): Promise<type.ApiResponse<SuccessT, ErrorT>> {
        let query = qs.stringify(params.data)
        const url = `${this.baseUrl}${params.endpoint}?${query}`
        try {
            const resp = await fetch(url, {method: params.method, headers: params.headers})
            return {
                success: resp.status === type.StatusHTTP.OK,
                status: resp.status,
                data: await resp.json()
            };
        } catch (e) {
            return {
                success: false,
                status: e.status,
                data: e.data
            }
        }
    }
}