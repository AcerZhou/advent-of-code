import { readInput } from './input';
import { calculateSeatId, partTwo } from './index';

describe('day 3 test', () => {
    test('Given FBFBBFFRLR When Run PartOne should return 357', async () => {
        let result = calculateSeatId('FBFBBFFRLR');
        expect(result).toBe(357);
    });
    test('Given BFFFBBFRRR When Run PartOne should return 567', async () => {
        let result = calculateSeatId('BFFFBBFRRR');
        expect(result).toBe(567);
    });
    test('Given FFFBBBFRRR When Run PartOne should return 119', async () => {
        let result = calculateSeatId('FFFBBBFRRR');
        expect(result).toBe(119);
    });
    test('Given BBFFBBFRLL When Run PartOne should return 820', async () => {
        let result = calculateSeatId('BBFFBBFRLL');
        expect(result).toBe(820);
    });

    // test('PartTwo should return 0', async () => {
    //     const input = await readInput('./part2TestInput1');
    //     let result = partTwo(input);
    //     expect(result).toBe(0);
    // });
    // test('PartTwo should return 4', async () => {
    //     const input = await readInput('./part2TestInput2');
    //     console.log(input);
    //     let result = partTwo(input);
    //     expect(result).toBe(4);
    // });
});