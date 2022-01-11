import * as React from "react";

import { AuthorType } from "@store/LibStore";
import { Link } from "react-router-dom";

import "@styles/preview.scss";

type AuthorPrewiewProps = {
  AuthorInfo: AuthorType;
};

const BookPreview = (props: AuthorPrewiewProps) => {
  return (
    <div className="book-preview">
      <Link to={`/works/${props.AuthorInfo.key}`}>
        <div className="book-preview_title">{props.AuthorInfo.name}</div>
      </Link>
    </div>
  );
};

export default React.memo(BookPreview);
