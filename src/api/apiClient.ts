import { AxiosRequestConfig } from 'axios';
import { EventEmitter } from 'events';
import ApiError from './apiError';
import { HttpInterface } from './httpAdapter';
import { fromEvent, Observable } from 'rxjs';
import { salons } from '../constants';

type ApiClientEvents = 'unauthorized' | string;

export default class ApiClient {
  private _eventEmitter = new EventEmitter();

  constructor(protected http: HttpInterface) {
    http.initErrorResponseInterceptor(async (error: any) => {
      const originalRequest: AxiosRequestConfig & { _retry?: boolean } =
        error.config;
      if (error) {
        throw new ApiError(error, originalRequest.url!);
      }
      /**
       * TO DO: can customized http request with authentication etc
       *
       */
    });
  }
  public on(event: ApiClientEvents): Observable<any> {
    return fromEvent<any>(this._eventEmitter, event);
  }

  public getHealthCheck(): any {
    return this.http.get('/');
  }

  // it can be public api endpoint
  public getSalons(data: any): any {
    const { priceFilter } = data;
    return priceFilter.length
      ? salons.reduce((acc: any, item: any) => {
          for (const filter of priceFilter) {
            if (item.price > filter.start && item.price < filter.end) {
              acc.push(item);
              return acc;
            }
          }
        }, [])
      : salons;
    // return this.http.get()
  }

  public getSalon(id: any): any {
    return salons.filter((item) => item.id === id).shift();
  }
}
