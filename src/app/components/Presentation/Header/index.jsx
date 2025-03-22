import ProfileImage from './ProfileImage';
import InformationsContainer from './InformationsContainer';
import CodeImage from '../../../assets/code';

import {
	Container, ProfileCodeContainer
} from './styles';

export default function Header() {
	return (
		<Container>
			<ProfileImage />
			<InformationsContainer />

			<ProfileCodeContainer>
				<CodeImage />
			</ProfileCodeContainer>
		</Container>
	);
}
