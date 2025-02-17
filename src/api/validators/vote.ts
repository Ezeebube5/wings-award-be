import { body, param, header } from 'express-validator';
import { Vote } from '../database/models/vote.model';

export const createValidator = [
  header('signature').notEmpty().withMessage('Access Denied: cannot access route!'),
  header('appKey').notEmpty().withMessage('Access Denied: cannot access route!'),
  body('email')
    .isEmail()
    .withMessage('Email cannot be empty!')
    .custom(async (value: string) => {
      const emailExt = value.split('@');
      if (emailExt[1] !== 'stu.cu.edu.ng')
        return Promise.reject(`Please use a covenant university email to vote`);
      const vote = await Vote.findOne({ email: value });
      if (vote) return Promise.reject(`${value} has already voted before!`);
    })
    .normalizeEmail(),
  body('votes.*.category').notEmpty().withMessage('Votes category cannot be empty'),
  body('votes.*.nominee').notEmpty().withMessage('Votes nominee cannot be empty'),
];

export const updateVoteValidator = [
  header('signature').notEmpty().withMessage('Access Denied: cannot access route!'),
  header('appKey').notEmpty().withMessage('Access Denied: cannot access route!'),
  param('voteId').notEmpty().withMessage('Vote id parameter cannot be empty!'),
];
