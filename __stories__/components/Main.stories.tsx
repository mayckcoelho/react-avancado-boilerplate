// import { withKnobs, text } from '@storybook/addon-knobs'
import { Story, Meta } from '@storybook/react/types-6-0'

import Main from '../../src/components/Main'

export default {
  title: 'Main',
  component: Main
} as Meta

export const Basic: Story = args => <Main {...args} />
