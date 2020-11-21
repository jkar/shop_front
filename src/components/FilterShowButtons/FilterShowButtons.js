import React from 'react';

const FilterShowButtons = ({filterTotalPages,  changePage}) => {

    let buttons = [];
    for (var x = 1; x <= filterTotalPages; x++) {
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

export default FilterShowButtons;