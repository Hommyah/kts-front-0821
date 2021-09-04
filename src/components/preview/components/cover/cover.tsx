import * as React from "react";
import { useEffect, useState } from "react";

import LibStore from "@store/LibStore";

type Props = {
  coverUrl: string;
};

const Cover: React.FC<Props> = (props) => {
  const [cover, setCover] = useState("");
  const [load, setLoad] = React.useState<boolean>(false);

  useEffect(() => {
    const store = new LibStore();

    store.getBookCoverImg(props.coverUrl).then((resp) => {
      setCover(URL.createObjectURL(resp.data));
      setLoad(true);
    });
  }, [props.coverUrl]);

  return (
    <div>
      <div className="load">
        {!load ? (
          <i className="fa fa-spinner fa-spin fa-6x fa-fw" />
        ) : (
          <img src={cover} alt={"oops"} />
        )}
      </div>
    </div>
  );
};

export default Cover;
