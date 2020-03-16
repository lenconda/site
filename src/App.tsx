import React, { useState, useEffect } from 'react';
import styles from './App.less';
import history from './utils/route';
import { Router, Switch, Route } from 'react-router-dom';
import http from './utils/http';

import HomePage from './pages/home';
import ArtworksPage from './pages/artworks';
import ProjectsPage from './pages/projects';

export interface IMetadata {
  title: string;
  subtitle: string;
}

const App: React.FC = () => {
  const [metadata, setMetadata] = useState<IMetadata>(null);

  useEffect(() => {
    http
      .get('/6cf88eff3c829f6dbe6f779e2170c196e033c9ad/metadata.json')
      .then(res => res.data && setMetadata(res.data));
  }, []);

  return (
    <>
      <nav>
        <h1 className={styles.title}>{metadata && metadata.title}</h1>
        <h2 className={styles['sub-title']}>{metadata && metadata.subtitle}</h2>
      </nav>
      <Router history={history}>
        <Switch>
          <Route path="/" component={HomePage} />
          <Route path="/artworks" component={ArtworksPage} />
          <Route path="/projects" component={ProjectsPage} />
        </Switch>
      </Router>
    </>
  );
};

export default App;
