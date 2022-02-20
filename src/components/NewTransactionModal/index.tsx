import Modal from 'react-modal';
import { Container, RadioBox, TransactionTypeContainer } from './style';

import closeImg from '../../assets/close.svg';
import incomeImg from '../../assets/income.svg';
import outcomeImg from '../../assets/outcome.svg';
import { useState } from 'react';





interface propsNewTransactionModal {
    isOpen: boolean;
    onRequestClose: () => void
}

export function NewTransactionModal( {isOpen, onRequestClose}:propsNewTransactionModal) {
    const [type, setType] = useState('deposit')
   
    return (
        <Modal 
            isOpen={isOpen} 
            onRequestClose={onRequestClose}
            overlayClassName="react-modal-overlay"
            className="react-modal-content"
          
            
        >
            <Container>

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
                />

                <input 
                    placeholder="Valor"
                    type="number"
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
                    
                 />
                 <button type="submit">
                     Cadastrar
                 </button>

            </Container>

         </Modal>
    )
}