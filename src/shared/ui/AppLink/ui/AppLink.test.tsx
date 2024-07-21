import { renderWithRouter } from '@/shared/lib/tests/renderWithRouter';
import { AppLink, AppLinkTheme } from '@/shared/ui/AppLink';
import { screen } from '@testing-library/dom';

describe('AppLink', () => {
    test('Test render', () => {
        renderWithRouter(<AppLink to="/">TEST</AppLink>);
        expect(screen.getByText('TEST')).toBeInTheDocument();
    });
    test('Test primary theme', () => {
        renderWithRouter(
            <AppLink theme={AppLinkTheme.PRIMARY} to="/">
                TEST
            </AppLink>,
        );
        expect(screen.getByText('TEST')).toHaveClass('primary');
    });
});
