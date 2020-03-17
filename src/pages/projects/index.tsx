import React, { useState, useEffect } from 'react';
import styles from './index.less';
import Card from '../../components/Card';
import http from '../../utils/http';
import Loading from '../../components/Loading';

export interface IProjectItem {
  name: string;
  description: string;
  href: string;
}

const ProjectsPage: React.FC = () => {
  const [projects, setProjects] = useState<IProjectItem[]>(null);
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    setLoading(true);
    http
      .get('/projects.json')
      .then(res => res.data && setProjects(res.data))
      .finally(() => setLoading(false));
  }, []);

  return (
    loading
      ? <Loading />
      : <div className={`${styles.container} animated slideInUp`}>
        {
          projects && projects.map((value, index) => {
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

export default ProjectsPage;
