import {BrowserRouter as Router } from "react-router-dom";
import Footer from "./Components/Headers/Footer/Footer";
import Header from "./Components/Headers/Headers/Header";
import AppRoutes from "./routes/AppRoutes";
import { Container } from "react-bootstrap";
import { Suspense } from "react";
import Loader from "./Components/Headers/Loaders/Loader";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
export function App() {


  return (
    <>
    <ToastContainer/>
      <Router>
        <Header/>
          <Container style={{minWidth: '100%', padding: '0',minHeight: '100vh'}}>
            <Suspense fallback={<Loader/>}>
               <AppRoutes/>
            </Suspense>
          </Container>
        <Footer/>
      </Router>
    </>
  );
}
