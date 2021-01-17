import { testInput } from './input';
import { PartOne, PartTwo } from './index';

describe('day 1 test', () => {
    test('sanctity check', () => {
        expect(true).toBe(true);
    });
    test('PartOne should return 514579', () => {
        let result = PartOne(testInput);
        expect(result).toBe(514579);
    });
    test('PartTwo should return 241861950', () => {
        let result = PartTwo(testInput);
        expect(result).toBe(241861950);
    });

});