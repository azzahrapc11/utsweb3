import React from 'react';
import ReactDOM from 'react-dom';
import './Custom.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

const items = [
    {
        name  : 'Mickey Mouse',
        color : 'Merah',
        img   : 'merah.jpg',
    },
    {
        name  : 'Pluto',
        color : 'Kuning',
        img   : 'kuning.jpg',
    },
    {
        name  : 'Mike Wazowski',
        color : 'Hijau',
        img   : 'hijau.jpg',
    },
    {
        name  : 'Sullivan',
        color : 'Biru',
        img   : 'biru.jpg',
    },

];

ReactDOM.render(<App items={items}/>, document.getElementById('root'));
serviceWorker.register();
