import React from 'react';
import propTypes from 'prop-types';
import styles from './transactions.module.css';

const transactions = ({items}) =>{
    return (
        <table className={styles.transactionHistory}>
            <thead className={styles.thead}>
            <tr className={styles.theadName}>
            <th>Type</th>
            <th>Amount</th>
            <th>Currency</th>
            </tr>
            </thead>
        <tbody className={styles.tbody}>
        {items.map(item => (
          <tr key={item.id} className={styles.tr}>
            <td className={styles.type}>{item.type}</td>
            <td className={styles.amount}>{item.amount}</td>
            <td className={styles.currency}>{item.currency}</td>
          </tr>
        ))}
        </tbody>
        </table>
    );
};

transactions.propTypes = {
    items: propTypes.arrayOf(
        propTypes.shape({
            id: propTypes.string.isRequired,
            type: propTypes.string.isRequired,
            amount: propTypes.string.isRequired,
            currency: propTypes.string.isRequired,
        }).isRequired,        
    ).isRequired,
};
export default transactions;