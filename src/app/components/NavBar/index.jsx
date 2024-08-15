import { GrProjects } from 'react-icons/gr';
import { IoPerson } from 'react-icons/io5';
import { MdOutlineInfo } from 'react-icons/md';

import {
	Container, Li, NavLink, Ul,
} from './styles';

export default function NavBar() {
	const handleScrollToSection = (event, sectionId) => {
		event.preventDefault();
		document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
	};

	return (
		<Container>
			<Ul>
				<Li>
					<NavLink onClick={(event) => handleScrollToSection(event, 'apresentation')}>
						<IoPerson />
					</NavLink>
				</Li>

				<Li>
					<NavLink onClick={(event) => handleScrollToSection(event, 'projects')}>
						<GrProjects />
					</NavLink>
				</Li>

				<Li>
					<NavLink onClick={(event) => handleScrollToSection(event, 'info')}>
						<MdOutlineInfo />
					</NavLink>
				</Li>
			</Ul>
		</Container>
	);
}
