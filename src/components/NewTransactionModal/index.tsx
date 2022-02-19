import Modal from 'react-modal';
import { Container } from './style';



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
                
                <h2>Cadastrar Transação</h2>

                <input 
                    placeholder="Titulo" 
                />

                <input 
                    placeholder="Valor"
                    type="number"
                 />
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