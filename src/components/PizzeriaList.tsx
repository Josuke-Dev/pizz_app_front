import './PageContainer.css';
import { useAuth0 } from "@auth0/auth0-react";
import React from 'react';
import { IonList, IonItem, IonLabel, IonInput, IonToggle, IonRadio, IonCheckbox, IonItemSliding, IonItemOption, IonItemOptions, IonContent } from '@ionic/react';


const PizzeriaList: React.FC = () => {

  const { user, isAuthenticated, isLoading } = useAuth0();

  return (
    <div className='liste-pizzerias'>
    <IonList>
      {/* Appel BDD (Axios) pour récupérer la liste des pizzerias environnantes
      try {

        SELECT * FROM PointOfSale WHERE Long < (client->long +/-20) AND WHERE Lat < (client->lat +/-20)

        get localhost/api/user -> récupérer longitude/latitude
        get localhost/api/pointofsale ( params : longitude du client , latitude du client )

        ForEach (pizzeria as pizz) { 
          <IonItem>
            <img src={pizz.img}>
            <IonLabel>pizz.name</IonLabel>
          </IonItem>
         }

        }
        catch (error)
        */}
      <IonItem>
        <IonLabel>Pizzeria 1</IonLabel>
      </IonItem>
      <IonItem>
        <IonLabel>Pizzeria 2</IonLabel>
      </IonItem>
      <IonItem>
        <IonLabel>Pizzeria 3</IonLabel>
      </IonItem>
      <IonItem>
        <IonLabel>Pizzeria 4</IonLabel>
      </IonItem>
    </IonList>
    </div>
  );
};

export default PizzeriaList;
