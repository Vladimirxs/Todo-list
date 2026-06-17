import Modal from '../Modal/Modal';
import Class from './Class';



function Menu({ searchValue, setSearchValue, toggleMenu, selectCategory, setSelectCategory, addCategory, categories }) {
    return (
        <div className="left-side">
            <button className='delete-menu' onClick={toggleMenu}>✕</button>
            <div className='menu'>
                <h1>Меню</h1>
                <input
                    type="text"
                    placeholder='Поиск задач'
                    value={searchValue}
                    onChange={(e) => setSearchValue(e.target.value)}
                />
            </div>

            <div className='header'>
                <h3 className='title'>Задачи</h3>
            </div>

            <div className='category-list'>
                <span
                    onClick={() => setSelectCategory('входящие')}
                    style={{
                        cursor: 'pointer',
                        borderRadius: '8px',
                        padding: '8px 12px',
                        backgroundColor: selectCategory === 'входящие' ? '#00b09b' : 'transparent',
                        color: selectCategory === 'входящие' ? 'white' : 'black',
                    }}
                >
                    » Входящие
                </span>
            </div>

            <div className='category-task'>
                <span>👍</span>
                <span
                    onClick={() => setSelectCategory('выполненные')}
                    style={{
                        cursor: 'pointer',
                        borderRadius: '8px',
                        padding: '8px 12px',
                        backgroundColor: selectCategory === 'выполненные' ? '#00b09b' : 'transparent',
                        color: selectCategory === 'выполненные' ? 'white' : 'black',
                    }}
                >
                    Выполненные
                </span>
            </div>

            <div className='category-item'>
                <span className='icon'>☰</span>
                <span>Сегодня</span>
            </div>

            <Class
            Category={categories}
            selectCategory={selectCategory}
            setSelectCategory={setSelectCategory}
            />

            <Modal onAddCategory={addCategory} />

        </div>
       
    );
}

export default Menu;