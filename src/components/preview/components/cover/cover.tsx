import * as React from "react";
import { useEffect, useState } from "react";

import * as type from "@shared/ApiStore/types";
import LibStore from "@store/LibStore";

import CoverEmpty from "../../../../styles/media/cover_empty.jpg";

type Props = {
  coverUrl: string;
};

const Cover: React.FC<Props> = (props) => {
  const [cover, setCover] = useState("");
  const [load, setLoad] = useState<boolean>(false);

  useEffect(() => {
    const store = new LibStore();
    (async () => {
      if (!props.coverUrl) {
        setCover(CoverEmpty);
      } else {
        const resp = await store.getBookCoverImg(props.coverUrl);
        if (resp.status === type.StatusHTTP.OK) {
          setCover(URL.createObjectURL(resp.data));
        } else {
          setCover(CoverEmpty);
        }
      }
      setLoad(true);
    })();
  }, [props.coverUrl]);

  return (
    <div>
      <div className="load">
        {!load ? (
          <i className="fa fa-spinner fa-spin fa-6x fa-fw" />
        ) : (
          <img
            src={cover}
            alt={CoverEmpty}
            style={{ height: "150px", width: "100px" }}
          />
        )}
      </div>
    </div>
  );
};

export default React.memo(Cover);
