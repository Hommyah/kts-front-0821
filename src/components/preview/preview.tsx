import * as React from "react";

import Cover from "@components/preview/components/cover";
import { BookType } from "@store/LibStore";

type BookPreviewProps = {
  bookInfo: BookType;
};

const BookPreview = (props: BookPreviewProps) => {
  return (
    <div>
      <div>{props.bookInfo.title}</div>
      <Cover coverUrl={props.bookInfo.coverId} />
    </div>
  );
};

export default React.memo(BookPreview);
