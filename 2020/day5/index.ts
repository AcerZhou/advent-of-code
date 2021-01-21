import { readInput } from './input';

let allNumbers = {};

export const partOne = async () => {
    var input = await readInput('./day5Input');

    let result: number = 0;

    input.forEach(entry => {
        let seatId = calculateSeatId(entry);
        allNumbers[seatId] = seatId;
        if (result < seatId) {
            result = seatId;
            console.log(entry, seatId);
        }
    });
    return result;
};

console.log('Part One result is:');
partOne().then(result => console.log(result));

const getPosition = (element, input) => {
    if (element === 'F') {
        input.end = Math.floor((input.start + input.end) / 2);
    }

    if (element === 'B') {
        input.start = Math.ceil((input.start + input.end) / 2);
    }

    if (element === 'L') {
        input.end = Math.floor((input.start + input.end) / 2);
    }

    if (element === 'R') {
        input.start = Math.ceil((input.start + input.end) / 2);
    }
}

export const calculateSeatId = (input: any) => {
    let rowStart: number = 0;
    let rowEnd: number = 127;
    let row = { start: rowStart, end: rowEnd };

    let columnStart: number = 0;
    let columnEnd: number = 7;
    let column = { start: columnStart, end: columnEnd };

    let rowMap = input.slice(0, 7);
    let columnMap = input.slice(7, 10);

    for (let i = 0; i < rowMap.length; i++) {
        const element = rowMap[i];
        getPosition(element, row);
    }

    for (let i = 0; i < columnMap.length; i++) {
        const element = columnMap[i];
        getPosition(element, column);
    }

    return row.end * 8 + column.end;
}


export const partTwo = () => {
    for (let index = 20; index < 987; index++) {
        if (!allNumbers[index] && allNumbers[index - 1] && allNumbers[index + 1]) {
            return index;
        }

    }
};


console.log('Part One result is:');
partOne().then(result => {
    console.log(result);
    console.log('Part Two result is:');
    console.log(partTwo());
});


