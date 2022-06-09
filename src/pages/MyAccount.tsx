import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import PageContainer from '../components/PageContainer';
import PizzHeader from '../components/PizzHeader';
import PizzHeaderMaxScreen from '../components/PizzHeaderMaxScreen';

const MyAccount: React.FC = () => {

  return (
    <IonPage>
      <PizzHeader></PizzHeader>
      <IonContent fullscreen>
        <PizzHeaderMaxScreen></PizzHeaderMaxScreen>
        <PageContainer name="Mon Compte" />
      </IonContent>
    </IonPage>
  );
};

export default MyAccount;
