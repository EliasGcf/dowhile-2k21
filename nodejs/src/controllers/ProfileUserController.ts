import { Request, Response } from 'express';

import { ProfileUserService } from '../services/ProfileUserService';

export class ProfileUserController {
  async handle(request: Request, response: Response) {
    const { user_id } = request;

    const service = new ProfileUserService();

    const user = await service.execute(user_id);

    return response.json(user);
  }
}
