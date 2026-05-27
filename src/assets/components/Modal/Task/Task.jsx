import { useState } from 'react'
import './Task.css';




function Task({ categories }) {
    const [select, setSelect] = useState('')
    const [inputValue, setInputValue] = useState('')
    const [tasks, setTasks] = useState([
        { id: '', name: '' }
    ])


    function addBtn() {
        const newTask = {
            id: Date.now(),
            name: inputValue,
        };

        setTasks([...tasks, newTask]);
        setInputValue('');
        console.log(newTask.id);
    }

    const handleKeyPress = (event) => {
        if (event.key === "Enter") {
            addBtn();
            setTasks([...tasks, newTask])
            setInputValue('')
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

                <button className="btn" onClick={addBtn}  >Добавить </button>
            </div>
            <h1>Задачи</h1>
            <div className='tasks-menu'>
                {tasks.map((task) => (
                    <div key={task.id} className='category-menu'>

                        {task.name && (
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