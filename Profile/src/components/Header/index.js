import React from 'react';
import * as S from './styles';

const Header = ({ name, listeners, backgroundImg }) => {
  return (
    <S.Header>
      <h1>{name}</h1>
      <p>{listeners} ouvintes mensais</p>
    </S.Header>
  );
};

export default Header;
