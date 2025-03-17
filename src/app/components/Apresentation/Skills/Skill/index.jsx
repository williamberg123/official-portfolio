import { Container, SkillImage, SkillName } from './styles';

// eslint-disable-next-line
export default function Skill({ delay }) {
	return (
		<Container delay={delay}>
			<SkillImage />
			<SkillName>React JS</SkillName>
		</Container>
	);
}
