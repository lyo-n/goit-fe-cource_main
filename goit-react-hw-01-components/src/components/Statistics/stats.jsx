import React from 'react';
import propTypes from 'prop-types';
import styles from './stats.module.css';
import colorItem from './colorItem';

const stats = ({title, stats}) => {
    return title ?(
    <section className={styles.statistics}>
    <h2 className={styles.title}>{title}</h2>
    <ul className={styles.statList}>
        {stats.map(item => (
    <li className={styles.item} key={item.id} 
    style={{
    backgroundColor: colorItem[Math.floor(Math.random() * colorItem.length)]
        ,}}>
        <span className="label">{item.label}</span>
        <span className="percentage">{item.percentage}%</span>
    </li>
        ))}
      </ul>
</section>
    ): (
        <h1>title parametr not input</h1>
  );
};
stats.propTypes = {
    title: propTypes.string,
    stats: propTypes.arrayOf(
        propTypes.shape({
            id: propTypes.string.isRequired,
            label: propTypes.string.isRequired,
            percentage: propTypes.number.isRequired,
        }).isRequired,
    ).isRequired,
};

stats.defaultProps = {
    title: 'Upload stats',
};

export default stats;

