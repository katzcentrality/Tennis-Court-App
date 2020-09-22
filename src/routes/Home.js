import React from 'react'
import Header from '../components/Header';
import AddCourt from '../components/AddCourt';
import Courtlist from '../components/Courtlist';

const Home = () => {
    return (
        <div>
        <Header />
        <AddCourt />
        <Courtlist />
        </div>
    )
}

export default Home
