import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import { areArrayEqual, randomInteger } from "../utils";
import { ListCards } from "./ListCards";
import { dataset } from "../fakeData";

const cardsNumber = 3;
const initalSetRandomNumber = [...Array(cardsNumber).keys()];

export function Randomizer() {
    const [randomNumbers, setrandomNumbers] = useState(initalSetRandomNumber);
    const [hasBeenClicked, sethasBeenClicked] = useState(false);

    const getRandomNumber = () => {
        const uniqueRandomNumbers = [];
        while (uniqueRandomNumbers.length < cardsNumber) {
            const randomNumber = randomInteger(0, dataset.length - 1);
            if (uniqueRandomNumbers.indexOf(randomNumber) === -1)
                uniqueRandomNumbers.push(randomNumber);
        }
        setrandomNumbers(uniqueRandomNumbers);
        !hasBeenClicked && sethasBeenClicked(true);
    };

    useEffect(() => {
        const sortAscendingOrder = randomNumbers.slice().sort();
        const sortDescendingOrder = sortAscendingOrder.slice().reverse();

        const isOrderAscending = areArrayEqual(
            randomNumbers,
            sortAscendingOrder
        );
        const isOrderDescending = areArrayEqual(
            randomNumbers,
            sortDescendingOrder
        );

        if (hasBeenClicked && isOrderAscending) {
            $("#section-4").addClass("ascending");
        } else if (hasBeenClicked && isOrderDescending) {
            $("#section-4").addClass("descending");
        } else {
            $("#section-4").removeClass("ascending descending");
        }
    }, [randomNumbers]);

    return (
        <>
            <div className="col-12 d-flex justify-content-between flex-wrap">
                <ListCards
                    dataset={dataset}
                    randomNumbers={randomNumbers}
                    limit={cardsNumber}
                />
            </div>
            <div className="col-12  d-flex justify-content-center">
                <button
                    className="btn-cta white"
                    onClick={() => getRandomNumber()}
                >
                    randomizer
                </button>
            </div>
        </>
    );
}

if (document.getElementById("randomizer")) {
    ReactDOM.render(<Randomizer />, document.getElementById("randomizer"));
}
