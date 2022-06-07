import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import Profile from '../components/Profile';

const DeliveryAddress: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Pizz'App</IonTitle>
          <Profile></Profile>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle>Pizz'App</IonTitle>
            <Profile></Profile>
          </IonToolbar>
        </IonHeader>
        <ExploreContainer name="Choisir mon adresse de livraison" />
      </IonContent>
    </IonPage>
  );
};

export default DeliveryAddress;
