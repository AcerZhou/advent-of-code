import { testInput } from './input';
import { partOne, partTwo } from './index';

describe('day 2 test', () => {
    test('sanctity check', () => {
        expect(true).toBe(true);
    });
    test('PartOne should return 2', () => {
        let result = partOne(testInput);
        expect(result).toBe(2);
    });
    test('PartTwo should return 1', () => {
        let result = partTwo(testInput);
        expect(result).toBe(1);
    });

});