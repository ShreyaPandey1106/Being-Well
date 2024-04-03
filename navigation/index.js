import React from 'react';
import { AuthProvider } from './AuthProvider';
import Routes from './Routes';
import Footer from '../components/Footer';

const Providers = () => {
  
  return (
     <AuthProvider>
      <Routes />
      
      </AuthProvider>
    
  );
}

export default Providers;