import { useState } from 'react'
import './App.css'
import Task from './assets/components/Modal/Task/Task';
import Menu from './assets/components/Left-menu/Menu';


function App() {
  const [OpenMenu, setOpenMenu] = useState(false);
  const [Category, setCategory] = useState([]); 
  const [tasks, setTasks] = useState([]);
  const [selectCategory, setSelectCategory] = useState('входящие');
  const [searchValue, setSearchValue] = useState('');
  
   
  function addCategory(newCategory) {
    setCategory([...Category, newCategory]);
  }

  function toggleMenu()  {
    setOpenMenu(!OpenMenu);
  };

    
  return (
    <div className={`app ${OpenMenu ? 'menu-open' : ''}`}>
      <button className='btn-menu' onClick={toggleMenu}>☰</button>
      


         <Menu
         toggleMenu={toggleMenu}
          searchValue={searchValue}
          setSearchValue={setSearchValue}
          selectCategory={selectCategory}
          setSelectCategory={setSelectCategory}
          categories={Category}
          addCategory={addCategory}
          />
    
      
          <Task categories={Category}
          tasks={tasks}
          setTasks={setTasks}
          selectCategory={selectCategory}
          searchValue={searchValue}
          />
         
      </div>
   );
}

export default App;

          