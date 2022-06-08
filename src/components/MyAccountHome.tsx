import './PageContainer.css';
import { useAuth0 } from "@auth0/auth0-react";
import React from 'react';
import { IonList, IonItem, IonIcon, IonLabel, IonInput, IonToggle, IonRadio, IonCheckbox, IonItemSliding, IonItemOption, IonItemOptions, IonContent } from '@ionic/react';
import { personOutline , layersOutline , ticketOutline , receiptOutline } from 'ionicons/icons';

const MyAccountHome: React.FC = () => {

  const { user, isAuthenticated, isLoading } = useAuth0();

  return (
    <div className='liste-adresses'>
        <IonList>
        <IonItem href="/myinfos">
            <IonIcon icon={personOutline} />
            <IonLabel>Mes informations</IonLabel>
        </IonItem>
        <IonItem href="/myorders">
            <IonIcon icon={layersOutline} />
            <IonLabel>Mes commandes</IonLabel>
        </IonItem>
        <IonItem>
            <IonIcon icon={ticketOutline} />
            <IonLabel>Mes réductions</IonLabel>
        </IonItem>
        <IonItem>
            <IonIcon icon={receiptOutline} />
            <IonLabel>Politique de données</IonLabel>
        </IonItem>
        </IonList>
    </div>
  );
};

export default MyAccountHome;
