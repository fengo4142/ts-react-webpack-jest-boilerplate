import { ErrorInterface } from '../interfaces';

export const decodeErrors: any = (errors: ErrorInterface[]) => {
  return Array.from(errors || []).reduce((res: object, e: ErrorInterface) => {
    return {
      ...res,
      [e.field.length > 1 ? e.field[1] : e.field[0]]: e.messages[0],
    };
  }, {});
};
