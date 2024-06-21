import React, { useState } from "react";
import HogTile from "./HogTile";
import HogFilter from "./HogFilter";

function HogList({ hogs }) {
    const [showGreased, setShowGreased] = useState(false);
    const [sortBy, setSortBy] = useState("name");

    const onOptionSelect = (showGreased) => {
        setShowGreased(!showGreased);
    };

    // const filteredHogs = hogs.filter((hog) => {
    //     // for all the pigs
    //     if(selectedCategory === "All"){
    //         return true;
    //     }
    //     // for not greased
    //     else if (selectedCategory === "Greased"){
    //         return hog.greased;
    //     }
    //     // not greased
    //     else {
    //         return !hog.greased;
    //     }
    // });

    const filteredHogs = hogs
        .filter((hog) => (showGreased ? hog.greased : true))
        .sort((hog1, hog2) => {
            if (sortBy === "weight") {
                return hog1.weight - hog2.weight;
            }
            else {
                return hog1.name.localeCompare(hog2.name);
            }
        });

    const hogsToDisplay = filteredHogs.map((hog) => (
        <HogTile
            key={hog.name}
            name={hog.name}
            image={hog.image}
            weight={hog.weight}
            greased={hog.greased}
            specialty={hog.specialty}
            highestMedal={hog["highest medal achieved"]}
        />
    ));

    return (
        <div>
            <HogFilter showGreased={showGreased} onChangeShowGreased={setShowGreased} sortBy={sortBy} onChangeSortBy={setSortBy} />
            <div className="porkers">
                {hogsToDisplay}
            </div>
        </div>
    );
}

export default HogList;