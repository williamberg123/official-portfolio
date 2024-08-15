import { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { GiNothingToSay } from 'react-icons/gi';
import { Container } from './styles';

export default function NotFound() {
	const [counter, setCounter] = useState(5);
	const navigate = useNavigate();

	useEffect(() => {
		const interval = setInterval(() => {
			setCounter((prevState) => prevState - 1);
		}, 1000);

		const timeOut = setTimeout(() => {
			navigate('/');
		}, 5000);

		return () => {
			clearTimeout(timeOut);
			clearInterval(interval);
		};
	}, []);

	return (
		<Container>
			<div className="header">
				<GiNothingToSay />
				<h1>Not Found</h1>
			</div>
			<span>Voce será redirecionado em {counter} ..</span>
			<Link to="/">Voltar para página principal</Link>
		</Container>
	);
}
