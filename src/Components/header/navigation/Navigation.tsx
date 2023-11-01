import React from 'react';
import st from './Navigation.module.scss'

type NavType = {
    id: string
    title: string
}

export type NavigationPropsType = {
    navigation: NavType[]
}

export const Navigation = ({navigation}: NavigationPropsType) => {
    let navRender = navigation.map(n => {
        return (
            <li key={n.id}>
                <a href="src/components/header/navigation/Nav">{n.title}</a>
            </li>
        )
    })

    return (
        <ul className={st.blockNav}>
            {navRender}
        </ul>
    );
};

