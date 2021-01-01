import styled from 'styled-components';

import { primaryColor, primaryDarkColor } from '../../config/color';

export const Nav = styled.nav`
  background: ${primaryColor};

  .menu {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 20px;
  }

  .logo a {
    color: #fff;
    font-weight: bold;
  }
  .menu-item {
    display: flex;
  }
  .menu-item a {
    padding: 10px;
    color: #fff;
    transition: 0.3s ease all;
  }

  .menu-item a:hover {
    background: ${primaryDarkColor};
  }

  .active {
    background: ${primaryDarkColor};
  }
`;
