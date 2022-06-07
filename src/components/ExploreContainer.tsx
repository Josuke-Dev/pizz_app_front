import './ExploreContainer.css';
import LoginButton from './LoginButton';
import LogoutButton from './LogoutButton';

interface ContainerProps {
  name: string;
}

const ExploreContainer: React.FC<ContainerProps> = ({ name }) => {
  return (
    <div className="container">
      <strong>{name}</strong>
      <div style={{marginTop: '20px'}}>
        <LoginButton/>
      </div>
      <div style={{marginTop: '20px'}}>
        <LogoutButton/>
      </div>
    </div>
  );
};

export default ExploreContainer;
