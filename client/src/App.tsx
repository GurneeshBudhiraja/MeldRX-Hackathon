import { useEffect } from 'react';
import { Header } from './components/components';
import { MainContent } from './page/page';
import { UserManager } from 'oidc-client-ts';
import { CLIENT_ID, FRONTEND_URL } from './config/env';
import axios from 'axios';
import { useAppStateContext } from './context/AppStateContext';

const userManager = new UserManager({
  authority: 'https://app.meldrx.com',
  client_id: CLIENT_ID,
  redirect_uri: `${FRONTEND_URL}/callback`,
});

async function getCurrentPatient() {
  const user = await userManager.getUser();
  const { access_token: accessToken } = user as { access_token: string };
  const { data: patientData } = await axios.get(
    'https://app.meldrx.com/api/fhir/5a0beb41-c2f0-498f-9523-d9da4e62ecff/Condition',
    {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    }
  );
  console.log(patientData);
}

function App() {
  const { appState } = useAppStateContext();
  useEffect(() => {
    getCurrentPatient();
  }, []);
  return (
    <div className="bg-main-background h-dvh w-full text-zinc-950 ">
      {/* Header */}
      <button
        onClick={() => {
          const { socketConnection } = appState;
          if (!socketConnection) {
            console.log(socketConnection);
            return;
          }
          console.log('Sending the signal to the backend');
          socketConnection.emit('sendMessage', 'This is good');
          socketConnection.on('message', (message) => console.log(message));
        }}
      >
        Get message from WS
      </button>
      <Header />
      <MainContent />
    </div>
  );
}

export default App;
