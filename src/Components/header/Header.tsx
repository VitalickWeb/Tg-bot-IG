import React from 'react';
import st from './Header.module.scss'
import {Navigation} from "./navigation/Navigation";


export type NavType = {
    id: string
    title: string
}

export type NavigationPropsType = {
    navigation: NavType[]
}

export const Header = ({navigation}: NavigationPropsType) => {
    return (
        <div className={st.blockHeader}>
            <div className={st.containerHeader}>
                <h1 className={st.mainTitle}>Vek AI</h1>
                <nav className={st.navContainer}>
                    <Navigation navigation={navigation}/>
                </nav>
            </div>
        </div>
    );
};

