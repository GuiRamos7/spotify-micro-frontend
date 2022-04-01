import React from 'react';
import Profile from './Profile';
import { GlobalStyle } from './styles/global';

const Shell = React.lazy(() => import('shell/Shell'));

const App = () => {
  return (
    <React.Suspense fallback={'Loading'}>
      <GlobalStyle />
      <Shell>
        <Profile />
      </Shell>
    </React.Suspense>
  );
};

export default App;
