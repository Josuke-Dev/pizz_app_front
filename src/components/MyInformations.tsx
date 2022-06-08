import './PageContainer.css';
import { useAuth0 } from "@auth0/auth0-react";
import React from 'react';
import { IonList, IonButton , IonIcon , IonItem, IonLabel, IonInput, IonToggle, IonRadio, IonCheckbox, IonItemSliding, IonItemOption, IonItemOptions, IonContent } from '@ionic/react';
import { createOutline } from 'ionicons/icons';

const MyInformations: React.FC = () => {

  const { user, isAuthenticated, isLoading } = useAuth0();

  return (
    <div className='mes-informations'>

        <h2>Mon Adresse</h2>
        <div className="bloc-adresse">
            <div>
                <p>3, Rue du Grand Saule</p>
                <p>75000</p>
                <p>Paris</p>
            </div>
            <IonButton>
                <IonIcon slot="icon-only" icon={createOutline} />
                Modifier
            </IonButton>
        </div>

        <h2>Mes Informations</h2>
        <div className="bloc-infos">
            <div>
                <div>
                    <p>Jean-Marc</p>
                    <p>Généreux</p>
                </div>
                <p>jmgénéreux@truc.fr</p>
                <p>06.06.06.06.06</p>
            </div>
            <IonButton>
                <IonIcon slot="icon-only" icon={createOutline} />
                Modifier
            </IonButton>
        </div>

    </div>
  );
};

export default MyInformations;
