import { createPortal } from 'react-dom';
import { IoIosCloseCircle } from 'react-icons/io';

import { Container } from './styles';

export default function SkillDetailModal({ skill, toggleModal }) {
	return createPortal(
		<Container>
			<h1>{skill.name}</h1>
			<IoIosCloseCircle onClick={toggleModal} />
		</Container>,
		document.getElementById('skill-detail-root'),
	);
}
