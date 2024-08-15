import { StyledButton } from './styles';

// eslint-disable-next-line
export default function Button({ children, moreStyles, as }) {
  return (
    <StyledButton style={{ ...moreStyles }}>
      {children}
    </StyledButton>
  );
}
