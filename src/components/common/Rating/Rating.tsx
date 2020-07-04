import React, { FC, useState, useEffect } from 'react';
import star from '../../../assets/star.svg';
import starEmpty from '../../../assets/star-empty.svg';

import styles from './Rate.module.scss';

const stars = [1, 1, 1, 1, 1]

interface IRate {
  rate: number;
} 

export const Rating: FC<IRate> = (props) => {
  const { rate } = props

  return (
    <>
      {stars.fill(0, rate).map((item: number, index: number) => (
        item !== 0 ? 
          <img key={index} className={styles.star} src={star} /> : 
          <img key={index} className={styles.star} src={starEmpty} />
      ))}
    </>
  )
}
