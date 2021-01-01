/* eslint-disable jsx-a11y/anchor-is-valid */
import { FaHome, FaSignInAlt, FaUserAlt } from 'react-icons/fa';
import { NavLink, Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { Container } from '../../styles/GlobalStyles';

import { Nav } from './styled';

export default function Header() {
  const botaoClicado = useSelector((state) => state.example.botaoClicado);
  return (
    <Nav>
      <Container className="menu">
        <div className="logo">
          <Link to="/">Escola</Link>
        </div>
        {botaoClicado ? 'Clicado' : 'Não  clicado'}
        <div className="menu-item">
          <NavLink to="/" exact>
            <FaHome />
          </NavLink>
          <NavLink to="/login">
            <FaUserAlt />
          </NavLink>
          <NavLink to="/exit">
            <FaSignInAlt />
          </NavLink>
        </div>
      </Container>
    </Nav>
  );
}
