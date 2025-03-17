import { StyledButton } from './styles';

// eslint-disable-next-line
export default function Button({ children, moreStyles }) {
  return (
    <StyledButton style={{ ...moreStyles }}>
      {children}
    </StyledButton>
  );
}
