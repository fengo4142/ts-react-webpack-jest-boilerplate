import React, { FC } from 'react';
import classNames from 'classnames';

import { history } from '../../../utils';

import styles from './Header.module.scss';

interface IHeaderProps {
  backIcon: string;
  sideIcon: string;
  title?: string;
}

export const Header: FC<IHeaderProps> = (props) => {
  const { title, sideIcon, backIcon } = props;

  return (
    <div className={title ? styles.header : classNames(styles.header, styles.small)}>
      <div className={styles.control} onClick={e => history.go(-1)}>
        <img className={title ? styles.svg : classNames(styles.svg, styles.packed)} src={backIcon} />
      </div>
      <div className={styles.title}>
        <span>{title}</span>
      </div>
      <div className={styles.control}>
        <img className={title ? styles.svg : classNames(styles.svg, styles.packed)} src={sideIcon} />
      </div>
    </div>
  )
}