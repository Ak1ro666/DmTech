import cn from '@/shared/lib/classNames/classNames';

describe('classNames', () => {
    test('with one param', () => {
        expect(cn('red')).toBe('red');
    });
    test('with undefined mods', () => {
        const expected = 'red white';
        expect(
            cn('red', {
                black: undefined,
                white: true,
            }),
        ).toBe(expected);
    });
    test('with false mods', () => {
        const expected = 'red white';
        expect(
            cn('red', {
                black: false,
                white: true,
            }),
        ).toBe(expected);
    });
    test('with undefined additional', () => {
        const expected = 'red green white';
        expect(
            cn(
                'red',
                {
                    black: false,
                    white: true,
                },
                [undefined, 'green'],
            ),
        ).toBe(expected);
    });
});
