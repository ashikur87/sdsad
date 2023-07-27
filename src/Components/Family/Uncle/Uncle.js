import React, { useContext } from 'react';
import Cousin from '../Cousin/Cousin';
import { MoneyContext } from '../GrandPa/GrandPa';

const Uncle = () => {
    const [money,setMoney]=useContext(MoneyContext)
    return (
        <div>
            <h2>Uncle</h2>
            <p>Grandpa Money:{money}</p>
            <button onClick={()=>setMoney(money+1000)}> Send 1000Tk</button>
            <section className='flex'>
                <Cousin>Nabila</Cousin>
                <Cousin>kabila</Cousin>
                <Cousin>habil</Cousin>
                <Cousin>babul</Cousin>
            </section>
        </div>
    );
};

export default Uncle;