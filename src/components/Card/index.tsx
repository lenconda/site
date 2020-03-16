import React from 'react';
import styles from './index.less';

export interface CardProps {
  color?: string;
  backgroundColor?: string;
  title: string;
  subTitle: string;
  link: string;
}

const Card: React.FC<CardProps> = ({ color = '#333', backgroundColor = 'white', ...props }: CardProps) => {
  return (
    <a className={styles.card} style={{ backgroundColor, color }} href={props.link}>
      <h1>{props.title}</h1>
      <h2>{props.subTitle}</h2>
    </a>
  );
};

export default Card;
