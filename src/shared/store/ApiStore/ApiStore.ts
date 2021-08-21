import {ApiResponse, HTTPMethod, IApiStore, RequestParams, StatusHTTP} from "./types";

const qs = require('qs');


export default class ApiStore implements IApiStore {
    readonly baseUrl: string = "https://openlibrary.org";

    async request<SuccessT, ErrorT = any, ReqT = {}>(params: RequestParams<ReqT>): Promise<ApiResponse<SuccessT, ErrorT>> {
        let q = qs.stringify(params.data)
        q = q !== "" ? '?' + q : q
        const url = `${this.baseUrl}${params.endpoint}${q}`
        try {
            const resp = await fetch(url, {method: params.method, headers: params.headers})
            return {
                success: resp.status === StatusHTTP.OK,
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