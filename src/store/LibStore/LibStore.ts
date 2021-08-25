import {ILibStore, BookType} from "./types";
import ApiStore from "shared/store/ApiStore";
import {HTTPMethod, RequestParams} from "shared/store/ApiStore/types";
import {BookListLimit, BookListOffset} from "utils/constants";

export default class LibStore implements ILibStore {
    private readonly  store = new ApiStore()

    async searchByQuery(querySearch: string, limit: number, offset: number): Promise<Array<BookType>> {

        const params: RequestParams<any> = {
            method: HTTPMethod.GET,
            headers: {},
            endpoint: "/search.json",
            data: {
                q: querySearch,
                fields: "title, author_name, cover_i",
                limit: BookListLimit,
                offset: BookListOffset
            }
        }
        const resp = await this.store.request(params)
        const data = resp.data.docs
        return data.map((obj: { key: string, title: string, author_name: Array<string>, cover_i: string }) => ({
            author: obj.author_name,
            title: obj.title,
            coverId: obj.cover_i,
            coverUrl: ""
        }))

        //return books
    }
}

