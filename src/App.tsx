import { useState } from "react";
import { Dashboard } from "./components/Dashboard";
import { Header } from "./components/Header";
import { NewTransactionModal } from "./components/NewTransactionModal";
import { GlobalStyle } from "./global";
import { TransactionContext, TransactionProvider } from "./TransactionContext";


export function App() {

  const [isNewTransactionModalOpen, setIsNewTransactionModalOpen] = useState(false);
  

  function handleOpenNewTransactionModal() {
      setIsNewTransactionModalOpen(true)
  }

  function handleCloseNewTransactionModal() {
      setIsNewTransactionModalOpen(false)
  }

  return (
    <TransactionProvider>
     
     <GlobalStyle/> 
     <Header onOpenNewTransactionModal={handleOpenNewTransactionModal}/>
     
     <Dashboard/>
     <NewTransactionModal
      isOpen={isNewTransactionModalOpen}
      onRequestClose={handleCloseNewTransactionModal}
     /> 
    
    </TransactionProvider>
  );
}


