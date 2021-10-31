import { celebrate, Joi, Segments } from 'celebrate';
import { Router } from 'express';

import { AuthenticateUserController } from './controllers/AuthenticateUserController';
import { CreateMessageController } from './controllers/CreateMessageController';
import { GetLast3MessagesController } from './controllers/GetLast3MessagesController';
import { GitHubOAuthController } from './controllers/GitHubOAuthController';
import { ProfileUserController } from './controllers/ProfileUserController';

import { ensureAuthenticated } from './middlewares/ensureAuthenticated';

export const router = Router();

const gitHubOAuthController = new GitHubOAuthController();

router.get(
  '/oauth/github',
  celebrate({
    [Segments.QUERY]: {
      from: Joi.string().valid('web', 'mobile').required(),
    },
  }),
  gitHubOAuthController.handle,
);

router.get(
  '/signin/callback',
  celebrate({
    [Segments.QUERY]: {
      code: Joi.string().required(),
      state: Joi.string().valid('web', 'mobile').required(),
    },
  }),
  gitHubOAuthController.handleCallback,
);

router.post('/authenticate', new AuthenticateUserController().handle);

router.post('/messages', ensureAuthenticated, new CreateMessageController().handle);

router.get('/messages/last3', new GetLast3MessagesController().handle);

router.get('/profile', ensureAuthenticated, new ProfileUserController().handle);
