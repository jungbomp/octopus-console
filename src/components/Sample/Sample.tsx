import React, { useState } from 'react';

import styles from './style.scss';

const Sample: React.FC = () => {
  const [state, setState] = useState('CLICK ME');

  return (
    <button type="submit" onClick={() => setState('CLICKED')} className={styles.button}>
      {state}
    </button>
  );
};

export default Sample;
