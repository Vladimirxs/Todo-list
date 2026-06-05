import { useState } from 'react'
import './Task.css';




function Task({ categories, tasks, setTasks, selectCategory, setSelectCategory}) {
    const [select, setSelect] = useState('')
    const [inputValue, setInputValue] = useState('')
    
    
   const filterTasks = tasks.filter(task => task.category === selectCategory);

if (selectCategory === 'входящие') {
    tasks;
} else {
      const filterTasks = tasks.filter(task => task.category === selectCategory);
}

console.log(tasks, categories, filterTasks);




    function addBtn() {
        const newTask = {
            id: Date.now(),
            name: inputValue,
            category: select, 
        };

        setTasks([...tasks, newTask]);
        setInputValue('');
        setSelect('');
        
        
    }

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
                    <div key={task.id}  className='category-menu'>
                        {}

                        {task.name &&  (
                            <span>
                                <i>✅</i> {task.name}
                            </span>
                        )}
                    </div>
                ))}
            </div>
        </div>

    )
}





export default Task;