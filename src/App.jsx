import { useState } from 'react'
import './App.css'


function App() {
  const [OpenMenu, setOpenMenu] = useState(false);

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
        </div>

        <div className='category-work'>
          <span className='icon'>🔴</span>
          <span>Работа</span>
        </div>

        <div className='category-personal'>
          <span className='icon'>🟢</span>
          <span>Личное</span>
        </div>

        <div className='category-study'>
          <span className='icon'>🔵</span>
          <span>Учёба</span>
        </div>

        <div className='category-plus'>
          <span className='icon'>⊕</span>
          <span>Добавить категорию</span>
        </div>
      </div>
      
      <div className='right-side'>
        <div className='message'>Задач пока нет</div>
      </div>
    </div>
  );
}

export default App;

          