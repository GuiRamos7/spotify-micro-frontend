import React from 'react';
import { AiFillPlayCircle } from 'react-icons/ai';
import { MdOutlineMoreHoriz } from 'react-icons/md';
import styled from 'styled-components';

const songList = [
  {
    name: 'Under the bridge',
    image:
      'https://upload.wikimedia.org/wikipedia/pt/b/bf/Red_Hot_Chili_Peppers_-_Blood_Sugar_Sex_Magik.jpg',
    plays: '900.239.212',
    duration: 25380,
    isLiked: true,
  },
  {
    name: 'Under the bridge',
    image:
      'https://upload.wikimedia.org/wikipedia/pt/b/bf/Red_Hot_Chili_Peppers_-_Blood_Sugar_Sex_Magik.jpg',
    plays: '900.239.212',
    duration: 25380,
    isLiked: true,
  },
  {
    name: 'Under the bridge',
    image:
      'https://upload.wikimedia.org/wikipedia/pt/b/bf/Red_Hot_Chili_Peppers_-_Blood_Sugar_Sex_Magik.jpg',
    plays: '900.239.212',
    duration: 25380,
    isLiked: false,
  },
  {
    name: 'Under the bridge',
    image:
      'https://upload.wikimedia.org/wikipedia/pt/b/bf/Red_Hot_Chili_Peppers_-_Blood_Sugar_Sex_Magik.jpg',
    plays: '900.239.212',
    duration: 25380,
    isLiked: false,
  },
  {
    name: 'Under the bridge',
    image:
      'https://upload.wikimedia.org/wikipedia/pt/b/bf/Red_Hot_Chili_Peppers_-_Blood_Sugar_Sex_Magik.jpg',
    plays: '900.239.212',
    duration: 25380,
    isLiked: true,
  },
  {
    name: 'Under the bridge',
    image:
      'https://upload.wikimedia.org/wikipedia/pt/b/bf/Red_Hot_Chili_Peppers_-_Blood_Sugar_Sex_Magik.jpg',
    plays: '900.239.212',
    duration: 25380,
    isLiked: false,
  },
];

const Header = styled.header`
  width: 100%;
  height: 40vh;
  background: url('https://i.scdn.co/image/ab676186000010167f61d45ad74b38e57ee92b68');
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center top;
  display: flex;
  flex-direction: column;
  justify-content: end;
  padding: 24px 32px;

  h1 {
    font-family: Arial, Helvetica, sans-serif;
    font-size: 5rem;
    font-weight: bolder;
    white-space: nowrap;
  }

  p {
    line-height: 2;
    font-size: 16px;
  }
`;

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
`;

const SongList = styled.ul`
  padding: 20px 32px;

  li {
    list-style: none;
    & + li {
      margin-top: 1rem;
    }
    align-items: center;
    button {
      display: flex;
      align-items: center;
      background: transparent;
      border: none;
      span {
        color: #a7a7a7;
      }
      .song-name {
        flex: 1;
        color: #fff;
      }
      /* #a7a7a7 */
      img {
        width: 40px;
        margin: 0 16px;
      }
    }
  }
`;

// export

const Profile = () => {
  return (
    <Container>
      <Header>
        <h1>Red Hot Chili Peppers</h1>
        <p>25.250.121 ouvintes mensais</p>
      </Header>
      <div className='actions-button'>
        <AiFillPlayCircle className='icon-play' />
        <button>FOLLOW</button>
        <MdOutlineMoreHoriz className='icon-more' />
      </div>

      <SongList>
        {songList.map((song, idx) => (
          <li>
            <button>
              <span>{idx + 1}</span>
              <img src={song.image} alt='' />
              <span className='song-name'>{song.name}</span>
              <span>{song.plays}</span>
              {/* <span>{song.plays}</span> */}
            </button>
          </li>
        ))}
      </SongList>
    </Container>
  );
};

export default Profile;
