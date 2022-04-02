import styled from 'styled-components';

export const SidebarStyled = styled.nav`
  width: 100%;
  background: #000;
  height: 100%;
  display: flex;
  box-sizing: border-box;
  flex-direction: column;
  padding: 5px 0 0;
  .icon-container {
    height: 70px;
    padding: 25px 25px 40px;

    svg {
      max-width: 131px;
      fill: #fff;
    }
  }
`;

export const ShortCutButtonList = styled.ul`
  margin-top: 30px;
  li {
    list-style: none;
    height: 40px;
    button {
      padding: 0 25px;
      width: 100%;
      border-radius: 5px;
      display: flex;
      align-items: center;
      background: none;
      color: #b3b3b3;
      border: none;
      gap: 16px;
      height: 40px;
      transition: color 0.2s;

      span {
        font-family: 1rem;
        font-weight: 600;
      }

      svg {
        font-size: 20px;
      }

      &:hover {
        color: #fff;
      }
    }
  }
`;
