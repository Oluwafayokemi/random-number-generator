import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';
import './index.css'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faFileDownload, faSignInAlt, faDownload } from '@fortawesome/free-solid-svg-icons'

library.add(faFileDownload, faSignInAlt, faDownload);
ReactDOM.render(<App />, document.getElementById('root'));

serviceWorker.register();
