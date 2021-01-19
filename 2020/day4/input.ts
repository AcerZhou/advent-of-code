import * as fs from 'fs';
import * as path from 'path';

export const readInput = async (file) => {
    const originalData = fs.readFileSync(path.join(__dirname, file), 'utf8');

    const data: any = originalData.split("\n\n");

    let input = [];

    data.forEach(entry => {
        const entryReplacedAllEnter = entry.replaceAll("\n", " ");
        const keyAndValuePairs = entryReplacedAllEnter.split(" ");
        let inputObject: object = {};
        keyAndValuePairs.forEach(keyAndValue => {
            const key = keyAndValue.split(":")[0];
            const value = keyAndValue.split(":")[1];

            inputObject[key] = value;
        });
        input.push(inputObject);
    });

    return input;
};