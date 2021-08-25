/** Интерфейс класса для работы с GitHub API
 * названия getSomeData и postSomeData
 * (а также типов GetSomeDataParams и PostSomeDataPrams)
 * поменяйте в соответствии с выполняемым запросом.
 * Выберите любой запрос из публичного API GitHub.
 */
export interface ILibStore {
    // getSomeData(params: GetSomeDataParams): Promise<ApiResp<GetSumeDataResp>>;
    //
    // Необязательный пункт, т.к. требует авторизации. Понадобится в будущем
    //postSomeData(params: PostSomeDataPrams): Promise<ApiResp<PostSomeDataResp>>;
}

export type BookType = {
    authors: Array<string>; // author_name
    title: string; // title
    coverId: string; // cover_i
    coverUrl: string
    ol: string;
    ISBN: string
}