import { ComponentType } from 'react';

export interface DestructByKey<T> {
  [key: string]: T;
}
