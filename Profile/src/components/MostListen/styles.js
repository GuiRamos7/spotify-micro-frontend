import styled, { css } from 'styled-components';

export const MostListenList = styled.ul`
  padding: 20px 32px;
  h2 {
    font-size: 1.2rem;
    margin: 0 0 2rem;
  }

  li {
    list-style: none;
    align-items: center;
    button {
      width: 100%;
      display: grid;
      grid-column-gap: 24px;
      grid-template-columns: 16px 45px 4fr 2fr minmax(100px, 1fr);
      align-items: center;
      background: transparent;
      border: none;
      padding: 5px 10px;
      border-radius: 4px;

      & > svg {
        display: none;
        fill: #a7a7a7;
      }

      &:hover {
        .item-number {
          display: none;
        }

        & > svg {
          display: block;
          fill: #a7a7a7;
        }
      }

      &:hover {
        background: #2c2929;
      }

      span {
        color: #a7a7a7;
      }
      .song-name {
        color: #fff;
        text-align: start;
      }
      /* #a7a7a7 */
      img {
        width: 40px;
        margin: 0 16px;
      }

      &:hover {
        svg:last-of-type {
          visibility: visible;
        }
      }
    }
  }
`;

export const Infos = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  & > svg:first-of-type {
    fill: ${(props) => (props.isLiked ? '#1db954' : '#a7a7a7')};
  }
  svg:last-of-type {
    visibility: hidden;
    fill: #a7a7a7;
  }

  time {
    color: #a7a7a7;
  }
`;
