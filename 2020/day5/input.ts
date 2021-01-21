import * as fs from 'fs';
import * as path from 'path';

export const readInput = async (file) => {
    const originalData = fs.readFileSync(path.join(__dirname, file), 'utf8');

    const input = originalData.split("\n");

    return input;
};