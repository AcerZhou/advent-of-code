import { readInput } from './input';
import { partOne, partTwo } from './index';

describe('day 6 test', () => {
    test('Given testInput1 When Run PartOne should return 11', async () => {
        let input = await readInput('./part1TestInput');
        let result = partOne(input);
        expect(result).toBe(11);
    });
    test('Given testInput1 When Run PartTwo should return 11', async () => {
        let input = await readInput('./part1TestInput');
        let result = partTwo(input);
        expect(result).toBe(6);
    });
});