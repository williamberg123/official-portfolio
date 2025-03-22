import { Container, SkillImage, SkillName } from './styles';

export default function Skill({ item, delay }) {
	return (
		<Container delay={delay}>
			<SkillImage src={item.skillImage} />
			<SkillName>
				{item.name}
			</SkillName>
		</Container>
	);
}
