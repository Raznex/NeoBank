import React from 'react';
import { Route, Routes } from 'react-router-dom';

import Header from '../Header/Header';
import Main from '../Main/Main';
import Footer from '../Footer/Footer';
import '../Content/_Content.scss';
import CreditCard from '../CreditCard/CreditCard';
import PageNotFound from '../PageNotFound/PageNotFound';
import LoanApplicationId from '../../../Module-4/components/LoanApplicationID/LoanApplicationID';
import LoanDocument from '../../../Module-4/components/LoanDocument/LoanDocument';
import LoanSign from '../../../Module-4/components/LoanSign/LoanSign';
import LoanCode from '../../../Module-4/components/LoanCode/LoanCode';


const App = () => (
  <>
    <main className="content">
      <a
        className="App-link"
        href="https://reactjs.org"
        target="_blank"
        rel="noopener noreferrer"
      >
        Learn React
      </a>
      <Routes>
        <Route
          path="*"
          element={ (
            <Header />
          ) }
        />
        <Route
          path="/"
          element={ (
            <Main />
          ) }
        />
        <Route path="/loan" element={ <CreditCard /> } />
        <Route path="/loan/:applicationId" element={ <LoanApplicationId /> } />
        <Route path="/loan/:applicationId/document" element={ <LoanDocument /> } />
        <Route path="/loan/:applicationId/document/sign" element={ <LoanSign /> } />
        <Route path="/loan/:applicationId/code" element={ <LoanCode /> } />
        <Route path="*" element={ <PageNotFound /> } />
      </Routes>
    </main>
    <Footer />
  </>
);

export default App;
