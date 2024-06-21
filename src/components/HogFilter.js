import React from "react";

function HogFilter({ sortBy, onChangeSortBy, showGreased, onChangeShowGreased }) {
    function handleToggleGreased(event) {
        onChangeShowGreased(event.target.checked);
    };

    function handleChangeSortBy(event) {
        onChangeSortBy(event.target.value);
    }

    return (
        <div>
            <label> Show Greased Only? </label>
                <input checked={showGreased} onChange={handleToggleGreased} type="checkbox" />
            <label> Sort by </label>
            <select name="sort" onChange={handleChangeSortBy} value={sortBy} >
                <option value="name">Name</option>
                <option value="weight">Weight</option>
            </select>
        </div>
    );
}

export default HogFilter;