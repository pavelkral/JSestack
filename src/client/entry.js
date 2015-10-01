import Debug from 'debug';
import App from './app';

import '../../build/css/main.css';

var app;


Debug.enable('myApp*');

app = new App();
app.render();

