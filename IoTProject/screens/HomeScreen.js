import * as WebBrowser from 'expo-web-browser';
import React, {Component} from 'react';
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import getClassrooms from '../services/APICalls';

export default class HomeScreen extends Component {
  constructor() {
    super();
    this.state = { 
      classrooms: [] 
    };
  }
async componentWillMount(){
  const classrooms = await getClassrooms();
  console.log("----------",classrooms);

  // if(classrooms){
    this.setState({classrooms})

  // }
}
render(){
  return (
    <View style={styles.container}>
      <ScrollView
        style={styles.container}
        contentContainerStyle={styles.contentContainer}>
          <View>
            <Text style={styles.Welcome}>
              Welcome to campus dashboard
            </Text>
          </View>
          <View style={{margin: 10}}>
            <Text>
              The list below describes the state of each room on campus
            </Text>
            <View>
            {this.state.classrooms.map((item, key) => {
              return(
              <Text key={key}>
                {item["Name"]}
              </Text>
              );
            })
          }

            </View>
          </View>
      </ScrollView>
    </View>
  );
}
  
}

HomeScreen.navigationOptions = {
  title: 'Home',
};

const styles = StyleSheet.create({
  Welcome: {
    fontSize: 25,
    margin: 20,
    alignSelf:'center'
  }

});
