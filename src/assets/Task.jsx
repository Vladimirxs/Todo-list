import { useState } from 'react'
import './Task.css';


function Task() {
    const [select, setSelect] = useState('')
    const [inputValue, setInputValue] = useState('')
    const [tasks, setTasks] = useState([])

    function addMenu(newMenu) {
        if (newMenu && newMenu.trim()) {  
            const newTask = {             
                id: Date.now(),           
                name: newMenu             
            }
            setTasks([...tasks, newTask]) 
            setInputValue('')             
        }
    }

    function addBtn() {
        addMenu(inputValue)
    }
   







    return (
    <div className='right-side'> 
    <input type="text" 
    placeholder="Запись задачи" 
    className='input-select'
    value={inputValue}
    onChange={(e) => setInputValue(e.target.value)}
    />


    {tasks.map((task) => (
            <div key={task.id} className='category-menu'>
              <span>{task.name}</span>
              </div>
          ))}
    
    
            
    

    <select className='select-menu'>
    <option value="work">Работа</option>
    <option value="study">Учёба</option>
    <option value="house">Дом</option>
    </select>
     <p>{select}</p>
     <button className='btn-select' onClick={addBtn} >Добавить задачу</button>
    

        </div>
        
    )
}





export default Task;