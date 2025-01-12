import React from 'react';
// @ts-ignore
import styles from './index.module.css';

interface GridContainerProps {
  children: React.ReactNode;
}

const GridContainer = ({ children }: GridContainerProps) => {
  return <div className={styles.gridContainer}>{children}</div>;
};

export default GridContainer;
