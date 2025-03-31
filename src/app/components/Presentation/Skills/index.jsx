// eslint-disable-next-line
import { gql, useQuery } from '@apollo/client';
import Skill from './Skill';
import { Container } from './styles';

// import reactImage from '../../../assets/React.webp';
// import tsImage from '../../../assets/typescript.png';
// import nodeImage from '../../../assets/nodejs.png';
// import uxuiImage from '../../../assets/ux-ui.webp';
// import figmaImage from '../../../assets/figma.webp';

const GET_TECHNOLOGIES = gql`
	query GetTechnologies {
		technologies {
			id
			name
			description
			tecImage {
				url
			}
		}
	}
`;

export default function Skills() {
	const { data } = useQuery(GET_TECHNOLOGIES);

	return (
		<Container>
			{
				// Array(5).fill('').map((item, index) => <Skill key={index + 1} delay={index * 0.2} />)
				data?.technologies.map(
					(item, index) => (
						// eslint-disable-next-line
						<Skill item={item} key={index + 1} delay={index * 0.2} />
					)
				)
			}
		</Container>
	);
}
