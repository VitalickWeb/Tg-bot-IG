import React from 'react';
import st from './Header.module.scss'
import {Navigation} from "./navigation/Navigation";


export type NavType = {
    id: string
    title: string
}

export type NavigationPropsType = {
    image: string
    navigation: NavType[]
}

export const Header = ({image, navigation}: NavigationPropsType) => {
    return (
        <div className={st.blockHeader}>
            <div className={st.containerHeader}>
                <div className={st.boxImageHeader}>
                    <img src={image} className={st.logoImage} alt=""/>
                    <h1 className={st.mainTitle}>Vek AI</h1>
                </div>

                <nav className={st.navContainer}>
                    <Navigation navigation={navigation}/>
                </nav>
            </div>
        </div>
    );
};

