import React from 'react';
import SongList from './SongList';
import { GlobalStyle } from './styles/global';

const Shell = React.lazy(() => import('shell/Shell'));

const App = () => {
  return (
    <React.Suspense fallback={'Loading'}>
      <GlobalStyle />
      <Shell>
        <SongList />
      </Shell>
    </React.Suspense>
  );
};

export default App;
