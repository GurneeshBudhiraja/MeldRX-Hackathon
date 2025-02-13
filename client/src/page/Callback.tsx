import { UserManager } from 'oidc-client-ts';
import { useEffect } from 'react';
import { CLIENT_ID, FRONTEND_URL } from '../config/env';

const userManager = new UserManager({
  authority: 'https://app.meldrx.com',
  client_id: CLIENT_ID,
  redirect_uri: `${FRONTEND_URL}/callback`,
});

function Callback() {
  useEffect(() => {
    userManager.signinRedirectCallback().then((user) => {
      location.href = '/';
    });
  }, []);
  return <div>Callback</div>;
}

export default Callback;
