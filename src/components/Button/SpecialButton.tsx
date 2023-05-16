import React from "react";
import { Button } from "react-native";
import colors from "../../tokens/colors";

const ButtonWithDynamicLabel = () => {
  const [buttonText, setButtonText] = React.useState("Press me!");

  return (
    <Button
      testID="button-with-dynamic-label"
      title={buttonText}
      color={colors.primary}
      onPress={() => {
        setButtonText("Press me again!");
      }}
    />
  );
};

export default ButtonWithDynamicLabel;
