import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import routes from '../constants/routes';
import * as styles from './Home.styles';

export default class Home extends Component {
  render() {
    return (
      <div className={styles.container} data-tid="container">
        <h2>Home</h2>
        <Link to={routes.COUNTER}>to Counter</Link>
      </div>
    );
  }
}