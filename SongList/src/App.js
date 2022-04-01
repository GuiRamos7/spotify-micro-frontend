import React from 'react';
import SongList from './SongList';

const Shell = React.lazy(() => import('shell/Shell'));

const App = () => {
  return (
    <React.Suspense fallback={'Loading'}>
      <Shell />
      <SongList />
    </React.Suspense>
  );
};

export default App;
