import { componentRender } from '@/shared/lib/tests/componentRender/componentRender';
import { AppLink, AppLinkTheme } from '@/shared/ui/AppLink';
import { screen } from '@testing-library/dom';

describe('AppLink', () => {
    test('Test render', () => {
        componentRender(<AppLink to="/">TEST</AppLink>);
        expect(screen.getByText('TEST')).toBeInTheDocument();
    });
    test('Test primary theme', () => {
        componentRender(
            <AppLink theme={AppLinkTheme.PRIMARY} to="/">
                TEST
            </AppLink>,
        );
        expect(screen.getByText('TEST')).toHaveClass('primary');
    });
});
