import * as React from "react";
import { useEffect, useState } from "react";

import Cover from "@components/cover";
import * as type from "@shared/ApiStore/types";
import LibStore, { BookFull, BookType } from "@store/LibStore";
import "@styles/bookInfo.scss";

const BookInfo = (book: BookType) => {
  const [bookData, setBookData] = useState<BookFull>({
    authors: [],
    covers: [],
    created: { value: "" },
    description: "",
    links: [],
    title: "",
  });

  useEffect(() => {
    const store = new LibStore();
    (async () => {
      const resp = await store.getBookByKey(window.location.pathname);
      if (resp.status === type.StatusHTTP.OK) {
        setBookData(resp.data);
      }
    })();
  }, [book.key]);
  return (
    <div className="prew">
      <div className="title">{bookData.title}</div>
      <div className="cover">
        <Cover coverUrl={bookData.covers ? bookData.covers[0] : ""} />
      </div>
      <div className="description">{bookData.description}</div>
      {bookData.links?.map((l) => (
        <a className="a" key={l.url} href={l.url}>
          {l.title}
        </a>
      ))}
    </div>
  );
};

export default BookInfo;
