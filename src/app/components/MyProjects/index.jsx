import Project from './Project';
import { Container, ProjectsContainer, Title } from './styles';

export default function MyProjects() {
  return (
    <Container id="projects">
      <Title>PROJETOS ENTREGUES</Title>

      <ProjectsContainer>
        {
					Array(4).fill('').map(() => (<Project key={`project${Math.random()}`} />))
				}
      </ProjectsContainer>
    </Container>
  );
}
