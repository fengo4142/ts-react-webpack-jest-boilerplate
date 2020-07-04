import { AxiosError, AxiosRequestConfig, AxiosResponse } from 'axios';

export const API_ERROR_CODES = {
  NOT_FOUND: 404,
  UNAUTHORIZED: 401
};

export default class ApiError<T = any> extends Error {
  public name: string = 'ApiError';

  public constructor(protected originalError: AxiosError<T>, path: string) {
    super(`${originalError.message} (${path})`);
  }

  protected isResponseStatus(status: number): boolean {
    return Boolean(this.originalError && this.originalError.response && this.originalError.response.status === status);
  }

  get isApiError() {
    return true;
  }

  public get code(): string | undefined {
    return this.originalError && this.originalError.code;
  }

  public get response(): AxiosResponse<T> | undefined {
    return this.originalError && this.originalError.response;
  }

  public get axiosConfig(): AxiosRequestConfig {
    return this.originalError && this.originalError.config;
  }

  public get isNotFound(): boolean {
    return this.isResponseStatus(API_ERROR_CODES.NOT_FOUND);
  }

  public get isUnauthorized(): boolean {
    return this.isResponseStatus(API_ERROR_CODES.UNAUTHORIZED);
  }
}
