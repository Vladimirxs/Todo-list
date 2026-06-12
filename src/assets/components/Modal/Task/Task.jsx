import { useState } from 'react'
import './Task.css';




function Task({ categories, tasks, setTasks, selectCategory}) {
    const [select, setSelect] = useState('')
    const [inputValue, setInputValue] = useState('')
    
    
 let filterTasks;
if (selectCategory === 'выполненные') {
    filterTasks = tasks.filter(task => task.completed === true);
} 
else if (selectCategory === 'входящие') {
    filterTasks = tasks;
} 
else {
    filterTasks = tasks.filter(task => task.category === selectCategory);
}


    function addBtn() {
        const newTask = {
            id: Date.now(),
            name: inputValue,
            category: select, 
            completed: false, 
        };

        setTasks([...tasks, newTask]);
        setInputValue('');
        setSelect('');  
    }
    const toggleTask = (id) => {
        setTasks(tasks.map(task => 
            task.id === id ? {...task, completed: !task.completed} : task
        ));
    };

    const handleKeyPress = (event) => {
        if (event.key === "Enter") {
            addBtn();
        };
    };
   
    return (       
        <div className='right-side'>
            <div className="side-menu">
                <input type="text"
                    placeholder="Запись задачи"
                    onKeyPress={handleKeyPress}
                    className='input'
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}

                />
                <select className='select'
                    value={select}
                    onChange={(e) => setSelect(e.target.value)}>

                    <option value="">Выбор категории</option>
                    {categories.map((category, id) => (
                        <option key={id} value={category}>
                            {category}
                        </option>
                    ))}
                </select>

                <button className="btn" onClick={addBtn}>Добавить</button>
            </div>
            <h1>Задачи</h1>
            <div className='tasks-menu'> 
                
                {filterTasks.map((task) => (
                    <div key={task.id}  className='category-menu'
                        onClick={() => toggleTask(task.id)}
                        style={{textDecoration: task.completed ? 'line-through' : 'none',
              cursor: 'pointer',
              padding: '8px'
              }}
              >
                        
                        
                        {task.name &&  (
                            <div>                               
                                <i>✅</i>  {task.name} 
                               
                            </div>
                        )}
    
                        <div>{selectCategory}</div>                  
                    </div> 
                ))}
               



            </div>
        </div>

    )
}





export default Task;