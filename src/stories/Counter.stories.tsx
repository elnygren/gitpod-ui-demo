import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { CounterComponent } from '../components/Counter';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Example/CounterComponent',
  component: CounterComponent,
} as ComponentMeta<typeof CounterComponent>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof CounterComponent> = (args) => <CounterComponent {...args} />;

export const Counter = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Counter.args = {
  title: 'Storybook Counter',
};
