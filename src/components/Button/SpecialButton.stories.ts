import { expect } from "@storybook/jest";
import type { Meta, StoryObj } from "@storybook/react";

import SpecialButton from "./SpecialButton";
import { userEvent, within } from "@storybook/testing-library";

const meta = {
  title: "Components/Special Button",
  component: SpecialButton,
  tags: ["autodocs"],
  argTypes: {
    backgroundColor: { control: "color" },
  },
} satisfies Meta<typeof SpecialButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

// export const Clicking: Story = {};

// Clicking.play = async ({ canvasElement }) => {
//   const canvas = within(canvasElement);

//   const button = canvas.getByTestId("button-with-dynamic-label");

//   expect(button).toHaveTextContent("Press me!");

//   userEvent.click(button);

//   await within(button).findByText("Press me again!");
// };
