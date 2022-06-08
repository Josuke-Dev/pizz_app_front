import './PageContainer.css';
import { useAuth0 } from "@auth0/auth0-react";
import React from 'react';
import { IonList, IonButton , IonIcon , IonItem, IonLabel, IonInput, IonToggle, IonRadio, IonCheckbox, IonItemSliding, IonItemOption, IonItemOptions, IonContent } from '@ionic/react';
import { createOutline } from 'ionicons/icons';

const MyOrdersList: React.FC = () => {

  const { user, isAuthenticated, isLoading } = useAuth0();

  return (
    <div className='mes-commandes'>

        <h2>Mes Commandes</h2>

        <h3>Commandes en cours</h3>
        <div className="bloc-commande-en-cours">
            <div>
                <img src="https://assets.afcdn.com/recipe/20210521/120446_w1024h768c1cx1060cy707.jpg" alt=""></img>
                <p>Pizzeria n°1</p>
                <p>Commande du 23/12/2021</p>
            </div>
            <p className="statut-commande">En cours de livraison</p>
        </div>

        <h3>Mes Anciennes Commandes</h3>
        <div className="bloc-anciennes-commandes">
            <div>
                <img src="https://assets.afcdn.com/recipe/20210521/120446_w1024h768c1cx1060cy707.jpg" alt=""></img>
                <p>Pizzeria n°1</p>
                <p>Commande du 23/12/2021</p>
            </div>
            <p className="statut-commande">Commande livrée</p>
        </div>
    </div>
  );
};

export default MyOrdersList;
