import './PageContainer.css';
import LoginButton from './LoginButton';
import { useAuth0 } from "@auth0/auth0-react";
import PizzeriaList from './PizzeriaList';
import MyAccountHome from './MyAccountHome';
import MyInformations from './MyInformations';
import MyOrdersList from './MyOrdersList';

interface ContainerProps {
  name: string;
}

const PageContainer: React.FC<ContainerProps> = ({ name }) => {

  const { user, isAuthenticated, isLoading } = useAuth0();

  return (
    isAuthenticated ? 
    (
      <div className="page-container">
        <strong>{name}</strong>
        { name == "Page d'accueil" && ( <PizzeriaList></PizzeriaList> ) }
        { name == "Mon Compte" && ( <MyAccountHome></MyAccountHome> ) }
        { name == "Mes Infos" && ( <MyInformations></MyInformations> ) }
        { name == "Mes Commandes" && ( <MyOrdersList></MyOrdersList> ) }
      </div> 
    ) 
    :
    (
      <div className="page-container pizza-home"> 
        <LoginButton></LoginButton>
      </div>
    )
  );
};

export default PageContainer;
