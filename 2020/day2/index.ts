import { day2Input } from './input';

export const partOne = (input) => {
    let n: number = 0;

    for (let i = 0; i < input.length; i++) {
        const str: any = input[i][3];
        const c: any = input[i][2];

        let count = (str.match(new RegExp(c, "g")) || []).length;

        if (count >= input[i][0] && count <= input[i][1]) {
            n++;
        }
    }

    return n;
}

export const partTwo = (input) => {
    let result2: number = 0;
    for (let i = 0; i < input.length; i++) {
        const first: number = +input[i][0] - 1;
        const second: number = +input[i][1] - 1;

        const str: any = input[i][3];
        const c: any = input[i][2];

        const charAtFirstLocation = str.charAt(first);
        const charAtSecondLocation = str.charAt(second);

        if (charAtFirstLocation === c && charAtSecondLocation === c) {
            continue;
        }

        if (charAtFirstLocation === c || charAtSecondLocation === c) {
            result2++;
        }
    }

    return result2;
}

console.log('part 1 result:');
console.log(partOne(day2Input));

console.log('part 2 result:');
console.log(partTwo(day2Input));