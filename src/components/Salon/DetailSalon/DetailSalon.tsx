import React, { FC, useCallback, useState, useEffect } from 'react';
import { useRouteMatch } from 'react-router';

import api from '../../../api';
import heart from '../../../assets/heart.svg';
import ArrowLeft from '../../../assets/arrow-left.svg';
import Globe from '../../../assets/globe.svg';
import Clock from '../../../assets/clock.svg';
import Phone from '../../../assets/phone.svg';
import Pin from '../../../assets/pin.svg';
import Header from '../../common/Header';
import Rating from '../../common/Rating';
import { ISalon } from '../../../interfaces';

import styles from './DetailSalon.module.scss';


export const DetailSalon: FC = () => {
  
  const {
    params: { id }
  } = useRouteMatch();

  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState<ISalon | undefined | null>(null)

  useEffect(() => {
    getSalonById().catch()
  }, [])

  const getSalonById = useCallback(async () => {
    setIsLoading(true);
    try {
      const salon: ISalon | undefined | null = await api.getSalon(id)
      setData(salon)
      setIsLoading(false)
    } catch (err) {
      console.log(err)
      setIsLoading(false)
    }
  }, [id])

  return (
    <div className={styles.root}>
      <div className={styles.hero}>
        <Header sideIcon={heart} backIcon={ArrowLeft} />
        <div className={styles.mainInfo}>
          <div className={styles.title}>Salong Namn</div>
          <div className={styles.rate}>
            <Rating rate={4} />
            <span>(32)</span>
          </div>
        </div>
      </div>
      <div className={styles.content}>
        <div className={styles.tab}>
          <span className={styles.active}>Info</span>
          <span>Schema</span>
        </div>
        <div className={styles.panel}>
          <div className={styles.item}>
            <img className={styles.itemIcon} src={Pin} />
            <span>Rådmansgatan 46, 113 57 Stockholm</span>
          </div>
          <div className={styles.item}>
            <img className={styles.itemIcon} src={Clock} />
            <span>Öppet till 19:00 idag</span>
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
            <p>Lorem ipsum dolor sit amet, vulputate nunc. Auctor viverra. Ridiculus feugiat nunc porttitor volut pat, acu quis torquent iaculis ultricies massa, duis nun quis que amet.</p>
          </div>
        </div>
      </div>
    </div>
  )
};
