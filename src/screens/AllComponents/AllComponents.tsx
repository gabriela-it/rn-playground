import React from "react";
import { StatusBar } from "expo-status-bar";
import {
  Alert,
  Button,
  Image,
  ScrollView,
  StyleSheet,
  Switch,
  Text,
  TextInput,
  View,
} from "react-native";
import colors from "../../tokens/colors";
import Questionnaire from "../../questionnaires/Questionnaire/Questionnaire";
import myQuestionnaire from "../../questionnaires/Questionnaire/myQuestionnaire.json";

const logoSource = require("../../../assets/doccla-logo.png");

const AllComponents = () => {
  const [value, setValue] = React.useState("");
  const [valueMultiline, setValueMultiline] = React.useState("");
  const [switchValue, setSwitchValue] = React.useState(false);

  return (
    <ScrollView style={styles.container}>
      <View style={styles.section}>
        <Text style={styles.label}>Image</Text>
        <Image source={logoSource} style={styles.image} />
      </View>
      <View style={styles.section}>
        <Text style={styles.label}>Text</Text>
        <Text>Text</Text>
      </View>
      <View style={styles.section}>
        <Text style={styles.label}>TextInput</Text>
        <TextInput
          style={styles.textInput}
          value={value}
          onChangeText={(value) => setValue(value)}
          placeholder="Text Input"
          autoCapitalize="none"
        />
      </View>
      <View style={styles.section}>
        <Text style={styles.label}>TextInput multiline</Text>
        <TextInput
          style={styles.textInputMultiline}
          multiline
          numberOfLines={4} // Android
          value={valueMultiline}
          onChangeText={(value) => setValueMultiline(value)}
          placeholder="Text Input multiline"
          autoCapitalize="none"
        />
      </View>
      <View style={styles.section}>
        <Text style={styles.label}>ScrollView</Text>
        <ScrollView style={styles.scrollView}>
          <Text style={styles.scrollViewText}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere est
            corporis, nisi cupiditate aliquam cum odio molestiae libero officia,
            impedit unde voluptate ab aut reprehenderit. Suscipit facilis itaque
            sapiente quibusdam! Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Facere est corporis, nisi cupiditate aliquam cum
            odio molestiae libero officia, impedit unde voluptate ab aut
            reprehenderit. Suscipit facilis itaque sapiente quibusdam! Lorem
            ipsum dolor sit amet consectetur adipisicing elit. Facere est
            corporis, nisi cupiditate aliquam cum odio molestiae libero officia,
            impedit unde voluptate ab aut reprehenderit. Suscipit facilis itaque
            sapiente quibusdam! Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Facere est corporis, nisi cupiditate aliquam cum
            odio molestiae libero officia, impedit unde voluptate ab aut
            reprehenderit. Suscipit facilis itaque sapiente quibusdam!
          </Text>
        </ScrollView>
      </View>
      <View style={styles.section}>
        <Text style={styles.label}>Button</Text>
        <Button
          title="Press me!"
          color={colors.primary}
          onPress={() => {
            Alert.alert("Simple Button pressed");
          }}
        />
      </View>
      <View style={styles.section}>
        <Text style={styles.label}>Switch</Text>
        <View style={styles.switchContainer}>
          <Switch
            style={styles.switch}
            // trackColor={{ false: "#767577", true: "#81b0ff" }}
            // thumbColor={switchValue ? "#f5dd4b" : "#f4f3f4"}
            // ios_backgroundColor="#3e3e3e"
            onValueChange={() => setSwitchValue(!switchValue)}
            value={switchValue}
          />
        </View>
      </View>
      <Questionnaire questionnaire={myQuestionnaire} />
      <StatusBar style="auto" />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 50,
    padding: 10,
  },
  section: {
    padding: 5,
    borderWidth: 1,
    borderColor: "#ccc",
    borderStyle: "dashed",
    marginBottom: 20,
  },
  label: {
    color: colors.danger,
    marginBottom: 10,
  },
  image: {
    width: 300,
    height: 70,
  },
  textInput: {
    height: 40,
    borderWidth: 1,
    borderColor: "#ccc",
    padding: 10,
  },
  textInputMultiline: {
    textAlignVertical: "top", // Android
  },
  scrollView: {
    height: 100,
    paddingRight: 10,
  },
  scrollViewText: {},
  button: {
    backgroundColor: colors.primary,
  },
  switchContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-start",
  },
  switch: {},
});

export default AllComponents;
