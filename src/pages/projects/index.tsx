import React, { useState, useEffect } from 'react';
import styles from './index.less';
import Card from '../../components/Card';
import http from '../../utils/http';

export interface IProjectItem {
  name: string;
  description: string;
  href: string;
}

const ProjectsPage: React.FC = () => {
  const [projects, setProjects] = useState<IProjectItem[]>(null);

  useEffect(() => {
    http
      .get('/projects.json')
      .then(res => res.data && setProjects(res.data));
  }, []);

  return (
    <div className={`${styles.container} animated slideInUp`}>
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
