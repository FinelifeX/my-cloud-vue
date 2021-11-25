import { render } from '@testing-library/vue';
import SidebarButton from './SidebarButton.vue';

describe('SidebarButton component', () => {
  it('should render correctly', () => {
    const { html } = render(SidebarButton, { props: { text: 'button' } });

    expect(html()).toMatchSnapshot();
  });
});
