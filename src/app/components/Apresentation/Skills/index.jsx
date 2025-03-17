import Skill from './Skill';
import { Container } from './styles';

export default function Skills() {
  return (
    <Container>
      {
				// eslint-disable-next-line
				Array(5).fill('').map((item, index) => <Skill key={index + 1} delay={index * 0.2} />)
			}
    </Container>
  );
}
