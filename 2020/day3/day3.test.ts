import { testInput } from './input';
import { partOne, partTwo } from './index';

describe('day 3 test', () => {
    test('sanctity check', () => {
        expect(true).toBe(true);
    });
    test('PartOne should return 7', () => {
        let result = partOne(testInput);
        expect(result).toBe(7);
    });
    test('PartTwo should return 336', () => {
        let result = partTwo(testInput);
        expect(result).toBe(336);
    });

});