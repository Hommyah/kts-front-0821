import {ILibStore, BookType} from "./types";
import ApiStore from "shared/store/ApiStore";
import {HTTPMethod, RequestParams} from "shared/store/ApiStore/types";

export default class LibStore implements ILibStore {
    private readonly  store = new ApiStore()

    async searchByQuery(querySearch: string, limit: number, offset: number): Promise<Array<BookType>> {
        //let books: Array<BookType> = []

        const params: RequestParams<any> = {
            method: HTTPMethod.GET,
            headers: {},
            endpoint: "/search.json",
            data: {
                q: querySearch,
                fields: "title, author_name, cover_i",
                limit: limit,
                offset: offset
            }
        }
        const resp = await this.store.request(params)
        let data = resp.data.docs.slice(0, 5);
        return data.map((obj: { key: string, title: string, author_name: Array<string>, cover_i: string }) => ({
            author: obj.author_name,
            title: obj.title,
            coverId: obj.cover_i,
            coverUrl: ""
        }))

        //return books
    }
}

