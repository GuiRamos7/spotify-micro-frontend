import React from 'react';
import * as S from './styles';

const ArtistChoice = () => {
  return (
    <S.Wrapper>
      <h2>Artist Choice</h2>
      <div>
        <img
          src='https://i.scdn.co/image/ab67706c0000da842fcb4fe060a7e7f31714e4ca'
          alt='Playlist cover image'
        />
        <div>
          <S.Tag>
            <img
              src='https://i.scdn.co/image/ab6761610000f178b0dd96d5c6fcd8b068834373'
              alt='Artist image'
            />
            <span>Black Summer + Top Songs</span>
          </S.Tag>
          <h3>Red Hot Chilli Peppers Complete</h3>
          <span>Playlist</span>
        </div>
      </div>
    </S.Wrapper>
  );
};

export default ArtistChoice;
