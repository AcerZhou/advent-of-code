import { testInput } from './input';
import { partOne, partTwo } from './index';

describe('day 1 test', () => {
    test('sanctity check', () => {
        expect(true).toBe(true);
    });
    test('PartOne should return 514579', () => {
        let result = partOne(testInput);
        expect(result).toBe(514579);
    });
    test('PartTwo should return 241861950', () => {
        let result = partTwo(testInput);
        expect(result).toBe(241861950);
    });

});