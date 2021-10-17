import axios from 'axios';
import { sign } from 'jsonwebtoken';

import { prismaClient } from '../prisma';

interface IAccessTokenResponse {
  access_token: string;
}

interface IUserResponse {
  avatar_url: string;
  login: string;
  id: number;
  name: string;
}

export class AuthenticateUserService {
  async execute(code: string) {
    const url = 'https://github.com/login/oauth/access_token';

    const accessTokenResponse = await axios.post<IAccessTokenResponse>(url, null, {
      params: {
        code,
        client_id: process.env.GITHUB_CLIENT_ID,
        client_secret: process.env.GITHUB_CLIENT_SECRET,
      },
      headers: {
        Accept: 'application/json',
      },
    });

    const userDataResponse = await axios.get<IUserResponse>(
      'https://api.github.com/user',
      {
        headers: {
          Authorization: `Bearer ${accessTokenResponse.data.access_token}`,
        },
      },
    );

    const githubUser = userDataResponse.data;

    let user = await prismaClient.user.findFirst({
      where: {
        github_id: githubUser.id,
      },
    });

    if (!user) {
      user = await prismaClient.user.create({
        data: {
          name: githubUser.name,
          login: githubUser.login,
          github_id: githubUser.id,
          avatar_url: githubUser.avatar_url,
        },
      });
    }

    const token = sign(
      {
        user: {
          id: user.id,
          name: user.name,
          avatar_url: user.avatar_url,
        },
      },
      process.env.JWT_SECRET,
      {
        subject: user.id,
        expiresIn: '1d',
      },
    );

    return { user, token };
  }
}
