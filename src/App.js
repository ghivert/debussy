import { StatusBar } from 'expo-status-bar'
import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import * as Svg from 'react-native-svg'

const pink = 'rgb(213, 85, 120)'
const white = 'rgb(255, 255, 255)'
const darkPink = 'rgb(190, 97, 188)'
const darkerPink = 'rgb(166, 61, 76)'

const App = () => (
  <View style={styles.container}>
    <StatusBar style="inverted" />
    <Svg.Svg height="200" width="200">
      <Svg.Rect x="0" y="0" width="200" height="200" fill={white} />
      <Svg.G fill={white}>
        <Svg.Circle cx="50" cy="50" r="22" fill={pink} />
        <Svg.Circle cx="50" cy="50" r="10" fill={white} />
        <Svg.Circle cx="50" cy="50" r="8" fill={pink} />
        <Svg.Circle cx="50" cy="50" r="5" fill={white} />
        <Svg.Circle cx="63" cy="55" r="2" fill={white} />
        <Svg.Rect
          rotation="50"
          x="68"
          y="2"
          width="5"
          height="13"
          fill={white}
        />
        <Svg.G>
          <Svg.Rect
            rotation="50"
            x="68"
            y="-34"
            width="5"
            height="20"
            fill={white}
          />
          <Svg.Rect
            rotation="50"
            x="66"
            y="-34"
            width="10"
            height="12"
            fill={darkPink}
            rx="2"
            ry="2"
          />
        </Svg.G>
      </Svg.G>
    </Svg.Svg>
  </View>
)

export default App

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#303030',
    alignItems: 'center',
    justifyContent: 'center',
  },
})
