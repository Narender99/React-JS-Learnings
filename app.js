const heading = React.createElement('h1', {id: "heading"}, 'Hello welcome from JavaScript!');

const parent= React.createElement('div', {name: 'parent'}, "I'm a div tag");
const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(parent);