import React, { useState, useEffect } from 'react';
import styles from './index.less';

export interface CardComponentProps extends React.HtmlHTMLAttributes<HTMLElement> {
  color?: string;
  backgroundColor?: string;
  title: string;
  subTitle: string;
  href: string;
}

const Card: React.FC<CardComponentProps> = ({
  color = '#333',
  backgroundColor = 'white',
  className = '', ...props
}: CardComponentProps) => {
  return (
    <div
      className={`${styles.card} ${className}`}
      style={{ backgroundColor, color, ...props.style }}
    >
      <h1>{props.title}</h1>
      <h2>{props.subTitle}</h2>
      <a href={props.href} className={styles.link}>继续了解</a>
    </div>
  );
};

export default Card;
