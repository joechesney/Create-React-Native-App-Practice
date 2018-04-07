import React from 'react';
import { Appegistry, Image, StyleSheet, Text, View, TextInput } from 'react-native';

export default class App extends React.Component {
  render() {
    let pic = {
      uri: 'http://lorempixel.com/400/200/cats/'
    };
    return (
      <View style={styles.container}>
        <Text>Chupstown</Text>
        <TextInput/>
        <Text>Jabroni Face</Text>
        <Image source={pic} style={{width: 400, height: 200}}/>
        <Chups skriz="Super Ultra Chupssseezzzz!" pic="http://lorempixel.com/400/200/animals/"></Chups>
      </View>
      
    );
  }
}
class Chups extends React.Component {
  render() {
    return (
      <View>
        <Text> {this.props.skriz}</Text>
        <Image source={{uri: this.props.pic}} style={{width: 400, height: 200}}/>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
