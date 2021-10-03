import React, { useState } from 'react';

import styles from './style.scss';

const Sample: React.FC = () => {
  const [state, setState] = useState('CLICK ME');

  const doTimer = async (): Promise<string> =>
    new Promise((resolve: (ret: string) => void) => {
      setTimeout(() => resolve('done'), 5000);
    });

  const onClick = async (): Promise<void> => {
    const ret = await doTimer();
    console.log(ret);
    setState('CLICKED');
  };

  return (
    <button type='submit' onClick={onClick} className={styles.button}>
      {state}
    </button>
  );
};

export default Sample;
