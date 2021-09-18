import * as React from "react";

import Cover from "@components/cover";
import { BookType } from "@store/LibStore";
import { Link } from "react-router-dom";

import "@styles/preview.scss";

type BookPreviewProps = {
  bookInfo: BookType;
};

const BookPreview = (props: BookPreviewProps) => {
  return (
    <div className="book-preview">
      <Link to={`/works/${props.bookInfo.key}`}>
        <div className="book-preview_title">{props.bookInfo.title}</div>
      </Link>
      <Cover coverUrl={props.bookInfo.coverId} />
    </div>
  );
};

export default React.memo(BookPreview);
