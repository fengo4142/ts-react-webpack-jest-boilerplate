import React, { FC } from 'react';

import Header from '../common/Header';
import backIcon from '../../assets/images/arrow-left.svg';

import styles from './Dashboard.module.scss';

export const Dashboard: FC = () => {
  return (
    <div className={styles.root}>
      <Header title="Awesome Starter Kit" backIcon={backIcon} />
      <p>My Dashboard</p>
    </div>
  );
};
