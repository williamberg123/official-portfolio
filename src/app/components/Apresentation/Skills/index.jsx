import Skill from './Skill';
import { Container } from './styles';

export default function Skills() {
  return (
    <Container>
      {
				Array(5).fill('').map(() => <Skill key={Math.random()} />)
			}
    </Container>
  );
}
