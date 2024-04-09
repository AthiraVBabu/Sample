import React from 'react';
import logoUrl from '../../assets/2.svg';

function Header() {
  const logoStyle = {
    position: 'absolute',
    top: '-25px',
    left: '10px',
  };

  return (
    <header className="header">
      <img src={logoUrl} alt="Logo" className="logo" style={logoStyle} width="100" height="100"/>
      {/* Other header content */}
    </header>
  );
}

export default Header;
