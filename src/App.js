import React from 'react';
import FullName from './Component/Profile/FullName.js';
import Address from './Component/Profile/Address.js';
import ProfilPhoto from './Component/Profile/ProfilPhoto.js';
import './App.css';

function App() {
  
  return (
    <div>
     <FullName />;
     <Address/>;
     <ProfilPhoto />;
    </div>
  );
}

export default App;
