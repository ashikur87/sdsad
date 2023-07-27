import React from 'react';
import Myself from '../Myself/Myself';
import Brother from '../Brother/Brother';
import Sister from '../Sister/Sister';

const Father = () => {
    return (
        <div>
           Father
           <section className='flex'>
            <Myself/>
            <Sister/>
            <Brother/>
           
            </section> 
        </div>
    );
};

export default Father;