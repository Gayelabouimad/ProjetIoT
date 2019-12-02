import * as WebBrowser from 'expo-web-browser';
import React, { Component } from 'react';
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


// [
//   {"_id":"5dd64d081c9d440000b6e497","NumSalle":"SCI08","Date":"2018-12-31T22:00:00.000Z","NbHours":1.5,"Consumption":2.3},
//   {"_id":"5de27f8e1c9d4400005140a7","NumSalle":"SCI18","Date":"2018-12-31T22:00:00.000Z","NbHours":1.5,"Consumption":2.3}
// ]

export default class HomeScreen extends Component {
  constructor() {
    super();
    this.state = {
      classrooms: []
    };
  }
  async componentWillMount() {
    const classrooms = await getClassrooms();
    if (classrooms) {
      this.setState({ classrooms })
    }
  }
  render() {
    return (
      <View style={styles.container}>
        <ScrollView
          contentContainerStyle={styles.contentContainer}>
          <View>
            <Text style={styles.Welcome}>
              Welcome to campus dashboard
            </Text>
          </View>
          <View style={{ margin: 15 }}>
            <Text style={{fontSize: 20}}>
              The list below describes the state of each room on campus
            </Text>
            <View style={styles.cardShadow }>
              {this.state.classrooms.map((item, key) => {
                return (
                  <View key={key} style={styles.row}>
                    <Text style={styles.text}>
                      {item["NumSalle"]} ({item["NbLampes"]} Lampes)
                    </Text>
                    {
                      (item['isOn'])?
                      <Text style={[styles.text ,{color: 'green'}]}>ON</Text>
                      :
                      <Text style={[styles.text ,{color: 'red'}]}>OFF</Text>
                    }
                  </View>
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
    textAlign: 'center'
  },
  text: {
    fontSize: 16
  },
  row: { 
    flexDirection: "row", 
    justifyContent: 'space-between', 
    margin: 10,
    padding: 5,
    borderBottomColor: "#DCDCDC",
    borderBottomWidth: 1
  },
  // CardContainer: {
  //   flex: 1,
  //   flexDirection: 'column',
  //   marginHorizontal: 15,
  //   marginVertical: 10,
  // },
  cardShadow: {
    backgroundColor: 'white',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 6,
    },
    shadowOpacity: 0.39,
    shadowRadius: 8.3,
    elevation: 13,
    borderRadius: 5,
    marginVertical: 15
  },
});
