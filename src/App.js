import React from 'react';
import Dashboard from './components/dashboard/Dashboard';
import { Container } from '@mui/material';
import 'react-grid-layout/css/styles.css';
import 'react-resizable/css/styles.css';


function App() {
  return (
      <Container maxWidth="lg">
        <Dashboard />
      </Container>
  );
}

export default App;