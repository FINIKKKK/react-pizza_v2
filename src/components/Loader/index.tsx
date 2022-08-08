import React from "react";

import styles from "./Loader.module.scss";

export const Loader: React.FC = () => {

  return (
    <div className={styles.loader}>
      <p>Загрузка...</p>
      <span className={styles.circle}></span>
      <span className={styles.circle}></span>
    </div>
  );
};
