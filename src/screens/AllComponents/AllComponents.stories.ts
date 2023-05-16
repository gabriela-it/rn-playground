import { expect } from "@storybook/jest";
import type { Meta, StoryObj } from "@storybook/react";

import AllComponents from "./AllComponents";
import { userEvent, within } from "@storybook/testing-library";

const meta = {
  title: "Screens/All Components",
  component: AllComponents,
  tags: ["autodocs"],
  argTypes: {
    backgroundColor: { control: "color" },
  },
} satisfies Meta<typeof AllComponents>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
