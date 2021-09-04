import * as React from "react";

import "./input.css";

type InputProps = {
  placeholder: string;
};

const Input: React.FC<InputProps> = (props) => {
  const [query, setQuery] = React.useState<string>("");

  const handleQuery = React.useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const val = e.target.value;
      setQuery(val);
    },
    []
  );

  return (
    <input
      placeholder={props.placeholder}
      value={query}
      onChange={handleQuery}
      className="search"
    />
  );
};

export default Input;
