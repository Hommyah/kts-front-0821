import * as React from "react";

import Cover from "@components/preview/components/cover";
import { BookType } from "@store/LibStore";

type BookPreviewProps = {
  key: string | number;
  bookInfo: BookType;
};

const BookPreview = (props: BookPreviewProps) => {
  // setImgTest(
  //   books.map(
  //     (b) => `https://covers.openlibrary.org/b/id/${b.coverId}-M.jpg`
  //   )
  //

  return (
    <div key={props.key}>
      <div>{props.bookInfo.title}</div>
      <Cover coverUrl={props.bookInfo.coverId} />
    </div>
  );
};

export default BookPreview;
