import * as React from "react";

import "./input.css";

type InputProps = {
  placeholder: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onKeyChange?: (e: React.KeyboardEvent<HTMLInputElement>) => void;
};

const Input: React.FC<InputProps> = (props) => {
  return (
    <input
      placeholder={props.placeholder}
      value={props.value}
      onChange={props.onChange}
      onKeyPress={props.onKeyChange}
      className="search"
    />
  );
};

export default React.memo(Input);
