import React from 'react';
import { AiFillPlayCircle } from 'react-icons/ai';
import { MdOutlineMoreHoriz } from 'react-icons/md';
import styled from 'styled-components';

import { Header, MostListen, ArtistChoice } from './components';

const Container = styled.div`
  .actions-button {
    padding: 20px 32px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 300px;

    .icon-play {
      font-size: 60px;
      fill: #64d762;
    }

    .icon-more {
      font-size: 30px;
    }

    button {
      background: transparent;
      border: 1px solid #fff;
      padding: 7px 15px;
      color: #fff;
      border-radius: 4px;
      box-sizing: border-box;
      color: #fff;
      font-size: 12px;
      font-weight: 700;
      letter-spacing: 0.1em;
      line-height: 16px;
      text-align: center;
      text-transform: uppercase;
    }
  }
  .content {
    display: grid;
    grid-template-columns: repeat(6, minmax(0, 1fr));

    ul {
      grid-column: span min(6 - 2, 6);
    }

    & > div {
      grid-column: span 2;
    }

    @media (max-width: 1300px) {
      ul {
        grid-column: span 6;
      }
    }
  }
`;

const Profile = () => {
  return (
    <Container>
      <Header name='Red Hot Chilli Peppers' listeners='25.881.462' />
      <div className='actions-button'>
        <AiFillPlayCircle className='icon-play' />
        <button>FOLLOW</button>
        <MdOutlineMoreHoriz className='icon-more' />
      </div>
      <div className='content'>
        <MostListen />
        <ArtistChoice />
      </div>
    </Container>
  );
};

export default Profile;
