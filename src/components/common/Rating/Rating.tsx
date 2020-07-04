import React, { FC, useState, useEffect } from 'react';
import fillStar from '../../../assets/star_fill/star.png';
import fillStar2x from '../../../assets/star_fill/star@2x.png';
import fillStar3x from '../../../assets/star_fill/star@3x.png';
import fillStarSmall from '../../../assets/star_fill_small/star.png';
import fillStarSmall2x from '../../../assets/star_fill_small/star@2x.png';
import fillStarSmall3x from '../../../assets/star_fill_small/star@3x.png';
import emptyStar from '../../../assets/star_empty/star.png';
import emptyStar2x from '../../../assets/star_empty/star@2x.png';
import emptyStar3x from '../../../assets/star_empty/star@3x.png';
import emptyStarSmall from '../../../assets/star_empty_small/star.png';
import emptyStarSmall2x from '../../../assets/star_empty_small/star@2x.png';
import emptyStarSmall3x from '../../../assets/star_empty_small/star@3x.png';

import styles from './Rate.module.scss';

const stars = [1, 1, 1, 1, 1]

interface IRate {
  rate: number;
  isSmall?: boolean;
} 

export const Rating: FC<IRate> = (props) => {
  const { rate, isSmall } = props

  return (
    <>
      {stars.fill(0, rate).map((item: number, index: number) => (
        item !== 0 ? (
          !isSmall ? 
            <img 
              key={index}               
              className={styles.star} 
              src={fillStar} 
              srcSet={`
                ${fillStar2x} 2x,
                ${fillStar3x} 3x 
              `} /> :
            <img 
              key={index} 
              className={styles.star} 
              src={fillStarSmall} 
              srcSet={`
                ${fillStarSmall2x} 2x, 
                ${fillStarSmall3x} 3x 
              `} />
        ) : (
          !isSmall ? 
            <img 
              key={index} 
              className={styles.star} 
              src={emptyStar} 
              srcSet={`
                ${emptyStar2x} 2x, 
                ${emptyStar3x} 3x 
              `} /> : 
            <img 
              key={index} 
              className={styles.star}
              src={emptyStarSmall}
              srcSet={`
                ${emptyStarSmall2x} 2x, 
                ${emptyStarSmall3x} 3x 
              `} /> 
        )
      ))}
    </>
  )
}
