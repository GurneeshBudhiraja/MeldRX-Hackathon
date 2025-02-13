import { UserManager } from 'oidc-client-ts';
import { CLIENT_ID, FRONTEND_URL } from '../config/env';
import { useEffect, useState } from 'react';

function Login() {
  useEffect(() => {
    const userManager = new UserManager({
      authority: 'https://app.meldrx.com',
      client_id: CLIENT_ID,
      redirect_uri: `${FRONTEND_URL}/callback`,
    });

    const extraQueryParams = {};
    const queryParams = location.search
      .split('?')[1]
      .split('&')
      .map((e) => e.split('='));

    for (const entry of queryParams) {
      // @ts-ignore
      extraQueryParams[entry[0] === 'iss' ? 'aud' : entry[0]] = entry[1];
    }

    userManager.signinRedirect({
      scope: 'openid profile launch patient/*.*',
      extraQueryParams,
    });
  }, []);

  return <div>Login</div>;
}

export default Login;
