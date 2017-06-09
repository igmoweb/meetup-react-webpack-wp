import { getTodos } from './helpers';
import styles from '../scss/style.scss';
import Fetcher from './Fetcher';

let ul = document.createElement( 'ul' );
ul.classList.add( 'todos' );

let app = document.getElementById( 'app' );

Fetcher.getTodos()
    .then( ( response ) => {
        response.map( ( todo ) => {
            let li = document.createElement( 'li' );
            li.classList.add( 'todo-item' );
            li.innerHTML = todo.title.rendered;
            ul.append( li );
        });

        app.innerHTML = '';
        app.append( ul );
    });