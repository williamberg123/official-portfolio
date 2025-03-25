import { useCallback, useState } from 'react';

import { Container, SkillImage, SkillName } from './styles';
import SkillDetailModal from '../../../SkillDetailModal';

export default function Skill({ item, delay }) {
	const [isOpen, setIsOpen] = useState(false);

	const toggleSkillDetailModal = useCallback(() => {
		setIsOpen((s) => !s);
	}, []);

	return (
		<>
			<Container onClick={toggleSkillDetailModal} delay={delay}>
				<SkillImage src={item.skillImage} />
				<SkillName>
					{item.name}
				</SkillName>
			</Container>

			{
				isOpen && <SkillDetailModal skill={item} toggleModal={toggleSkillDetailModal} />
			}
		</>
	);
}
