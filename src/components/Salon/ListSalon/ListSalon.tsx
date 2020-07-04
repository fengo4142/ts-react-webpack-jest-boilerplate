import React, { FC, useState, useEffect } from 'react';
import api from '../../../api';
import arrow from '../../../assets/arrow.svg';
import filter from '../../../assets/filter.svg';
import arrowDown from '../../../assets/path-2-copy-4.svg';
import arrowSmall from '../../../assets/arrow-small.svg';
import star from '../../../assets/star.svg';
import starEmpty from '../../../assets/star-empty.svg';
import Rating from '../../common/Rating';
import styles from './ListSalon.module.scss';

const stars = [1, 1, 1, 1, 1]

export const ListSalon: FC = () => {
  
  const [salons, setSalons] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    api.getSalons()
      .then((response: any) => {
        setSalons(response);
        setIsLoading(false);
      })
      .catch((err: any) => {
        console.log(err)
      })
  }, []);


  return (
    <div className={styles.root}>
      {isLoading && <p>Wait, I'm loading the salons for you</p>}
      <div className={styles.header}>
        <div className={styles.control}>
          <img className={styles.svg} src={arrow} />
        </div>
        <div className={styles.title}>
          <span>Hår</span>
        </div>
        <div className={styles.control}>
          <img className={styles.svg} src={filter} />
        </div>
      </div>
      <div className={styles.filter}>
        <div className={styles.criteria}>
          pris 250 - 500
        </div>
        <div className={styles.control}>
          <img src={arrowDown} />
        </div>
      </div>
      <div className={styles.content}>
        {salons.map((item: any) => {
          return( 
            <div key={item.id} className={styles.card}>
              <div className={styles.date}>{item.date}</div>
              <div className={styles.mainInfo}>
                <div className={styles.title}>{item.title}</div>
                <div className={styles.rate}>
                  <Rating rate={item.rate} />
                  <span>({item.score})</span>
                </div>
                <div className={styles.desc}>{item.address}</div>
              </div>
              <div className={styles.numbers}>
                <div className={styles.distance}>{item.distance} kr</div>
                <div className={styles.time}>{item.time} min</div>
              </div>
              <div className={styles.viewMore}>
                <img src={arrowSmall} />
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}
