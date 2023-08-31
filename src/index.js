import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Counter from './state';
import EffectCount from './useEffect';
import ApiEffect from './api';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <>
        <Counter/>
        <EffectCount/>
        <ApiEffect/>
    </>

);