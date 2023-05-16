import React from "react";
import { View } from "react-native";
import QuestionnaireNode from "../QuestionnaireNode/QuestionnaireNode";
import questionnaire from "../Questionnaire/myQuestionnaire.json";

export type QuestionnaireType = any;

const Questionnaire = ({
  questionnaire,
}: {
  questionnaire: QuestionnaireType;
}) => {
  console.log(Object.values(questionnaire.nodes));
  return (
    <View>
      {Object.values(questionnaire.nodes).map((node: any) => (
        <View key={node.id}>
          <QuestionnaireNode key={node.id} node={node} />
        </View>
      ))}
    </View>
  );
};

export default Questionnaire;
