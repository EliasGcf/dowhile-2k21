import { Request, Response } from 'express';

export class GitHubOAuthController {
  public async handle(request: Request, response: Response) {
    const { from } = request.query;

    const redirectUrl = new URL('https://github.com/login/oauth/authorize');
    redirectUrl.searchParams.set('client_id', process.env.GITHUB_CLIENT_ID);
    redirectUrl.searchParams.set('state', String(from));

    return response.redirect(redirectUrl.toString());
  }

  public async handleCallback(request: Request, response: Response) {
    const { code, state } = request.query;
    const from = state as 'web' | 'mobile';

    const redirectTo = {
      web: `${process.env.GITHUB_OAUTH_WEB_REDIRECT_URL}/?code=${code}`,
      mobile: `${process.env.GITHUB_OAUTH_MOBILE_REDIRECT_URL}/?code=${code}`,
    };

    return response.redirect(redirectTo[from]);
  }
}
