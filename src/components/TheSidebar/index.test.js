import { render } from '@testing-library/vue';
import TheSidebar from './index';

describe('TheSidebar component', () => {
  it('should render correctly', () => {
    const { html } = render(TheSidebar, { routes: [] });

    expect(html()).toMatchSnapshot();
  });
});
