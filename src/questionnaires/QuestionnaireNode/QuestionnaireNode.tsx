import React from "react";
import { StyleSheet, Text, useWindowDimensions, View } from "react-native";
import RenderHtml from "react-native-render-html";
import { replaceElement } from "domutils";
import { Element } from "domhandler";

export type QuestionnaireNodeType = any;

const fontSizeMap = {
  1: 10,
  2: 13,
  3: 16,
  4: 18,
  5: 24,
  6: 32,
  7: 48,
};

function onElement(element) {
  // <font> is deprecated! https://developer.mozilla.org/en-US/docs/Web/HTML/Element/font
  // => we use styles to set the font size
  if (element.name === "font") {
    const size =
      element.attribs.size >= 1 || element.attribs.size <= 7
        ? element.attribs.size
        : 3;
    const fontSize = fontSizeMap[size];
    const span = new Element(
      "span",
      {
        style: `font-size: ${fontSize}px`,
      },
      element.children
    );
    replaceElement(element, span);
  }

  // if (element.attribs["class"] == "parentDiv") {
  //   let i = 0;
  //   for (const p of element.children) {
  //     if (isTag(p) && i < 1) {
  //       removeElement(p);
  //       i++;
  //     }
  //   }
  // }
}

const domVisitors = {
  onElement: onElement,
};

const QuestionnaireNode = ({
  node,
  textProps,
}: {
  node: QuestionnaireNodeType;
  textProps?: any;
}) => {
  console.log(node);
  const { width } = useWindowDimensions();
  const source = {
    html: node.text,
  };
  return node.headline || node.text ? (
    <View style={styles.node}>
      {node.headline && (
        <Text style={{ ...styles.headline, marginBottom: node.text ? 20 : 0 }}>
          {node.headline}
        </Text>
      )}
      {node.text && <RenderHtml source={source} domVisitors={domVisitors} />}
    </View>
  ) : (
    <></>
  );
};

const styles = StyleSheet.create({
  node: {
    padding: 10,
    borderWidth: 1,
    borderColor: "#ccc",
    borderStyle: "dashed",
    marginBottom: 20,
  },
  headline: {
    fontSize: 18,
  },
});

export default QuestionnaireNode;
