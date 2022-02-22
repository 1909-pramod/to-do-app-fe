import React from 'react';
import { useAppSelector } from '../../redux/hooks';
import styles from '../../styles/nav/Nav.module.scss';

const Nav:React.FC = () => {

  const initials = useAppSelector((state) => state.user.initials)

  return (
    <div className={styles['nav-container']}>
      <div>
      </div>
      <div className={styles.profile}>
        { initials.toUpperCase() }
      </div>
    </div>
  );
};

export default Nav;
