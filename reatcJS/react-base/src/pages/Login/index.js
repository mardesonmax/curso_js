import { useDispatch } from 'react-redux';
import { Container } from '../../styles/GlobalStyles';
import { Section, Title } from './styled';
import * as exampleAction from '../../strore/modules/example/actions';

export default function Login() {
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(exampleAction.botaoClicadoRequest);
  };

  return (
    <Section>
      <Container className="container">
        <Title isRed>
          <small>Página</small> Login
        </Title>
        <p>Um texto bacana</p>
        <button type="button" onClick={handleClick}>
          Enviar
        </button>
      </Container>
    </Section>
  );
}
