import Apresentation from '../../components/Apresentation';
import MyProjects from '../../components/MyProjects';
import NavBar from '../../components/NavBar';

import { Container } from './styles';

export default function Home() {
  return (
    <Container>
      <Apresentation />
      <MyProjects />
			<NavBar />
    </Container>
  );
}
