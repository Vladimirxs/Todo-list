import { useState } from 'react'
import './Modal.css';

function Modal () {
const [isOpen, setIsOpen] = useState(false);

function openModal()  {
    setIsOpen(true);
}
function closeModal()  {
    setIsOpen(false);
}
function addModal () {
    setIsOpen(true);
}



const modalContent = (
    <div className='modal-overlay'>
        <div className='modal-content'>
            <input type="text"  placeholder='Категория' className='input'/>
            <button onClick={closeModal} className='Exit'>❌</button>
            <button onClick={addModal} className='add-categoriy'>Добавить</button>
        </div>
    </div>
)
 return (
    <div>
<button onClick={openModal} className='add'>⊕</button>
<span>Добавить категорию</span>
{isOpen && modalContent}
    </div>
 )
};


export default Modal;