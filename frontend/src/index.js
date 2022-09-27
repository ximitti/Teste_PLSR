import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import * as ReactDOMClient from 'react-dom/client';

import App from './App'

const domContainer = document.querySelector('#root');
const root = ReactDOMClient.createRoot(domContainer);
root.render(<App/>);