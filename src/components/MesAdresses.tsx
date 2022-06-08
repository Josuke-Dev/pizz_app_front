import './PageContainer.css';
import { useAuth0 } from "@auth0/auth0-react";
import React from 'react';
import { IonList, IonItem, IonLabel, IonInput, IonToggle, IonRadio, IonCheckbox, IonItemSliding, IonItemOption, IonItemOptions, IonContent } from '@ionic/react';


const MesAdresses: React.FC = () => {

  const { user, isAuthenticated, isLoading } = useAuth0();

  return (
    <div className='liste-adresses'>
        <IonList>
        <IonItem>
            <IonLabel>Adresse 1</IonLabel>
        </IonItem>
        <IonItem>
            <IonLabel>Adresse 2</IonLabel>
        </IonItem>
        <IonItem>
            <IonLabel>Adresse 3</IonLabel>
        </IonItem>
        <IonItem>
            <IonLabel>Adresse 4</IonLabel>
        </IonItem>
        </IonList>
    </div>
  );
};

export default MesAdresses;
