import React, { useState, useEffect } from 'react';
import http from '../../utils/http';
import styles from './index.less';

export interface INavigationItem {
  name: string;
  href: string;
}

const HomePage: React.FC = () => {
  const [navigations, setNavigations] = useState<INavigationItem[]>([]);

  useEffect(() => {
    http
      .get('/6cf88eff3c829f6dbe6f779e2170c196e033c9ad/navigations.json')
      .then(res => res.data && setNavigations(res.data));
  }, []);

  return (
    <>
      <div className={styles.navigations}>
        {
          navigations && navigations.map((value, index) => <a key={index} href={value.href}>{value.name}</a>)
        }
      </div>
    </>
  );
};

export default HomePage;
