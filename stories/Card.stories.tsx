import type { Meta, StoryObj } from "@storybook/react";
import MyCard from '../components/Card';
import { ImageSourcePropType } from 'react-native';

const meta: Meta<typeof MyCard> = {
  component: MyCard,
  title: 'Components/MyCard',
  argTypes: {
    backgroundColor: { control: 'color' },
    titleColor: { control: 'color' },
    descriptionColor: { control: 'color' },
    borderRadius: { control: 'number' },
    padding: { control: 'number' },
    shadow: { control: 'boolean' },
    image: { control: 'file' },
  },
} satisfies Meta<typeof MyCard>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    title: 'Default',
    description: 'This card has Default styles applied.',
    backgroundColor: '#f0f0f0',
    titleColor: '#333',
    descriptionColor: '#999',
    borderRadius: 16,
    padding: 24,
    shadow: true,
    image: { uri: 'https://via.placeholder.com/150' } as ImageSourcePropType,
  },
};

export const NoImage: Story = {
  args: {
    title: 'Card Without Image',
    description: 'This card does not have an image.',
    backgroundColor: '#f0f0f0',
    titleColor: '#333',
    descriptionColor: '#999',
    borderRadius: 16,
    padding: 24,
    shadow: true,
  },
};


