import React from 'react';
import './FilterTitle.css';

const FilterTitle = ({ dropDownOptions, setTitleOption, setFilter, filter, titleOption, putFilteredTitle, setFilteredProducts, filteredProducts }) => {


    const titleOptionButton = (el) => {

        let titleOptionCopy = [...titleOption];
        titleOptionCopy.push(el);
        setTitleOption(titleOptionCopy);
        putFilteredTitle(titleOptionCopy);
        if (!filter) {
            setFilter(true);
        }
    };

    const removeOptionTitle = (el) => {
        const index = titleOption.indexOf(el);
        const titleOptionCopy = [...titleOption];
        if (index > -1) {
            titleOptionCopy.splice(index, 1);
            setTitleOption(titleOptionCopy);
            putFilteredTitle(titleOptionCopy);

            if (titleOptionCopy.length === 0) {
                setFilter(false);
            }

        }
    }

    const removeFilterButton = () => {
        setFilter(false);
    }

    if (dropDownOptions.length !== 0 ) {
        return (
            <>
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
            <div>
            {
                titleOption.length > 0 
                ?
                titleOption.map((el,index) => {
                    return <p key={index} onClick={() => removeOptionTitle(el)} style={{backgroundColor : "grey"}}>{el}</p>
                })
                :
                null
            }
            </div>
            </>
        );
    } else {
        return null;
    }
}

export default FilterTitle;