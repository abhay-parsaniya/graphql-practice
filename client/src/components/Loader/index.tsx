import * as React from 'react';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';

import styles from './index.module.css'

export default function Loader() {
  return (
    <div className={styles.loader}>
      <CircularProgress />
    </div>
  );
}