/* eslint-disable no-unused-vars */
/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { FC, useCallback, useState, useEffect } from 'react';
import { useRouteMatch } from 'react-router';

import api from '../../../api';
import heart from '../../../assets/images/heart.svg';
import ArrowLeft from '../../../assets/images/arrow-left.svg';
import ArrowDownSmall from '../../../assets/images/arrow-down-small.svg';
import Globe from '../../../assets/images/globe.svg';
import Clock from '../../../assets/images/clock.svg';
import Phone from '../../../assets/images/phone.svg';
import Pin from '../../../assets/images/pin.svg';
import Header from '../../common/Header';
import Rating from '../../common/Rating';
import { ISalon } from '../../../interfaces';
import { detailTabs } from '../../../constants';

import styles from './DetailSalon.module.scss';

export const DetailSalon: FC = () => {
  const {
    params: { id },
  } = useRouteMatch();

  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState<ISalon | undefined | null>(null);
  const [activeTab, setActiveTab] = useState(detailTabs[0]);

  useEffect(() => {
    getSalonById().catch();
  }, []);

  const getSalonById = useCallback(async () => {
    setIsLoading(true);
    try {
      const salon: ISalon | undefined | null = await api.getSalon(id);
      setData(salon);
      setIsLoading(false);
    } catch (err) {
      // console.log(err);
      setIsLoading(false);
    }
  }, [id]);

  return (
    <div className={styles.root}>
      <div className={styles.hero}>
        <Header sideIcon={heart} backIcon={ArrowLeft} />
        <div className={styles.mainInfo}>
          <div className={styles.title}>{data && data.title}</div>
          <div className={styles.rate}>
            <Rating rate={data ? data.rate : 0} />
            <span>({data && data.price})</span>
          </div>
        </div>
      </div>
      <div className={styles.content}>
        <div className={styles.tab}>
          {detailTabs &&
            detailTabs.map((tab: any) => (
              <span
                key={tab.id}
                className={tab.id === activeTab.id ? styles.active : ''}
                onClick={() => setActiveTab(tab)}
              >
                {tab.label}
              </span>
            ))}
        </div>
        <div className={styles.panel}>
          <div className={styles.item}>
            <img className={styles.itemIcon} src={Pin} />
            <span>{data && data.address}</span>
          </div>
          <div className={styles.item}>
            <img className={styles.itemIcon} src={Clock} />
            <span>Öppet till 19:00 idag</span>
            <img className={styles.downArrow} src={ArrowDownSmall} />
          </div>
          <div className={styles.item}>
            <img className={styles.itemIcon} src={Phone} />
            <span>08-522 389 20</span>
          </div>
          <div className={styles.item}>
            <img className={styles.itemIcon} src={Globe} />
            <span>www.salongweb.se</span>
          </div>
          <div className={styles.description}>
            <p>
              Lorem ipsum dolor sit amet, vulputate nunc. Auctor viverra.
              Ridiculus feugiat nunc porttitor volut pat, acu quis torquent
              iaculis ultricies massa, duis nun quis que amet.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
