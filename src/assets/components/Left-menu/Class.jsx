


function Class({Category, selectCategory, setSelectCategory}) {
    return (
      <div className='categories-section'>
            <h3 className="section-title">Категории</h3>

            {Category.map((category, index) => (
                <div key={index} className='category-item'>
                    <span className='icon'>•</span>
                    <span
                        onClick={() => setSelectCategory(category)}
                        style={{
                            padding: '8px 12px',
                            cursor: 'pointer',
                            borderRadius: '8px',
                            backgroundColor: selectCategory === category ? '#00b09b' : 'transparent',
                            color: selectCategory === category ? 'white' : 'black',
                        }}
                    >
                        {category}
                    </span>
                </div>
            ))}
        </div>
    );
}

export default Class;
