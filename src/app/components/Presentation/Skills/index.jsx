import Skill from './Skill';
import { Container } from './styles';

import reactImage from '../../../assets/React.webp';
import tsImage from '../../../assets/typescript.png';
import nodeImage from '../../../assets/nodejs.png';
import uxuiImage from '../../../assets/ux-ui.webp';
import figmaImage from '../../../assets/figma.webp';

const skills = [
	{
		name: 'React JS',
		skillImage: reactImage,
	},
	{
		name: 'TypeScript',
		skillImage: tsImage
	},
	{
		name: 'Node JS',
		skillImage: nodeImage
	},
	{
		name: 'UX & UI',
		skillImage: uxuiImage
	},
	{
		name: 'Figma',
		skillImage: figmaImage
	}
];

export default function Skills() {
	return (
		<Container>
			{
				// Array(5).fill('').map((item, index) => <Skill key={index + 1} delay={index * 0.2} />)
				// eslint-disable-next-line
				skills.map((item, index) => <Skill item={item} key={index + 1} delay={index * 0.2} />)
			}
		</Container>
	);
}
