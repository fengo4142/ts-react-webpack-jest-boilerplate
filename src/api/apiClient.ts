import { AxiosRequestConfig } from 'axios';
import { EventEmitter } from 'events';
import ApiError from './apiError';
import { HttpInterface } from './httpAdapter';
import { fromEvent, Observable } from 'rxjs';
import data from './data.json'

type ApiClientEvents = 'unauthorized' | string;

export default class ApiClient {
  private _eventEmitter = new EventEmitter();

  constructor(protected http: HttpInterface) {
    http.initErrorResponseInterceptor(async (error: any) => {
      const originalRequest: AxiosRequestConfig & { _retry?: boolean } = error.config;
      if (error) {
        throw new ApiError(error, originalRequest.url!)
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

  public getHealthCheck() {
    return this.http.get('/');
  }

  // it can be public api endpoint
  public getSalons() {
    // return this.http.get()
    return new Promise((resolve, reject) => {
      return resolve(data)
    })
  }

}
