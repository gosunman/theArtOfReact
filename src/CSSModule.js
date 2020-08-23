import React from "react";
import styles from "./CSSModule.module.css";
// import classNames from "classnames";

// const cx = classNames.bind(styles)

export default function CSSModule() {
  // export default function CSSModule({highligted, theme) {
  return (
    <div className={`${styles.wrapper} ${styles.inverted}`}>
      {/* <div className={cx("wrapper", "inverted")}></div> */}
      {/* <div className={classNames("MyComponent", { highlighted }, theme)}> */}
      {/* <div className={`MyComponent ${theme} ${highlighted ? 'highlighted' : ''}`}> */}
      {/* <div className={[styles.wrapper, styles.inverted].join(' ')}> */}
      Hi <span className="something">CSS Module</span>
    </div>
  );
}
