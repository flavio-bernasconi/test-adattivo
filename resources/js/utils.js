export function areArrayEqual(arrayOne, arrayTwo) {
    var are_same =
        arrayOne.length === arrayTwo.length &&
        arrayOne.every(function(element, index) {
            return element === arrayTwo[index];
        });

    return are_same;
}

export function randomInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
