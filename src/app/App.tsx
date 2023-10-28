import React from 'react';
import {Header} from '../Components/header/Header';
import {Navigation} from '../Components/header/navigation/Navigation';
import st from './App.module.scss'

export function App() {

    const stars = [];

    for (let i = 1; i <= 200; i++) {
        stars.push(<div key={i} className={`${st.star} ${st['star-' + i]}`}></div>);
    }


  return (
    <div className={st.App}>
        <div className={st.stars}>
            {stars}
          <Header />
          <Navigation />

        </div>
    </div>
  );
}


