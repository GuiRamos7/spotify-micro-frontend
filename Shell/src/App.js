import React from 'react';
import styled from 'styled-components';
import Shell from './Shell';
import Sidebar from './components/Sidebar';
import { GlobalStyle } from './styles/global';

const Container = styled.div`
  background: #121212;
  display: grid;
  width: 100%;
  height: 100%;
  grid-template-columns: 240px 1fr;
`;

const ContainerComponent = ({ children }) => {
  return <Container>{children}</Container>;
};

const SongList = React.lazy(() => import('songList/SongList'));
const Profile = React.lazy(() => import('profile/Profile'));

const App = () => {
  console.log('Oi');

  return (
    <React.Suspense fallback={'Loading'}>
      <GlobalStyle />
      <ContainerComponent>
        <Sidebar />
        <div style={{ color: '#FFF' }}>
          <Profile />
          <Shell />
          <SongList />
        </div>
      </ContainerComponent>
    </React.Suspense>
  );
};

export default App;
