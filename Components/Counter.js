import React from "react";
import { StyleSheet, Text, View, Button } from "react-native";

export default class Counter extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      counter: 0
    };
  }

  render() {
    return (
      <View style={styles.container}>
        <Button title="−" onPress={this._handleDecrement} />
        <Text style={styles.counterText}>
          {this.props.name}: {this.state.counter}
        </Text>
        <Button title="＋" onPress={this._handleIncrement} />
      </View>
    );
  }

  _handleIncrement = () => {
    this.setState({ counter: this.state.counter + 1 });
  };

  _handleDecrement = () => {
    this.setState({ counter: this.state.counter - 1 });
  };
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row"
  },
  counterText: {
    fontSize: 25
  }
});
