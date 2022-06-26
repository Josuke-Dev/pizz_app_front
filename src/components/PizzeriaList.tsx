import './PageContainer.css';
import React from 'react';
import { IonList, IonItem, IonLabel, IonInput, IonToggle, IonRadio, IonCheckbox, IonItemSliding, IonItemOption, IonItemOptions, IonContent } from '@ionic/react';
import LoginButton from './LoginButton';
import UserService from '../services/user.service';

const PizzeriaList: React.FC = () => {

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
      <div style={{display:"flex", justifyContent: "center", margin: "20px"}}>
        <button className="login-btn" onClick={() => UserService.getOrders() }>Get orders</button>
        <button className="login-btn" onClick={() => UserService.getPokemon() }>Get pokemon</button>
      </div>
      <LoginButton></LoginButton>
    </IonList>
    </div>
  );
};

export default PizzeriaList;
