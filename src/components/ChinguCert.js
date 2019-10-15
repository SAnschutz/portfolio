import React from 'react';
import chinguCert from '../assets/Chingu_Certificate.jpg';

export default function ChinguCert() {
  return (
    <div>
      <img
        src={chinguCert}
        alt='Chingu certificate of completion'
        className='chingu-cert'
      />
    </div>
  );
}
