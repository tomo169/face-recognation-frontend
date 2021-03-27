import React from 'react';


const Rank = ({ name, enteris }) => {
    return (
        <div>
            <div className='white f3'>
                {`${name}, your current rank is...`}
            </div>
            <div className='white f1'>
                {enteris}
            </div>
        </div>

    );
}

export default Rank;