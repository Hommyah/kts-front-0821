import * as React from "react";

import Input from "@components/Input";
import BookPreview from "@components/preview";
import LibStore, { BookType } from "@store/LibStore";
import { v4 as uuid } from "uuid";
import "@styles/main.css";

const Main = () => {
  const [books, setBooks] = React.useState<Array<BookType>>([]);

  const handleClick = React.useCallback(() => {
    const query = "Harry Potter";
    const test = new LibStore();
    test.searchByQuery(query, 10, 0).then((books) => {
      setBooks(books);
    });
  }, []);

  return (
    <div className="page">
      <div className="head">Электронная библиотека</div>
      <div className="seek">
        <Input placeholder={"Введите название книги или имя автора"} />
        <button className="btn" onClick={handleClick}>
          Поиск
        </button>
      </div>
      <div>
        <div className="popularBook">Популярные книги:</div>
        <div className="popularBook__list">
          {books.map((book) => {
            return <BookPreview key={uuid()} bookInfo={book} />;
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
