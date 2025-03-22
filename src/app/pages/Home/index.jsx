import Presentation from '../../components/Presentation';
import MyProjects from '../../components/MyProjects';
import NavBar from '../../components/NavBar';

import { Container } from './styles';

export default function Home() {
  return (
    <Container>
      <Presentation />
      <MyProjects />
			<NavBar />
    </Container>
  );
}
