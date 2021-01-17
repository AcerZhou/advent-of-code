import { day1Input } from './input';

day1Input.sort((a, b) => a - b);

let hashTable = {};

day1Input.forEach(i => {
    hashTable[i] = i;
});

let result: number[] = [];

day1Input.forEach(i => {
    let first = 2020 - i;

    day1Input.forEach(j => {
        let second = first - j;
        if (hashTable[second] && result.indexOf(i) === -1) {
            result.push(i);
            result.push(j);
            result.push(second);
        }
    })
});

console.log(JSON.stringify(result));

