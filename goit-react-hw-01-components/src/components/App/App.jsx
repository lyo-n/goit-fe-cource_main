import React from 'react';
import styles from './main.module.css';
import Profile from '../Profile/Profile';
import userJson from '../../data-json/user.json';
import Stats from '../Statistics/stats';
import stats from '../../data-json/statistical-data.json';
import FriendList from '../Friends/friends';
import friends from '../../data-json/friends.json';
import TransactionHistory from '../Transactions/transactions';
import transactions from '../../data-json/transactions.json';

const App = () => (
  <div className={styles.main}>
    <Profile user={userJson} />
    <Stats stats={stats} />
    <FriendList friends={friends} />
    <TransactionHistory items={transactions} />
  </div>
);

export default App;
