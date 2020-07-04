import React, { FC } from 'react';
import { Link } from 'react-router-dom';
import classNames from 'classnames';
import styles from './MobileLayout.module.scss';

const MobileLayout: FC = (props) => {
  return (
    <div className={styles.root}>
      <div className={styles.header}>
        <div className={styles.headerLine} />
        <div className={styles.logoWrapper}>
          LOGO
        </div>
      </div>

      <div className={styles.content}>{props.children}</div>

      <div className={styles.footer}>
        <div className={styles.footerContent}>
          <div className={styles.footerRow}>
            <span className={styles.footerItem}>© Copyright {new Date().getFullYear()} MedZoomer</span>
          </div>
          <div className={styles.footerRow}>
            <Link to={'/policy'} className={classNames(styles.footerLink, styles.leftFooterLink)}>
              Privacy Policy
            </Link>
            <Link to={'/terms'} className={styles.footerLink}>
              Terms &amp; Conditions
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MobileLayout;