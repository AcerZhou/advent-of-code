import { day3Input } from './input';

export const partOne = (input) => {
    let step: number = 3;

    let numberOfTrees: number = 0;

    for (let index = 0; index < input.length; index++) {
        const element = input[index];

        const lengthOfRow = element.length;

        const currentStep = index * step;

        const position = currentStep % lengthOfRow;

        const charAtCurrentPosition = element[position];

        if (charAtCurrentPosition === '#') {
            numberOfTrees++;
        }
    }

    return numberOfTrees;
};

export const partTwo = (input) => {
    let steps = [
        [1, 1],
        [1, 3],
        [1, 5],
        [1, 7],
        [2, 1],
    ];

    let numberOfTrees: number = 0;

    let numberOfTreesForAllSteps: any = [];

    for (let i = 0; i < steps.length; i++) {
        const step = steps[i];
        numberOfTrees = 0;

        for (let index = 0; index < input.length; index = index + step[0]) {
            const element = input[index];

            const lengthOfRow = element.length;

            const currentStep = Math.floor(index / step[0]) * step[1];

            const position = currentStep % lengthOfRow;

            const charAtCurrentPosition = element[position];

            if (charAtCurrentPosition === '#') {
                numberOfTrees++;
            }
        }

        numberOfTreesForAllSteps.push(numberOfTrees);
    }

    console.log(numberOfTreesForAllSteps);

    let result: number = calculateResult(numberOfTreesForAllSteps);

    return result;

};

function calculateResult(numberOfTreesForAllSteps: any) {
    let result: number = 0;

    for (let index = 0; index < numberOfTreesForAllSteps.length; index++) {
        const element = numberOfTreesForAllSteps[index];
        if (index === 0) {
            result = element;
        } else {
            result = element * result;
        }

    }
    return result;
}


console.log('part 1 result:');
console.log(partOne(day3Input));

console.log('part 2 result:');
console.log(partTwo(day3Input));