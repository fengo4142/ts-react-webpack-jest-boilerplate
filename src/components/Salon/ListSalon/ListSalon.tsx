import React, { FC, useCallback, useState, useEffect } from 'react';
import { useHistory, useRouteMatch } from 'react-router';

import api from '../../../api';
import filter from '../../../assets/filter.svg';
import ArrowLeftSmall from '../../../assets/arrow-left-small.svg';
import ArrowDownSmall from '../../../assets/arrow-down-small.svg';
import ArrowRightExtraSmall from '../../../assets/arrow-right-extra-small.svg';
import Rating from '../../common/Rating';
import Header from '../../common/Header';
import { ISalon } from '../../../interfaces';

import styles from './ListSalon.module.scss';


export const ListSalon: FC = () => {

  const { path } = useRouteMatch();
  const history = useHistory();

  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [data, setData] = useState<ISalon[] | null | undefined>(null)

  // may need pagination or filter, but right now just demo data
  useEffect(() => {
    getSalonList().catch()
  }, [])

  const getSalonList = useCallback(async () => {
    setIsLoading(true);
    try {
      const salons = await api.getSalons();
      setData(salons);
      setIsLoading(false);
    } catch (err) {
      console.log(err);
      setIsLoading(false);
    }
  }, [])

  const viewDetailHandler = (id: any) => {
    history.push(`${path}/${id}`)
  }

  return (
    <div className={styles.root}>

      <Header title="Hår" sideIcon={filter} backIcon={ArrowLeftSmall} />
      <div className={styles.filter}>
        <div className={styles.criteria}>
          pris 250 - 500
        </div>
        <div className={styles.control}>
          <img src={ArrowDownSmall} />
        </div>
      </div>
      <div className={styles.content}>
        {data && data.map((item: any) => {
          return( 
            <div key={item.id} className={styles.card}>
              <div className={styles.date}>{item.date}</div>
              <div className={styles.mainInfo}>
                <div className={styles.title}>{item.title}</div>
                <div className={styles.rate}>
                  <Rating rate={item.rate} isSmall={true} />
                  <span>({item.score})</span>
                </div>
                <div className={styles.desc}>{item.address}</div>
              </div>
              <div className={styles.numbers}>
                <div className={styles.distance}>{item.distance} kr</div>
                <div className={styles.time}>{item.time} min</div>
              </div>
              <div className={styles.viewMore} onClick={e => viewDetailHandler(item.id)}>
                <img src={ArrowRightExtraSmall} />
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}
