import React from 'react';
import './FilterTitle.css'

const FilterTitle = ({ dropDownOptions, setTitleOption }) => {


    const titleOptionButton = (el) => {

        setTitleOption(el);
    };

    if (dropDownOptions.length !== 0 ) {
        return (
            <div className="dropdown">
                <button className="dropbtn">Dropdown</button>
                <div className="dropdown-content">
                    {/* <a href="#">Link 1</a>
                    <a href="#">Link 2</a>
                    <a href="#">Link 3</a> */}
                    {
                        dropDownOptions.map((el,index) => {
                            return <button key={index} onClick={() => titleOptionButton(el)}>{el}</button>
                        })
                    }
                </div>
            </div>
        );
    } else {
        return null;
    }
}

export default FilterTitle;