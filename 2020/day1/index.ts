import { day1Input } from './input';

export const PartOne = (input) => {
    input.sort((a, b) => a - b);

    let hashTable = {};

    input.forEach(i => {
        hashTable[i] = i;
    });

    let result: number[] = [];

    input.forEach(i => {
        let first = 2020 - i;

        if (hashTable[first] && result.indexOf(i) === -1) {
            result.push(i);
            result.push(first);
        }
    });

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
};

export const PartTwo = (input) => {
    input.sort((a, b) => a - b);

    let hashTable = {};

    input.forEach(i => {
        hashTable[i] = i;
    });

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
};

console.log('Part 1 result should be:');

console.log(PartOne(day1Input));

console.log('Part 2 result should be:');

console.log(PartTwo(day1Input));