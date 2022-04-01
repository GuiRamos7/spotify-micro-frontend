import React from 'react';
import Profile from './Profile';

const Shell = React.lazy(() => import('shell/Shell'));

const App = () => {
  return (
    <React.Suspense fallback={'Loading'}>
      <Shell />
      <Profile />
    </React.Suspense>
  );
};

export default App;
