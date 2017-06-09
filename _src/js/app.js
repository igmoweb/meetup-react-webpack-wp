import { getTodos } from './helpers';
import styles from '../scss/style.scss';

const todos = getTodos();

let ul = document.createElement( 'ul' );
ul.classList.add( 'todos' );

let app = document.getElementById( 'app' );

todos.map( ( todo ) => {
   let li = document.createElement( 'li' );
   li.classList.add( 'todo-item' );
   li.innerHTML = todo.title;
   ul.append( li );
   app.append( ul );
});