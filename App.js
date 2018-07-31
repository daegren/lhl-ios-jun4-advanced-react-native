import React from "react";
import { StyleSheet, Text, View, Button, TextInput } from "react-native";
import Counter from "./Components/Counter";
import uuid from "uuid/v4";

export default class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      counters: [{ id: uuid(), name: "Dogs" }],
      text: ""
    };
  }

  render() {
    return (
      <View style={styles.container}>
        <View>
          <Text>Manage Counters</Text>
          <TextInput
            onChangeText={text => this.setState({ text })}
            value={this.state.text}
            style={styles.textInput}
          />
          <View style={styles.headerButtons}>
            <Button title="Add" onPress={this._addCounter} />
            <Button title="Remove" onPress={this._removeCounter} />
          </View>
        </View>
        <View>{this._renderCounters()}</View>
      </View>
    );
  }

  _renderCounters = () => {
    return this.state.counters.map(c => <Counter key={c.id} name={c.name} />);
  };

  _addCounter = () => {
    if (this.state.text) {
      const newCounter = {
        id: uuid(),
        name: this.state.text
      };

      this.setState(prevState => {
        return {
          ...prevState,
          counters: prevState.counters.concat(newCounter),
          text: ""
        };
      });
    }
  };

  _removeCounter = () => {
    this.setState({
      counters: this.state.counters.slice(0, this.state.counters.length - 1)
    });
  };
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  },
  headerButtons: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center"
  },
  textInput: {
    height: 40,
    borderColor: "#aaa",
    borderWidth: 1
  }
});
