import React from 'react';
import styles from './index.less';

export interface ContainerComponentProps extends React.HtmlHTMLAttributes<HTMLElement> {
  backgroundColor: string;
}

const Container: React.FC<ContainerComponentProps> = (props: ContainerComponentProps) => {
  return (
    <div
      className={`${styles.container} animated slideInDown`}
      style={{ backgroundColor: props.backgroundColor }}
    >
      {props.children}
    </div>
  );
};

export default Container;
