import { render } from '@testing-library/vue';
import SidebarButton from './index';

describe('SidebarButton component', () => {
  it('should render correctly', () => {
    const { html } = render(SidebarButton, { props: { text: 'button' } });

    expect(html()).toMatchSnapshot();
  });
});
