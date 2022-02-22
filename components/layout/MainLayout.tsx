import React, { ReactChild, ReactChildren } from 'react';
import styles from '../../styles/layout/MainLayout.module.scss';
import Nav from '../Nav/Nav';

interface Props {
  children: ReactChild | ReactChildren
}

const MainLayout: React.FC<Props> = ({ children }) => {
  return (
    <div className={styles['app-container']}>
      <Nav/>
      <div className={styles['body-container']}>

        { children }
      </div>
    </div>
  );
};

export default MainLayout;
