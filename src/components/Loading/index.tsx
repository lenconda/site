import React from 'react';
import styles from './index.less';

const Loading: React.FC = () => {
  return (
    <div className={styles['loading-wrapper']}>
      <div className={styles['loading-icon']} />
    </div>
  );
};

export default Loading;
