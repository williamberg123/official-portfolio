import { Container, StyledProfileImage } from './styles';

import profileImage from '../../../../assets/profile-image.jpg';

export default function ProfileImage() {
	return (
		<Container>
			<StyledProfileImage src={profileImage} />
		</Container>
	);
}
