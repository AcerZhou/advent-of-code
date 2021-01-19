import { readInput } from './input';
import { partOne, partTwo } from './index';

describe('day 3 test', () => {
    test('PartOne should return 2', async () => {
        const input = await readInput('./part1TestInput');
        let result = partOne(input);
        expect(result).toBe(2);
    });
    test('PartTwo should return 0', async () => {
        const input = await readInput('./part2TestInput1');
        let result = partTwo(input);
        expect(result).toBe(0);
    });
    test('PartTwo should return 4', async () => {
        const input = await readInput('./part2TestInput2');
        console.log(input);
        let result = partTwo(input);
        expect(result).toBe(4);
    });
});