import './PageContainer.css';
import React from 'react';
import { IonList, IonItem, IonIcon, IonLabel, IonInput, IonToggle, IonRadio, IonCheckbox, IonItemSliding, IonItemOption, IonItemOptions, IonContent } from '@ionic/react';
import { personOutline , layersOutline , ticketOutline , receiptOutline } from 'ionicons/icons';

const MyAccountHome: React.FC = () => {

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
