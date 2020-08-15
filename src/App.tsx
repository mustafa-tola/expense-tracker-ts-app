import React from 'react';
import './App.css';
import { Header } from "./components/Header";
import { Balance } from "./components/Balance";
import { IncomeExpenses } from "./components/IncomeExpense";
import { TransactionList } from "./components/TransactionList";
import { AddTransaction } from "./components/AddTransaction";
import { GlobalProvider } from "./context/GlobalState";
import { firebase } from "./firebase";

function App() {
  const firebaseMessaging = () => {
    const messaging = firebase.messaging();
    messaging.requestPermission().then(() => {
      messaging.getToken().then((currentToken:any) => {
        if (currentToken) {
          console.log("Token:", currentToken);
        } else {
          console.log('No Instance ID token available. Request permission to generate one.');
        }
      }).catch((err:any) => {
        console.log('An error occurred while retrieving token. ', err);
      });
    })
  }
  firebaseMessaging();
  return (
    <GlobalProvider>
      <div className="deck">
        <Header />
        <div className="container">
          <Balance />
          <IncomeExpenses />
          <TransactionList />
          <AddTransaction />
        </div>
      </div>
    </GlobalProvider>
  );
}

export default App;

