import { readInput } from './input';

export const partOne = (input) => {
    let resultArray = [];

    let cleanedInput = [];
    input.forEach(element => {
        let li = element.split('\n').join('');
        cleanedInput.push(li);
    });

    cleanedInput.forEach(element => {
        let uniqChars = [];
        for (let index = 0; index < element.length; index++) {
            const char = element[index];
            if (uniqChars.indexOf(char) === -1) {
                uniqChars.push(char);
            }

        }
        resultArray.push(uniqChars.length);
    });

    let result = 0;
    resultArray.forEach(element => {
        result = result + element;
    });

    return result;
};

readInput('./day6Input').then(result => {
    console.log('Part One result is:');
    console.log(partOne(result));
})


export const partTwo = (input) => {
    let resultArray = [];

    input.forEach(element => {
        let lis = element.split('\n');
        let sharedAnswer = {};

        if (lis.length === 1) {
            resultArray.push(lis[0].length);
        } else {
            lis.forEach(li => {
                for (let index = 0; index < li.length; index++) {
                    const char = li[index];
                    if (sharedAnswer[char]) {
                        sharedAnswer[char]++;
                    } else {
                        sharedAnswer[char] = 1;
                    }
                }
            });
            let result = 0;
            for (const [key, value] of Object.entries(sharedAnswer)) {
                if (value === lis.length) {
                    result++;
                }
            }
            resultArray.push(result);
        }

    });

    let result = 0;
    resultArray.forEach(element => {
        result = result + element;
    });

    return result;
};

readInput('./day6Input').then(result => {
    console.log('Part Two result is:');
    console.log(partTwo(result));
})





