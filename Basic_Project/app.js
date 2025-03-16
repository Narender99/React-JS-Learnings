import React from 'react';
import ReactDOM from 'react-dom/client';

// using JSX creating element
const nestedHeading = React.createElement('div', {className: 'title'}, [React.createElement('h1', {}, "I'm a H1 Element"),
React.createElement('h2', {}, "I'm a H2 Element"),
React.createElement('h3', {}, "I'm a H3 Element"),
]);

const root = ReactDOM.createRoot(document.getElementById('root'));

const NestedHeading = () => {
  return (
    <div className="title">
      <h1>I'm a H1 Element</h1>
      <h2>I'm a H2 Element</h2>
      <h3>I'm a H3 Element</h3>
      {nestedHeading}
    </div>
  );
};

const HeaderComponent = () => {
    return (
        <header>
            <nav className='nav_items'>
                <ul className='list_items'>
                    <li> <img src = "https://media.istockphoto.com/id/1490730937/vector/coffee-grinder-simple-black-line-icon.jpg?s=2048x2048&w=is&k=20&c=sBGSlsGgowuX1eJsD0i69OrQwRyg7G6M9R526eMmoUQ=" alt="Coffee Grinder" className='image'/></li>
                    <li><input type='search'/></li>
                    <li>
                        <img src= "https://cdn-icons-png.flaticon.com/512/1144/1144760.png" alt='Profile' className='image'/>
                    </li>
                </ul>
            </nav>
        </header>
    )
}

root.render(<HeaderComponent />);
