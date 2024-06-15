import React from 'react';
import { View, Text, Switch, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Ionicons from 'react-native-vector-icons/Ionicons';

const VideoCallScreen = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionicons name="arrow-back" size={24} color="black" />
        </TouchableOpacity>
      </View>
      <View style={styles.meetingIdContainer}>
        <Text style={styles.meetingIdText}>MEETING ID</Text>
        <View style={styles.iconsContainer}>
          <Image source={require('../assets/camra1.png')} style={styles.icon} />
          <Switch style={styles.switch} />
          <Image source={require('../assets/mic.png')} style={styles.icon} />
          <Switch style={styles.switch} />
        </View>
      </View>
      <View style={styles.videoContainer} />
      <View style={styles.footer}>
        <TouchableOpacity >
          <Image source={require('../assets/addmember.png')} style={styles.footerIcon} />
        </TouchableOpacity>
        <TouchableOpacity>
          <Image source={require('../assets/link.png')} style={styles.footerIcon} />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Image source={require('../assets/endcall.png')} style={styles.footerIcon} />
        </TouchableOpacity>
        <TouchableOpacity>
          <Image source={require('../assets/goto.png')} style={styles.footerIcon} />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('Sendtext')}>
          <Image source={require('../assets/text.png')} style={styles.footerIcon} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F8F8F8',
  },
  header: {
    padding: 16,
    flexDirection: 'row',
    alignItems: 'center',
  },
  meetingIdContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 10,
    paddingVertical: 5,
    justifyContent: 'space-between',
  },
  meetingIdText: {
    fontSize: 16,
    borderColor: '#000000',
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    paddingVertical: 5,
  },
  iconsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  icon: {
    width: 28,
    height: 28,
    marginHorizontal: 5,
  },
  switch: {
    marginLeft: 10,
  },
  videoContainer: {
    flex: 1,
    backgroundColor: '#333333',
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    padding: 16,
    backgroundColor: '#FFFFFF',
  },
  footerIcon: {
    width: 32,
    height: 32,
  },
});

export default VideoCallScreen;
