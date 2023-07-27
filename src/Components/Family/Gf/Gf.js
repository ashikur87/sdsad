import React, { useContext } from 'react';
import { RingContext } from '../GrandPa/GrandPa';

const Gf = () => {
    const angti=useContext(RingContext)
    return (
        <div>
            <p>Special:</p><spam>
            {angti}</spam>
        </div>
    );
};

export default Gf;