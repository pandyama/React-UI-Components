import React from "react";
import * as styles from "./index.module.scss";

type PropTypes = {
  variant: "Primary" | "Outline";
  children: React.ReactNode;
  danger?: string;
};

const Button = ({ variant = "Primary", children, danger = "" }: PropTypes) => {
  return (
    <>
      <button className={`${styles[variant]} ${styles[danger]}`}>
        {children}
      </button>
    </>
  );
};

export default Button;
