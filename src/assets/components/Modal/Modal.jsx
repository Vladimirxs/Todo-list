import { useState } from 'react'
import './Modal.css';



function Modal ({ onAddCategory }) {
const [isOpen, setIsOpen] = useState(false);
 const [categoryName, setCategoryName] = useState('')

function openModal()  {
    setIsOpen(true);
    setCategoryName('');
}
function closeModal()  {
    setIsOpen(false);
    setCategoryName('');
}

function addModal() {
    onAddCategory(categoryName); 
    closeModal();
}
const hadlekey = (event) => {
    if (event.key === 'Enter') {
        addModal()
    }
}

const modalContent = (
    <div className='modal-overlay'>
        <div className='modal-content'>
            <input type="text"
              placeholder='Категория'
              className='input'
              onKeyPress={hadlekey}
              value={categoryName}
              onChange={(e) => setCategoryName(e.target.value)}
              />
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