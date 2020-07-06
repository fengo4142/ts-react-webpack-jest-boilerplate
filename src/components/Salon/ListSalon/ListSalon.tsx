import React, { FC, useCallback, useState, useEffect } from 'react';
import { useHistory, useRouteMatch } from 'react-router';

import api from '../../../api';
import filter from '../../../assets/images/filter.svg';
import ArrowLeftSmall from '../../../assets/images/arrow-left-small.svg';
import ArrowRightExtraSmall from '../../../assets/images/arrow-right-extra-small.svg';
import Rating from '../../common/Rating';
import Header from '../../common/Header';
import PriceSelect from '../../common/PriceSelect';
import { ISalon } from '../../../interfaces';

import styles from './ListSalon.module.scss';
import { priceOptions } from '../../../constants';
import { IPriceOption } from '../../common/PriceSelect/PriceSelect';

export const ListSalon: FC = () => {
  const { path } = useRouteMatch();
  const history = useHistory();

  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [data, setData] = useState<ISalon[] | null | undefined>(null);
  const [priceFilter, setPriceFilter] = useState<IPriceOption[]>([
    priceOptions[1],
  ]);
  // may need pagination or filter, but right now just demo data
  useEffect(() => {
    getSalonList().catch();
  }, [priceFilter]);

  const getSalonList = useCallback(async () => {
    setIsLoading(true);
    try {
      const salons = await api.getSalons({ priceFilter });
      setData(salons);
      setIsLoading(false);
    } catch (err) {
      // console.log(err);
      setIsLoading(false);
    }
  }, [priceFilter]);

  const onViewDetailHandler = (id: any) => {
    history.push(`${path}/${id}`);
  };

  return (
    <div className={styles.root}>
      <Header title="Hår" sideIcon={filter} backIcon={ArrowLeftSmall} />
      <div className={styles.panel}>
        <PriceSelect
          multi={true}
          clearable={false}
          searchable={true}
          isLoading={isLoading}
          options={priceOptions}
          filterValues={priceFilter}
          labelField={'label'}
          valueField={'id'}
          onChange={(values) => setPriceFilter(values)}
        />
      </div>
      <div className={styles.content}>
        {data &&
          data.map((item: any) => {
            return (
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
                  <div className={styles.price}>{item.price} kr</div>
                  <div className={styles.time}>{item.time} min</div>
                </div>
                <div
                  className={styles.viewMore}
                  onClick={() => onViewDetailHandler(item.id)}
                >
                  <img src={ArrowRightExtraSmall} />
                </div>
              </div>
            );
          })}
      </div>
    </div>
  );
};
