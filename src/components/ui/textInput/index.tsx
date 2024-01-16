import React from "react";
import * as styles from "./index.module.scss";

type PropTypes = {
  placeholder: string;
  label: string;
};

const TextInput = ({ label, placeholder }: PropTypes) => {
  return (
    <>
      <div className={styles.InputGroup}>
        <label className={styles.Label}>{label}</label>
        <input className={styles.Input} placeholder={placeholder}></input>
      </div>
    </>
  );
};

export default TextInput;
