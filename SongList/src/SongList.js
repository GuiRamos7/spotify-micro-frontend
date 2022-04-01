import React from 'react';

const dbSongList = [
  {
    name: 'DAMN.',
    artist: 'Kendrick Lamar',
    img: 'https://m.media-amazon.com/images/I/71FvMBLmheL._AC_SL1200_.jpg',
    year: '2017',
  },

  {
    name: 'Thriller',
    artist: 'Michael Jackson',
    img: 'https://upload.wikimedia.org/wikipedia/en/5/55/Michael_Jackson_-_Thriller.png',
    year: '1984',
  },
  {
    name: 'Californication',
    artist: 'Red Hot Chili Peppers',
    img: 'https://upload.wikimedia.org/wikipedia/pt/7/78/Red_Hot_Chili_Peppers_-_Californication.jpg',
    year: '1999',
  },
];

const SongList = () => {
  return (
    <div>
      {dbSongList.map((el) => {
        return (
          <div>
            <p>Name: {el.name}</p>
            <p>artist: {el.artist}</p>
            <img
              style={{ width: '300px' }}
              src={el.img}
              loading='lazy'
              alt=''
            />
          </div>
        );
      })}
    </div>
  );
};

export default SongList;
