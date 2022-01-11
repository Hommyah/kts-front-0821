import * as React from "react";

import * as type from "@shared/ApiStore/types";
import LibStore, { AuthorFull, AuthorType } from "@store/LibStore";
import "@styles/bookInfo.scss";

const AuthorInfo = (author: AuthorType) => {
  const [authorData, setAuthorData] = React.useState<AuthorFull>({
    // created: { value: "" },
    // description: "",
    links: [],
    seed: [],
    name: "",
  });

  React.useEffect(() => {
    const store = new LibStore();
    (async () => {
      const resp = await store.getAuthorByKey(window.location.pathname);
      if (resp.status === type.StatusHTTP.OK) {
        setAuthorData(resp.data);
      }
    })();
  }, [author.key]);

  return (
    <div>
      <div>{authorData.name}</div>
      {/*<Cover coverUrl={bookData.covers ? bookData.covers[0] : ""} />*/}
      {/*<div>{authorData.description}</div>*/}
      {authorData.links?.map((l) => (
        <a key={l.aurl} href={l.aurl}>
          {l.name}
        </a>
      ))}
    </div>
  );
};

export default AuthorInfo;
