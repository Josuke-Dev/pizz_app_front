import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import PageContainer from '../components/PageContainer';
import Profile from '../components/Profile';
import { useAuth0 } from "@auth0/auth0-react";
import LogoutButton from '../components/LogoutButton';

const MyAccount: React.FC = () => {

  const { user, isAuthenticated, isLoading } = useAuth0();

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Pizz'App</IonTitle>
          { isAuthenticated && (
            <div className='profile-box'>
              <Profile></Profile>
              <LogoutButton></LogoutButton>
            </div>
          )}
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle>Pizz'App</IonTitle>
            { isAuthenticated && (
              <div className='profile-box'>
                <Profile></Profile>
                <LogoutButton></LogoutButton>
              </div>
            )}
          </IonToolbar>
        </IonHeader>
        <PageContainer name="Mon Compte" />
      </IonContent>
    </IonPage>
  );
};

export default MyAccount;
