import * as React from "react";

const NonePrinter = (Component: JSX.Element, condition: Boolean) => {
  return (props: JSX.IntrinsicAttributes) =>
    // @ts-ignore
    condition ? <Component {...props} /> : null;
};

export default NonePrinter;
