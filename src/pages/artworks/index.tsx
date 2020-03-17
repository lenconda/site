import React, { useState, useEffect } from 'react';
import styles from './index.less';
import Card from '../../components/Card';
import http from '../../utils/http';

export interface IArtworkItem {
  name: string;
  description: string;
  href: string;
}

const ArtworksPage: React.FC = () => {
  const [artworks, setArtworks] = useState<IArtworkItem[]>(null);

  useEffect(() => {
    http
      .get('/artworks.json')
      .then(res => res.data && setArtworks(res.data));
  }, []);

  return (
    <div className={styles.container}>
      {
        artworks && artworks.map((value, index) => {
          return (
            <Card
              key={index}
              style={{ animationDelay: `${index * 100 + 360}ms` }}
              className="animated flipInX"
              backgroundColor="transparent"
              color="#333"
              title={value.name}
              subTitle={value.description}
              href={value.href}
            />
          );
        })
      }
    </div>
  );
};

export default ArtworksPage;
