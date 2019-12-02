import React, { Component } from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import {
  LineChart,
  BarChart,
  PieChart,
} from "react-native-chart-kit";
import { Dimensions } from "react-native";

export default class StatsScreen extends Component {
  render() {
    const data = {
      labels: ["January", "February", "March", "April", "May", "June"],
      datasets: [
        {
          data: [20, 45, 28, 80, 99, 43],
          color: () => `rgba(0, 0, 0, 1)`, // optional
          strokeWidth: 2 // optional
        }
      ]
    };
    const screenWidth = Dimensions.get("window").width - 30;
    const chartConfig = {
      backgroundGradientFrom: "white",
      backgroundGradientTo: "white",
      color: () => `rgb(0, 0, 0)`,
      labelColor: () => `rgba(0, 0, 0, 1)`,
      barPercentage: 0.5,
    };
    return (
      <ScrollView style={styles.container}>
        <Text style={{ fontSize: 20, alignContent: 'center', margin: 20 }}>
          Line Chart
          </Text>
        <View style={styles.cardShadow}>
          <LineChart
            data={data}
            width={screenWidth}
            height={300}
            chartConfig={chartConfig}
            style={{
              marginleft: 10,
              marginRight: 10,
            }}
          />
        </View>

      </ScrollView>
    );
  }

}

StatsScreen.navigationOptions = {
  title: 'Stats',
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
    backgroundColor: '#fff',
  },
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
    paddingHorizontal : 5,
    paddingTop: 10,
    margin: 15,
    marginBottom: 25

  },
});
