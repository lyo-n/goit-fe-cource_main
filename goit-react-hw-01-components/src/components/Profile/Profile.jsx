import React from 'react';
import propTypes from 'prop-types';
import styles from './profile.module.css';


const profile = ({user}) =>{
    const {name, tag, location, avatar, alt, stats} = user;

    return( 
    <div className={styles.profile}>
        <div className={styles.description}>
    <img src={avatar} alt={alt} className={styles.avatar}/>
    <p className={styles.name}>{name}</p>
    <p className={styles.tag}>@{tag}</p>
    <p className={styles.location}>{location}</p>
        </div>

    <ul className={styles.stats}>
    <li className={styles.item}>
        <span className={styles.label}>Followers</span>
        <span className={styles.quantity}>{stats.followers}</span>
    </li>
    <li className={styles.item}>
        <span className={styles.label}>Views</span>
        <span className={styles.quantity}>{stats.views}</span>
    </li>
    <li className={styles.item}>
        <span className={styles.label}>Likes</span>
        <span className={styles.quantity}>{stats.likes}</span>
    </li>
    </ul>
</div>
    );
};

profile.propTypes = {
    user: propTypes.shape({
        name: propTypes.string.isRequired,
        avatar: propTypes.string.isRequired,
        alt: propTypes.string,
        tag: propTypes.string.isRequired,
        location: propTypes.string.isRequired,

    }),
};

profile.defaultProps = {
    user: propTypes.shape({alt: 'avatar'}),
};

export default profile;

