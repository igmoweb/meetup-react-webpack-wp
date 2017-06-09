import { getTodos } from './helpers';

const todos = getTodos();

let ul = document.createElement( 'ul' );
let app = document.getElementById( 'app' );

todos.map( ( todo ) => {
   let li = document.createElement( 'li' );
   li.innerHTML = todo.title;
   ul.append( li );
   app.append( ul );
});