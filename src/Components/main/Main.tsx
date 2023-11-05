import React from 'react';
import st from './Main.module.scss'


export const Main = () => {

    return (
        <div className={st.blockGreetings}>
            <p className={st.mainGreetings}>
                Привет
            </p>
        </div>
    );
};

