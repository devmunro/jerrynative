import type { Meta, StoryObj } from "@storybook/react";
import { MyButton } from "../components/Button";

const meta: Meta<typeof MyButton> = {
  component: MyButton,
  title: 'Components/MyButton', 
  argTypes: {
    onPress: { action: 'pressed' }, 
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

export const Long: Story = {
  args: {
    text: 'Long Button',
    variant: 'long',
  },
};