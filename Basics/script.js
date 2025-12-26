let h1=React.createElement('h1',null,'Hello from React!');
let h2=React.createElement('h2',null,'Naitik Chitransh!');
let div= React.createElement('div',{id:'react'},[h1,h2]);


let container= document.querySelector('#container');
let root= ReactDOM.createRoot(container);

root.render(div);