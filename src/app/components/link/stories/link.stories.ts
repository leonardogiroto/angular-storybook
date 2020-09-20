import { CommonModule } from '@angular/common';
import { moduleMetadata } from '@storybook/angular';
import { Story } from '@storybook/angular/types-6-0';
import { LinkComponent } from '../link.component';
import { withKnobs, text, select } from '@storybook/addon-knobs';

export default {
  title: 'Components/Link',
  component: LinkComponent,
  decorators: [
    moduleMetadata({
      declarations: [LinkComponent],
      imports: [CommonModule],
    }),
    withKnobs,
  ],
};

const Template: Story<LinkComponent> = () => ({
  component: LinkComponent,
  props: {
    color: select('Color', ['primary', 'secondary'] , 'primary'),
    content: text('Text', 'Visit Storybook'),
    href: 'https://storybook.js.org/',
    target: '_blank',
  },
  template: `
    <app-link
      [color]="color"
      [href]="href"
      [target]="target"
    >
      {{ content }}
    </app-link>
  `,
});
export const Examples = Template.bind({});
