import { useTheme } from 'styled-components';

import { FaGithub, FaLinkedinIn, FaInstagram } from 'react-icons/fa6';
import { MdOutlineDownloading } from 'react-icons/md';
import { HiOutlineMail } from 'react-icons/hi';
import Logo from '../../Logo';
import Button from '../../Button';

import {
	Container, ProfileFigure, ProfileImage, ProfileInformationsContainer,
	ProfileCodeContainer, ActionsButtonContainer, SocialMediaContainer, SocialMediaLink,
} from './styles';

import profileImage from '../../../assets/profile-image.jpg';
import CodeImage from '../../../assets/code';

import myCurriculum from '../../../assets/my-curriculum.pdf';

export default function Header() {
	const theme = useTheme();

	return (
		<Container>
			<ProfileFigure>
				<ProfileImage src={profileImage} />
			</ProfileFigure>

			<ProfileInformationsContainer>
				<div className="informations-header">
					<Logo />

					<SocialMediaContainer>
						<SocialMediaLink href="https://www.linkedin.com/in/williamberrg/" target="_blank">
							<FaLinkedinIn />
						</SocialMediaLink>

						<SocialMediaLink href="https://github.com/williamberg123" target="_blank">
							<FaGithub />
						</SocialMediaLink>

						<SocialMediaLink href="https://www.instagram.com/wi_berrg/" target="_blank">
							<FaInstagram />
						</SocialMediaLink>
					</SocialMediaContainer>
				</div>

				<ActionsButtonContainer>
					<Button
						moreStyles={{
							color: `${theme.colors.secondary}`,
							backgroundColor: `${theme.colors.primary}`,
						}}
					>
						<a
							href={myCurriculum}
							download="cv-williamberg.pdf"
							style={{
								color: `${theme.colors.secondary}`
							}}
						>
							MEU CURRÍCULO
							<MdOutlineDownloading />
						</a>
					</Button>
					<Button>
						<a
							href="mailto:williamberg567@gmail.com"
							style={{
								color: 'white'
							}}
						>
							EMAIL PARA CONTATO
						</a>
						<HiOutlineMail />
					</Button>
				</ActionsButtonContainer>
			</ProfileInformationsContainer>

			<ProfileCodeContainer>
				<CodeImage />
			</ProfileCodeContainer>
		</Container>
	);
}
