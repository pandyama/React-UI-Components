import React from "react";
import * as styles from "./index.module.scss";

type PropTypes = {
  placeholder?: string;
  label: string;
  size: string;
  children?: React.ReactNode;
};

const TextAreaInput = ({
  label,
  placeholder,
  size = "M",
  children,
}: PropTypes) => {
  return (
    <>
      <div className={styles.InputGroup}>
        <label className={styles.Label}>{label}</label>
        <textarea className={`${styles.TextAreaInput} ${styles[size]}`}>
          {children}
        </textarea>
      </div>
    </>
  );
};

export default TextAreaInput;
