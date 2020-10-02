import React from 'react';

const ShowButtons = ({totalPages,  changePage}) => {

    let buttons = [];
    for (var x = 1; x <= totalPages; x++) {
        buttons.push(x);
    }

    return (
        <div>
            {buttons.map((num, index) => {
                return (
                    <button onClick={() =>changePage(num)} key={index}>{num}</button>
                )
            })}
        </div>        
        )
};

export default ShowButtons;