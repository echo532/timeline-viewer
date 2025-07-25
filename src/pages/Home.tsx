import React, { useState } from 'react';
import './Home.css';
import Timeline from '../components/Timeline';
import MenuBar from '../components/MenuBar';

const Home: React.FC = () => {

  

  const handleOtherAction = () => {
    alert('Other action clicked!');
  };

  return (
    <>
      <MenuBar onAddEntry={handleOtherAction}/>
      <div style={{ fontFamily: 'sans-serif' }}>
        <Timeline />
    </div>
    </>
  );
};

export default Home;
