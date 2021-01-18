import { day1Input } from './input';

export const partOne = (input) => {
    let hashTable = createHashTable(input);

    let result: number[] = [];

    input.forEach(i => {
        let first = 2020 - i;

        if (hashTable[first] && result.indexOf(i) === -1) {
            result.push(i);
            result.push(first);
        }
    });

    console.log(result);

    let finalResult: number = calculateFinalResult(result);

    return finalResult;
};

export const partTwo = (input) => {
    let hashTable = createHashTable(input);

    let result: number[] = [];

    input.forEach(i => {
        let first = 2020 - i;

        input.forEach(j => {
            let second = first - j;
            if (hashTable[second] && result.indexOf(i) === -1) {
                result.push(i);
                result.push(j);
                result.push(second);
            }
        })
    });

    console.log(result);

    let finalResult: number = calculateFinalResult(result);

    return finalResult;
};

console.log('Part 1 result should be:');

console.log(partOne(day1Input));

console.log('Part 2 result should be:');

console.log(partTwo(day1Input));


function createHashTable(input: any) {
    let hashTable = {};

    input.forEach(i => {
        hashTable[i] = i;
    });
    return hashTable;
}

function calculateFinalResult(result: number[]) {
    let finalResult = 0;
    for (let i = 0; i < result.length; i++) {
        const element = result[i];
        if (finalResult === 0) {
            finalResult = element;
        } else {
            finalResult = finalResult * element;
        }
    }
    return finalResult;
}
