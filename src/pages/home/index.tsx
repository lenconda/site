import React, { useState, useEffect } from 'react';
import http from '../../utils/http';
import styles from './index.less';
import Loading from '../../components/Loading';

export interface INavigationItem {
  name: string;
  href: string;
}

const HomePage: React.FC = () => {
  const [navigation, setNavigation] = useState<INavigationItem[]>([]);
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    setLoading(true);
    http
      .get('/navigations.json')
      .then(res => res.data && setNavigation(res.data))
      .finally(() => setLoading(false));
  }, []);

  return (
    loading
      ? <Loading />
      : <div className={styles.navigation}>
        {
          navigation && navigation.map((value, index) => {
            return (
              <div
                key={index}
                className="animated flipInX"
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
  );
};

export default HomePage;
