import { body, param, header } from 'express-validator';

export const createValidator = [
  header('signature').notEmpty().withMessage('Access Denied: cannot access route!'),
  header('appKey').notEmpty().withMessage('Access Denied: cannot access route!'),
  body('name').notEmpty().withMessage('Category name cannot be empty!'),
  body('description').notEmpty().withMessage('Category description cannot be empty!'),
];

export const AddNomineesValidator = [
  header('signature').notEmpty().withMessage('Access Denied: cannot access route!'),
  header('appKey').notEmpty().withMessage('Access Denied: cannot access route!'),
  param('categoryId').notEmpty().withMessage('Category id parameter cannot be empty!'),
  body('*.name').notEmpty().withMessage('Nominee name cannot be empty!'),
  body('*.image').notEmpty().withMessage('Nominee image cannot be empty!'),
];
