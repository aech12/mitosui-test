import type { Meta, StoryObj } from "@storybook/react";
import Input from "../final-components/react/Input";

const meta: Meta<typeof Input> = {
  component: Input,
  title: "Input",
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Input>;

export const Default = {
  args: {},
};

export const WithState: Story = {
  args: {
    value: "Storybook"
  }
};
