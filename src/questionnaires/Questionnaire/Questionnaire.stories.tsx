import { expect } from "@storybook/jest";
import type { Meta, StoryObj } from "@storybook/react";

import SpecialButton from "./Questionnaire";
import { userEvent, within } from "@storybook/testing-library";
import questionnaire from "./myQuestionnaire.json";
import Questionnaire from "./Questionnaire";

const meta = {
  title: "Playground/Questionnaires",
  component: SpecialButton,
  tags: ["autodocs"],
} satisfies Meta<typeof Questionnaire>;

export default meta;
type Story = StoryObj<typeof meta>;

export const MyQuestionnaire: Story = {};
MyQuestionnaire.args = {
  questionnaire: questionnaire,
};

// export const Clicking: Story = {};

// Clicking.play = async ({ canvasElement }) => {
//   const canvas = within(canvasElement);

//   const button = canvas.getByTestId("button-with-dynamic-label");

//   expect(button).toHaveTextContent("Press me!");

//   userEvent.click(button);

//   await within(button).findByText("Press me again!");
// };
