import Header from './Header';
import Skills from './Skills';
import { BackgroundFade, Container } from './styles';

export default function Presentation() {
	return (
		<Container id="apresentation">
			<Header />
			<Skills />
			<BackgroundFade />
		</Container>
	);
}
