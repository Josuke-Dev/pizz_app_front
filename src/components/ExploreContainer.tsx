import './ExploreContainer.css';
import Login from './Login';

interface ContainerProps {
  name: string;
}

const ExploreContainer: React.FC<ContainerProps> = ({ name }) => {
  return (
    <div className="container">
      <strong>{name}</strong>
      <Login/>
    </div>
  );
};

export default ExploreContainer;
