import React from 'react';

// โหลดความสามารถของ react-router มาใช้งาน
import { Route, IndexRoute } from 'react-router';

// โหลด component ต่างๆ
import App from './components/App.jsx';
import Home from './components/Home.jsx';
import About from './components/About.jsx';

// ระบุว่า path นี้จะถูก handle ด้วย component ไหน
export default (
    <Route path="/" component={App}>
        <IndexRoute component={Home}/>
        <Route path="/about" component={About}/>
    </Route>
);
