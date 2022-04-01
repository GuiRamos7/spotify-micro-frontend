import React from 'react';
import Shell from './components/Shell';
import { GlobalStyle } from './styles/global';

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
      <Shell>
        <div>
          <Profile />
          <SongList />
        </div>
      </Shell>
    </React.Suspense>
  );
};

export default App;
