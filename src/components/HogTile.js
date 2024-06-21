import React, { useState } from "react";

function HogTile({ name, image, weight, specialty, highestMedal, greased }) {
    const [isClicked, setIsClicked] = useState(false);

    function handleClick(){
        setIsClicked((isClicked) => !isClicked)
    }

    return (
        <div onClick={handleClick} className="pigTile">
            <h3>{name}</h3>
            <img width="250" src={image} />
            {isClicked ? (
                <div>
                    <p>Weight: {weight}</p>
                    <p>Specialties: {specialty}</p>
                    <p>Highest medal acheived: {highestMedal}</p>
                    {greased ? <p>Greased</p> : null}
                </div>
            ) : null}
        </div>
    );
}

export default HogTile;