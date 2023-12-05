import React from 'react';
import BarraMenu from '../components/Barramenu/Barramenu';

export function Layout(props) {
  const { children } = props;
  return (
    <div>
      <div className='container-fluid'>
        <BarraMenu />
      </div>
      <div>
        {children}
      </div>
    </div>
  );
}

