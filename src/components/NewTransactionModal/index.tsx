import Modal from 'react-modal';
import { Container, RadioBox, TransactionTypeContainer } from './style';

import closeImg from '../../assets/close.svg';
import incomeImg from '../../assets/income.svg';
import outcomeImg from '../../assets/outcome.svg';
import { FormEvent, useContext, useState } from 'react';
import { api } from '../../services/api';

import { useTransaction } from '../../Hooks/useTransaction';





interface propsNewTransactionModal {
    isOpen: boolean;
    onRequestClose: () => void
}

export function NewTransactionModal( {isOpen, onRequestClose}:propsNewTransactionModal) {
    const {createTransaction} = useTransaction()



    const [type, setType] = useState('deposit');
    const [title, setTitle] = useState('');
    const [category, setCategory] = useState('');
    const [amount, setAmount] = useState(0);


    async function handleCreateNewTransaction(event: FormEvent) {
        event.preventDefault();

       await createTransaction({
            amount,
            category,
            title,
            type 
        })

        setAmount(0);
        setCategory('');
        setTitle('');
        setType('deposit');

        onRequestClose()
      
    }   
    
   
    return (
        <Modal 
            isOpen={isOpen} 
            onRequestClose={onRequestClose}
            overlayClassName="react-modal-overlay"
            className="react-modal-content"
          
            
        >
            <Container onSubmit={handleCreateNewTransaction} >

                <button 
                    type='button'
                    onClick={onRequestClose}
                    className="react-modal-close"
                >
                    <img src={closeImg} alt="Fechar" />
                </button>
                
                <h2>Cadastrar Transação</h2>

                <input 
                    placeholder="Titulo"
                    value={title} 
                    onChange={event => setTitle(event.target.value)}
                />

                <input 
                    placeholder="Valor"
                    type="number"
                    value={amount} 
                    onChange={event => setAmount(Number(event.target.value))}
                />

                <TransactionTypeContainer>
                    <RadioBox
                        type='button'
                        onClick={() => setType('deposit')}
                        isActive = {type === 'deposit'}
                        activeColor = 'green'
                    >
                        <img src={incomeImg} alt="" />
                        <span>Entrada</span>
                    </RadioBox>

                    <RadioBox
                        type='button'
                        onClick={() => setType('withdraw')}
                        isActive = {type === 'withdraw'}
                        activeColor = 'red'
                    >
                        <img src={outcomeImg} alt="" />
                        <span>Saida</span>
                    </RadioBox>
                </TransactionTypeContainer> 

                <input 
                    placeholder="categoria"
                    value={category} 
                    onChange={event => setCategory(event.target.value)}
                    
                 />
                 <button type="submit">
                     Cadastrar
                 </button>

            </Container>

         </Modal>
    )
}