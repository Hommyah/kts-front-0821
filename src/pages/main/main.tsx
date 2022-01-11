import * as React from "react";
import { createContext, useContext } from "react";

import Input from "@components/Input";
import BookPreview from "@components/preview";
import LibStore, { BookType } from "@store/LibStore";
import "@styles/main.scss";
import NonePrinter from "@utils/NonePrinter";

type BookContextType = {
  list: BookType[];
  isLoading: boolean;
  load: (query: string, limit: number, offset: number) => void;
};

let temp: BookContextType = {
  list: [],
  load: (query: string, limit: number, offset: number) => {},
  isLoading: true,
};

const BooksContext = createContext(temp);
const Provider = BooksContext.Provider;
export const useBookContext = () => useContext(BooksContext);

const Main = () => {
  const [books, setBooks] = React.useState<Array<BookType>>([]);
  const [query, setQuery] = React.useState<string>("");

  const handleQuery = React.useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setQuery(e.target.value);
    },
    []
  );

  const handleClick = React.useCallback(() => {
    const test = new LibStore();
    test.searchByQuery(query, 10, 0).then((resp) => {
      setBooks(resp);
    });
    setQuery("");
  }, [query]);

  const handleEnter = React.useCallback(
    (e: React.KeyboardEvent<HTMLInputElement>) => {
      if (e.key === "Enter") {
        handleClick();
      }
    },
    [handleClick]
  );

  return (
    <div>
      <div className="head">Электронная библиотека</div>
      <div className="seek">
        <Input
          placeholder={"Введите название книги или имя автора"}
          value={query}
          onChange={handleQuery}
          onKeyChange={handleEnter}
        />
        <button className="btn" onClick={handleClick}>
          Поиск
        </button>
      </div>
      <div>
        <Provider
          value={{
            list: books,
            isLoading: false,
            load: function (query: string, limit: number, offset: number) {
              const store = new LibStore();
              store.searchByQuery(query, limit, offset).then((resp) => {
                this.list = resp;
                this.isLoading = false;
              });
            },
          }}
        >
          {NonePrinter(
            <div className="popularBook">Результаты не найдены</div>,
            books?.length > 0
          )}
          <div className="popularBook__list">
            {books.map((book) => {
              return <BookPreview key={book.key} bookInfo={book} />;
            })}
          </div>
        </Provider>
      </div>
    </div>
  );
};

export default Main;
