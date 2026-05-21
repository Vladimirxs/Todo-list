import { useState } from 'react'
import './App.css'
import Modal from './assets/Modal';
import Task from './assets/Task';


function App() {
  const [OpenMenu, setOpenMenu] = useState(false);
  const [Category, setCategory] = useState([]); 

  function addCategory(newCategory) {
    setCategory([...Category, newCategory]);
  }



  

  function toggleMenu()  {
    setOpenMenu(!OpenMenu);
  };


  return (
    <div className={`app ${OpenMenu ? 'menu-open' : ''}`}>
      <button className='btn-menu' onClick={toggleMenu}>☰</button>



      <div className="left-side">
        <button className='delete-menu' onClick={toggleMenu}>✕</button>
        <div className='menu'>
          <h1>Меню</h1>
          <input type="text" placeholder='Поиск' />
        </div>
        
      

        <div className='header'>
          <h3 className='title'>Задачи</h3>
        </div>

        <div className='category-list'>
          <span className="icon">»</span>
          <span>Входящие</span>
        </div>

        <div className='category-item'>
          <span className='icon'>☰</span>
          <span>Сегодня</span>
        </div>

        <div className='categories-section'>
          <h3 className="section-title">Категории</h3>

          {Category.map((category, index) => (
            <div key={index} className='category-item'>
                <span className='icon'>•</span>
              <span>{category}</span>
              </div>
          ))}

          <Modal onAddCategory={addCategory}/>
        </div>
        </div>

          <Task/>
       
      
      
      </div>
   
  );
}

export default App;

          