import React, { FC } from 'react';
import classNames from 'classnames';
import { useHistory } from 'react-router';

import styles from './Header.module.scss';

interface IHeaderProps {
  backIcon: string;
  title?: string;
}

export const Header: FC<IHeaderProps> = (props: IHeaderProps) => {
  const { title, backIcon } = props;
  const history = useHistory();

  return (
    <div
      className={
        title ? styles.header : classNames(styles.header, styles.small)
      }
    >
      <div className={styles.control} onClick={() => history.go(-1)}>
        <img
          className={title ? styles.svg : classNames(styles.svg, styles.packed)}
          src={backIcon}
        />
      </div>
      <div className={styles.title}>
        <span>{title}</span>
      </div>
    </div>
  );
};
