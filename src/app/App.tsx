import React, {useState} from 'react';
import st from './App.module.scss'
import {v1} from "uuid";

import logoBrainAiImage from '../assets/images/top-logo/pngtree—ring.png'
import {Header} from '../Components/header/Header';
import {Main} from "../Components/main/Main";

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

                <Header
                    image={logoBrainAiImage}
                    navigation={navigation}
                />
                <Main />


            </div>
        </div>
    );
}


