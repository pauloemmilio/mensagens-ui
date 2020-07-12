import React from 'react';
import "bootstrap/dist/css/bootstrap.css";
import Routes from './routes';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Container } from "react-bootstrap";

function App() {
  return (
    <div>
      <Container>
        <ToastContainer autoClose={4000} />
        <Routes />
      </Container>
    </div>
  );
}

export default App;
