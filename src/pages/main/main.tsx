import * as React from "react";

import Input from "@components/Input";
import BookPreview from "@components/preview";
import LibStore, { BookType } from "@store/LibStore";
import "@styles/main.css";

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
    <div className="page">
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
        <div className="popularBook">Популярные книги:</div>
        <div className="popularBook__list">
          {books.map((book) => {
            // eslint-disable-next-line no-console
            console.log(book.ISBN);
            return <BookPreview key={book.ol} bookInfo={book} />;
          })}
        </div>
      </div>
      <div>
        <div className="popularAuthor">Популярные авторы:</div>
        <div className="popularAuthor__list">
          <div className="author">
            <div className="author__img"></div>
            <div className="author__name">a</div>
            <div className="author__surname">a</div>
          </div>
          <div className="author">
            <div className="author__img"></div>
            <div className="author__name">a</div>
            <div className="author__surname">a</div>
          </div>
          <div className="author">
            <div className="author__img"></div>
            <div className="author__name">a</div>
            <div className="author__surname">a</div>
          </div>
          <div className="author">
            <div className="author__img"></div>
            <div className="author__name">a</div>
            <div className="author__surname">a</div>
          </div>
          <div className="author">
            <div className="author__img"></div>
            <div className="author__name">a</div>
            <div className="author__surname">a</div>
          </div>
          <div className="author">
            <div className="author__img"></div>
            <div className="author__name">a</div>
            <div className="author__surname">a</div>
          </div>
          <div className="author">
            <div className="author__img"></div>
            <div className="author__name">a</div>
            <div className="author__surname">a</div>
          </div>
          <div className="author">
            <div className="author__img"></div>
            <div className="author__name">a</div>
            <div className="author__surname">a</div>
          </div>
          <div className="author">
            <div className="author__img"></div>
            <div className="author__name">a</div>
            <div className="author__surname">a</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
