import './PageContainer.css';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import Profile from './Profile';
import LogoutButton from './LogoutButton';
import PizzeriaList from './PizzeriaList';
import MyAccountHome from './MyAccountHome';
import MyInformations from './MyInformations';
import MyOrdersList from './MyOrdersList';


const PizzHeader: React.FC = () => {

  /* const { user, isAuthenticated, isLoading } = useAuth0(); */

  return (
    <div>
        <IonHeader>
            <IonToolbar>
            <IonTitle><a href="/">Pizz'App</a></IonTitle>
            { /*  isAuthenticated && (
                <div className='profile-box'>
                <Profile></Profile>
                <LogoutButton></LogoutButton>
                </div>
            ) */ }
            </IonToolbar>
        </IonHeader>
    </div>
  );
};

export default PizzHeader;