import { header } from 'express-validator';
import { signature, appKey } from '../../config';

export const generalValidator = [
  header('signature')
    .notEmpty()
    .withMessage('Access Denied: cannot access route!')
    .custom((value: string) => {
      if (value !== signature) throw Promise.reject('Access Denied: cannot access route!');
    }),

  header('appKey')
    .notEmpty()
    .withMessage('Access Denied: cannot access route!')
    .custom((value: string) => {
      if (value !== appKey) throw Promise.reject('Access Denied: cannot access route!');
    }),
];
