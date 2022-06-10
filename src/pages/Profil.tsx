import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import PageContainer from '../components/PageContainer';
import PizzHeader from '../components/PizzHeader';
import PizzHeaderMaxScreen from '../components/PizzHeaderMaxScreen';

const Profil: React.FC = () => {

  return (
    <IonPage>
      <PizzHeader></PizzHeader>
      <IonContent fullscreen>
        <PizzHeaderMaxScreen></PizzHeaderMaxScreen>
        <div>
            Coucou ici c'est le profil !
        </div>
      </IonContent>
    </IonPage>
  );
};

export default Profil;
