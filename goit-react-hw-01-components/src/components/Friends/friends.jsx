import React from 'react';
import propTypes from 'prop-types';
import styles from './friends.module.css';

const FriendList = ({friends}) =>{
    return (
        <ul className={styles.list}>
            {friends.map(item =>(
                <li className={styles.item} key={item.id}>
                <span className={styles.status}>
                {item.isOnline ? (
            <div style={{width: 20, height: 20, background: 'green', borderRadius: 50,}}/>) 
            : (<div style={{width: 20, height: 20, background: 'red', borderRadius: 50, }} />)}
                </span>
                <img className={styles.avatar} src={item.avatar} alt="img" width="48" />
                <p className={styles.name}></p>
              </li>
            ))}
        </ul>
    );
};
FriendList.propTypes = {
    friends: propTypes.arrayOf(
        propTypes.shape({
            name: propTypes.string.isRequired,
            avatar: propTypes.string.isRequired,
        }).isRequired,
    ).isRequired,
};
export default FriendList;
