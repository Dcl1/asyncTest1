/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TextInput,
  AsyncStorage,
  TouchableHighlight
} from 'react-native';


var asyncTest1 = React.createClass({
 
    componentDidMount: function() {
        AsyncStorage.getItem("myKey").then((value) => {
            this.setState({"myKey": value});
        }).done();
    },
 
    getInitialState: function() {
        return {
          inputText: '',
          myKey: ''
        };
    },

    submit: function(iT){

        this.saveData(iT)
    },
 
    render: function() {
        return (
            <View style={styles.container}>
                <Text style={styles.saved}>
                    {this.state.myKey}
                </Text>
                <View>
                    <TextInput
                        style={styles.formInput}
                        onSubmitEditing={() => this.submit(this.state.inputText)}
                        onChangeText={(text) => this.setState({inputText: text}) }
                        value={this.state.inputText} />
                </View>
                <Text style={styles.instructions}>
                    Type something into the text box.  It will be saved to
                    device storage.  Next time you open the application, the saved data
                    will still exist.
                </Text>
            </View>
        );
    },
 
    saveData: function(value) {
        console.log(value);
        AsyncStorage.setItem("myKey", value);
        this.setState({"myKey": value});
    }
 
});
 
var styles = StyleSheet.create({
    container: {
        padding: 30,
        flex: 1,
        justifyContent: "center",
        alignItems: "stretch",
        backgroundColor: "#F5FCFF",
    },
    formInput: {
        flex: 1,
        height: 26,
        fontSize: 13,
        borderWidth: 1,
        borderColor: "#555555",
    },
    saved: {
        fontSize: 20,
        textAlign: "center",
        margin: 10,
    },
    instructions: {
        textAlign: "center",
        color: "#333333",
        marginBottom: 5,
        marginTop: 5,
    },
});





AppRegistry.registerComponent('asyncTest1', () => asyncTest1);








