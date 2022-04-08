import React from 'react';
import * as S from './styles';
import { BsHeart, BsHeartFill, BsFillPlayFill } from 'react-icons/bs';
import { HiDotsHorizontal } from 'react-icons/hi';

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
    name: 'Californication',
    image:
      'https://upload.wikimedia.org/wikipedia/pt/b/bf/Red_Hot_Chili_Peppers_-_Blood_Sugar_Sex_Magik.jpg',
    plays: '900.239.212',
    duration: 25380,
    isLiked: true,
  },
  {
    name: "Can't Stop",
    image:
      'https://upload.wikimedia.org/wikipedia/pt/b/bf/Red_Hot_Chili_Peppers_-_Blood_Sugar_Sex_Magik.jpg',
    plays: '900.239.212',
    duration: 25380,
    isLiked: false,
  },
  {
    name: 'Snow (Hey Oh)',
    image:
      'https://upload.wikimedia.org/wikipedia/pt/b/bf/Red_Hot_Chili_Peppers_-_Blood_Sugar_Sex_Magik.jpg',
    plays: '900.239.212',
    duration: 25380,
    isLiked: false,
  },
  {
    name: 'Otherside',
    image:
      'https://upload.wikimedia.org/wikipedia/pt/b/bf/Red_Hot_Chili_Peppers_-_Blood_Sugar_Sex_Magik.jpg',
    plays: '900.239.212',
    duration: 25380,
    isLiked: true,
  },
];

const MostListen = () => {
  return (
    <S.MostListenList>
      <h2>Popular</h2>
      {songList.map((song, idx) => (
        <li key={`${song.name.split(' ').join('-').toLocaleLowerCase()}`}>
          <button>
            <BsFillPlayFill />
            <span className='item-number'>{idx + 1}</span>
            <img src={song.image} alt='Album cover' />
            <span className='song-name'>{song.name}</span>
            <span>{song.plays}</span>
            <S.Infos isLiked={song.isLiked}>
              {song.isLiked ? <BsHeartFill /> : <BsHeart />}
              <time>3:12</time>
              <HiDotsHorizontal />
            </S.Infos>
          </button>
        </li>
      ))}
    </S.MostListenList>
  );
};

export default MostListen;
