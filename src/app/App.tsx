import React, {useState} from 'react';
import {Header} from '../Components/header/Header';
import {Navigation} from '../Components/header/navigation/Navigation';
import st from './App.module.scss'
import {v1} from "uuid";

export function App() {

    const [navigation, setNavigation] = useState([
        {id: v1(), title: "main"},
        {id: v1(), title: "bot-skills"},
        {id: v1(), title: "contacts"},
    ])

    return (
        <div className={st.App}>
        <div className={st.stars}></div>
            <div className={st.twinkling}>

                <Header navigation={navigation}/>


            </div>
        </div>
    );
}


