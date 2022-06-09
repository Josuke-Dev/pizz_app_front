import './PageContainer.css';
import LoginButton from './LoginButton';
import PizzeriaList from './PizzeriaList';
import MyAccountHome from './MyAccountHome';
import MyInformations from './MyInformations';
import MyOrdersList from './MyOrdersList';
import LoginForm from './LoginForm';

interface ContainerProps {
  name: string;
}

const PageContainer: React.FC<ContainerProps> = ({ name }) => {

  /* const { user, isAuthenticated, isLoading } = useAuth0(); */

  return (
    /* isAuthenticated ? 
    ( */
      <div className="page-container">
        <strong style={{padding: "20px"}}>{name}</strong>
        { name == "Page d'accueil" && ( <PizzeriaList></PizzeriaList> ) }
        { name == "Mon Compte" && ( <MyAccountHome></MyAccountHome> ) }
        { name == "Mes Infos" && ( <MyInformations></MyInformations> ) }
        { name == "Mes Commandes" && ( <MyOrdersList></MyOrdersList> ) }
        { name == "Login Page" && ( <LoginForm></LoginForm> ) }
      </div> 
    /* )
    :
    (
      <div className="page-container pizza-home"> 
        <LoginButton></LoginButton>
      </div>
    )*/
  );
};

export default PageContainer;
