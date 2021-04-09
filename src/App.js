import { StatusBar } from 'expo-status-bar'
import React, { useRef, useEffect, useState } from 'react'
import {
  StyleSheet,
  SafeAreaView,
  Text,
  View,
  Animated,
  Button,
  Image,
  Easing,
} from 'react-native'
import * as Svg from 'react-native-svg'
import theWall from '../covers/the-wall.jpg'

const pink = 'rgb(213, 85, 120)'
const white = 'rgb(255, 255, 255)'
const darkPink = 'rgb(190, 97, 188)'
const darkerPink = 'rgb(166, 61, 76)'

const xml = `
<svg width="294px" height="285px" viewBox="0 0 294 285" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
    <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
        <g id="Mechanical-Arm" transform="translate(0.944195, 0.000000)">
            <g id="Group" transform="translate(173.055805, 4.000000)">
                <circle id="Oval" stroke="#B4324A" stroke-width="3" fill="#E64977" cx="60" cy="60" r="58.5"></circle>
                <circle id="Oval" fill="#FFFFFF" cx="60" cy="60" r="24"></circle>
                <circle id="Oval" fill="#E64977" cx="60.5" cy="60.5" r="17.5"></circle>
                <circle id="Oval" fill="#FFFFFF" cx="60.5" cy="60.5" r="12.5"></circle>
            </g>
            <rect id="Rectangle" fill="#FFFFFF" transform="translate(261.055805, 31.000000) rotate(40.000000) translate(-261.055805, -31.000000) " x="252.055805" y="7" width="18" height="48"></rect>
            <rect id="Rectangle" fill="#FFFFFF" transform="translate(206.055805, 97.000000) rotate(40.000000) translate(-206.055805, -97.000000) " x="197.055805" y="73" width="18" height="48"></rect>
            <rect id="Rectangle" fill="#CC5A75" transform="translate(268.818515, 21.502251) rotate(40.000000) translate(-268.818515, -21.502251) " x="256.818515" y="3.50225129" width="24" height="36" rx="2"></rect>
            <path d="M245.833914,32.566934 L269.833914,32.566934 L269.833914,34.3332753 L269.833914,34.566934 C269.833914,35.6715035 268.938483,36.566934 267.833914,36.566934 L266.611997,36.566934 L266.611997,36.566934 L248.939968,36.566934 L247.833914,36.566934 C246.729344,36.566934 245.833914,35.6715035 245.833914,34.566934 L245.833914,34.4127857 L245.833914,34.4127857 L245.833914,32.566934 Z" id="Rectangle" fill="#B4334A" transform="translate(257.833914, 34.566934) rotate(40.000000) translate(-257.833914, -34.566934) "></path>
            <circle id="Oval" fill="#FFFFFF" cx="261.055805" cy="92" r="5"></circle>
            <path d="M188.255805,105 L173.072244,123.030479 C172.536425,123.666763 172.167822,124.426677 171.999827,125.241377 L155.971575,202.971053 L155.971575,202.971053 C153.949107,211.767346 150.643851,218.776995 146.055805,224 C141.467759,229.223005 133.926277,233.043363 123.431357,235.461074 L33.0558051,257 L37.0558051,272 L140.559116,247.029954 C149.769241,243.935264 156.601471,240.258612 161.055805,236 C165.510139,231.741388 168.659813,225.86009 170.504828,218.356106 L188.009663,133.197447 C188.171376,132.410736 188.520227,131.674557 189.026694,131.051213 L201.255805,116 L201.255805,116 L188.255805,105 Z" id="Path" stroke="#E64977" fill="#E64977"></path>
            <path d="M58.0558051,253.5 C58.746161,253.5 59.371161,253.779822 59.823572,254.232233 C60.2759831,254.684644 60.5558051,255.309644 60.5558051,256 L60.5558051,256 L60.5558051,275 C60.5558051,275.690356 60.2759831,276.315356 59.823572,276.767767 C59.371161,277.220178 58.746161,277.5 58.0558051,277.5 L58.0558051,277.5 L8.05580509,277.5 C6.53702203,277.5 5.16202203,276.884392 4.16671779,275.889087 C3.17141356,274.893783 2.55580509,273.518783 2.55580509,272 L2.55580509,272 L2.55580509,259 C2.55580509,257.481217 3.17141356,256.106217 4.16671779,255.110913 C5.16202203,254.115608 6.53702203,253.5 8.05580509,253.5 L8.05580509,253.5 Z" id="Rectangle" stroke="#B4324A" fill="#E64977" transform="translate(31.555805, 265.500000) rotate(-13.000000) translate(-31.555805, -265.500000) "></path>
            <rect id="Rectangle" fill="#FFFFFF" transform="translate(73.984831, 255.162035) rotate(-13.500000) translate(-73.984831, -255.162035) " x="71.9848305" y="246.962035" width="4" height="16.4"></rect>
            <g id="Group-2" transform="translate(29.119880, 266.562378) rotate(-13.000000) translate(-29.119880, -266.562378) translate(19.119880, 260.562378)" fill="#FFFFFF">
                <rect id="Rectangle" x="0" y="0" width="20" height="3" rx="1.5"></rect>
                <rect id="Rectangle-Copy" x="0" y="9" width="20" height="3" rx="1.5"></rect>
            </g>
        </g>
    </g>
</svg>
`

const useAnimation = ({ playing, ...props }) => {
  const value = useRef(new Animated.Value(0)).current
  useEffect(() => {
    const options = { duration: 750, useNativeDriver: false }
    const run = v => Animated.timing(value, { ...options, toValue: v }).start()
    run(playing ? 0.3 : 0)
  }, [playing])
  const inputRange = [0, 0.25, 0.5, 0.75, 1]
  const inter = outputRange => value.interpolate({ inputRange, outputRange })
  const rotate = inter(['-30deg', '-15deg', '0deg', '10deg', '20deg'])
  const top = inter(
    [1, -8.5, -22, -33, -45.5].map(t => {
      return t + (props.top ?? 0)
    })
  )
  const left = inter(
    [0, -19, -34.5, -43, -49].map(t => {
      return t + (props.left ?? 0)
    })
  )
  return { rotate, top, left }
}

const MechanicalArm = props => {
  const { rotate, top, left } = useAnimation(props)
  const style_ = { position: 'absolute', top, left, transform: [{ rotate }] }
  return (
    <Animated.View style={style_}>
      <Svg.SvgXml xml={xml} width="200" height="200" />
    </Animated.View>
  )
}

const AnimatedPlayer = ({ playing }) => {
  const value = useRef(new Animated.Value(0)).current
  const anim = useRef()
  useEffect(() => {
    if (playing) {
      anim.current = Animated.loop(
        Animated.timing(value, {
          duration: 3000,
          toValue: 1,
          useNativeDriver: false,
          easing: Easing.linear,
        })
      )
      anim.current.start()
    } else {
      anim.current?.stop()
      Animated.timing(value, {
        duration: 3000,
        toValue: 1,
        useNativeDriver: false,
        easing: Easing.linear,
      }).start()
    }
  }, [playing])
  const rotate = value.interpolate({
    inputRange: [0, 1],
    outputRange: ['0deg', '360deg'],
  })
  return (
    <View>
      <Animated.View style={{ transform: [{ rotate }] }}>
        <Image source={theWall} style={styles.cover} />
        <View style={styles.holeWrapper}>
          <View style={styles.holeHugeLine}>
            <View style={styles.holeLine}>
              <View style={styles.holeSmallLine}>
                <View style={styles.coverHole} />
              </View>
            </View>
          </View>
        </View>
      </Animated.View>
      <MechanicalArm playing={playing} left={150} />
    </View>
  )
}

const App = () => {
  const [playing, setPlaying] = useState(false)
  return (
    <View style={styles.container}>
      <StatusBar style="inverted" />
      <SafeAreaView style={styles.container}>
        <AnimatedPlayer playing={playing} />
        <View style={{ padding: 40 }} />
        <Button title="Meh" onPress={() => setPlaying(p => !p)} />
      </SafeAreaView>
    </View>
  )
}

export default App

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#303030',
    alignItems: 'center',
    justifyContent: 'center',
  },
  cover: {
    borderRadius: 2000,
    width: 250,
    height: 250,
  },
  holeWrapper: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  holeLine: {
    padding: 15,
    borderRadius: 1000,
    borderColor: '#909090',
    borderWidth: 1,
  },
  holeSmallLine: {
    padding: 60,
    borderRadius: 1000,
    borderColor: '#909090',
    borderWidth: 1,
  },
  holeHugeLine: {
    padding: 15,
    borderRadius: 1000,
    borderColor: '#909090',
    borderWidth: 1,
  },
  coverHole: {
    width: 30,
    height: 30,
    borderRadius: 15,
    backgroundColor: '#303030',
  },
})
