import type { Meta, StoryObj } from "@storybook/react";
import MyButton from '../components/Button';

const meta: Meta<typeof MyButton> = {
  component: MyButton,
  title: 'Components/MyButton',
  argTypes: {
    backgroundColor: { control: 'color' },
    textColor: { control: 'color' },
    borderRadius: { control: 'number' },
    paddingHorizontal: { control: 'number' },
    paddingVertical: { control: 'number' },
    variant: {
      control: {
        type: 'select',
        options: ['default', 'icon', 'full'],
      },
    },
    width: { control: 'text' },
  },
} satisfies Meta<typeof MyButton>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    text: 'Default Button',
    variant: 'default',
    
  },
};

export const Icon: Story = {
  args: {
    text: 'Icon',
    variant: 'icon',
    
  },
};

export const Full: Story = {
  args: {
    text: 'Full Width Button',
    variant: 'full',
   
  },
};
