import React, { useEffect, useState } from "react";
import { areArrayEqual } from "../utils";
import { SingleCard } from "./SingleCard";

export function ListCards({ dataset, randomNumbers, limit }) {
    return (
        <>
            {randomNumbers.length === limit &&
                randomNumbers.map((n, i) => (
                    <SingleCard key={i} info={dataset[n]} />
                ))}
        </>
    );
}
