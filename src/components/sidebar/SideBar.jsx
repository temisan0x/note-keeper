import React from 'react'
import Notes from './Notes'
import Reminders from './Reminders';
import { BrowserRouter, Route, Routes, Switch } from 'react-router-dom'


const SideBar = () => {
    return (
        <BrowserRouter>
        <div>
            <Routes>
                <Route path="/user" component={Notes} />
                <Route path="/" exact component={Reminders} />
            </Routes>
        </div>
    </BrowserRouter >
    )
}

export default SideBar