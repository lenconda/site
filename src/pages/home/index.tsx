import React, { useState, useEffect } from 'react';
import http from '../../utils/http';
import styles from './index.less';

export interface INavigationItem {
  name: string;
  href: string;
}

const HomePage: React.FC = () => {
  const [navigation, setNavigation] = useState<INavigationItem[]>([]);

  useEffect(() => {
    http
      .get('/navigations.json')
      .then(res => res.data && setNavigation(res.data));
  }, []);

  return (
    <>
      <div className={styles.navigation}>
        {
          navigation && navigation.map((value, index) => {
            return (
              <div
                key={index}
                className="animated bounceIn"
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <a href={value.href}>
                  {value.name}
                </a>
              </div>
            );
          })
        }
      </div>
    </>
  );
};

export default HomePage;
