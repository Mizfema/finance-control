import Modal from 'react-modal';
import { Container, TransactionTypeContainer } from './style';

import closeImg from '../../assets/close.svg';
import incomeImg from '../../assets/income.svg';
import outcomeImg from '../../assets/outcome.svg';





interface propsNewTransactionModal {
    isOpen: boolean;
    onRequestClose: () => void
}

export function NewTransactionModal( {isOpen, onRequestClose}:propsNewTransactionModal) {
    
   
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
                    <button>
                        <img src={incomeImg} alt="" />
                        <span>Entrada</span>
                    </button>
                    <button>
                        <img src={outcomeImg} alt="" />
                        <span>Saida</span>
                    </button>
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