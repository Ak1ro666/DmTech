import { render, screen } from '@testing-library/react';
import { Button } from './Button';
import { ButtonTheme } from './Button.props';

describe('Button', () => {
    test('Test with render', () => {
        render(<Button>TEST</Button>);
        expect(screen.getByText('TEST')).toBeInTheDocument();
    });
    test('Test with clear theme', () => {
        render(<Button theme={ButtonTheme.CLEAR}>TEST</Button>);
        expect(screen.getByText('TEST')).toHaveClass('clear');
    });
});
