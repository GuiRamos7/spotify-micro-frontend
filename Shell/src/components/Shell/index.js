import React from 'react';
import Sidebar from '../Sidebar';

import * as S from './styles';

const Shell = ({ children = '' }) => {
  return (
    <S.Container>
      <Sidebar />
      {children}
    </S.Container>
  );
};

export default Shell;
