import React from 'react';
import {Header} from "../Components/header/Header";
import {Navigation} from "../Components/header/navigation/Navigation";
import st from './App.module.scss'

export function App() {


  return (
    <div className={st.App}>

      <Header />
      <Navigation />

    </div>
  );
}


