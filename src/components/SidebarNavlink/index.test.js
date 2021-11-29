import { render } from '@testing-library/vue';
import SidebarNavLink from './index';

describe('SidebarNavLink component', () => {
  it('should render correctly', () => {
    const { html } = render(SidebarNavLink, {
      props: { title: 'Link', path: '/path' },
      routes: [],
    });

    expect(html()).toMatchSnapshot();
  });
});
