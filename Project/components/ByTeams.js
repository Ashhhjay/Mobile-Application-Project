import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

const TeamButton = ({ teamName, memberCount, dotColors, onPress }) => {
  return (
    <TouchableOpacity style={styles.button} onPress={onPress}>
      <Text style={styles.buttonText}>{teamName}</Text>
      <View style={styles.dotContainer}>
        {dotColors.map((color, index) => (
          <View key={index} style={[styles.dot, { backgroundColor: color }]} />
        ))}
        <Text style={styles.memberCountText}>You and {memberCount} others</Text>
      </View>
    </TouchableOpacity>
  );
};

const ByTeams = () => {
  const navigation = useNavigation();

  const handleTeamPress = (teamName) => {
    navigation.navigate('OpenTeams', { teamName }); // Change 'NextScreen' to the name of your target screen
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionicons name="arrow-back" size={24} color="black" />
        </TouchableOpacity>
        <View style={styles.indicator}></View>
      </View>
      <View style={styles.outerCard}>
        <View style={styles.innerCard}>
          <Text style={styles.header1}>My Teams</Text>
          <TeamButton 
            teamName="Oracle Studios" 
            memberCount={14} 
            dotColors={['#FF0000', '#00FF00', '#0000FF']}
            onPress={() => handleTeamPress('Oracle Studios')}
          />
          <TeamButton 
            teamName="Solutions iNC" 
            memberCount={5} 
            dotColors={['#FF0000', '#00FF00']}
            onPress={() => handleTeamPress('Solutions iNC')}
          />
          <TeamButton 
            teamName="MicroSwiss" 
            memberCount={3} 
            dotColors={['#FF0000']}
            onPress={() => handleTeamPress('MicroSwiss')}
          />
        </View>
      </View>
      <View style={styles.footer}>
        <TouchableOpacity style={styles.footerButton} onPress={() => navigation.navigate('HomeScreen')}>
          <Ionicons name="home" size={24} color="black" />
          <Text>Home</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.footerButton} onPress={() => navigation.navigate('Messages')}>
          <Ionicons name="chatbubbles" size={24} color="black" />
          <Text>Messages</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.footerButton}>
          <Ionicons name="cash" size={24} color="black" />
          <Text>Contracts</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.footerButton}>
          <Ionicons name="notifications" size={24} color="black" />
          <Text>Alerts</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
    marginTop: 30, // Adjusts to account for the notch or status bar
  },
  indicator: {
    backgroundColor: '#00C900',
    height: 12,
    width: 12,
    borderRadius: 30,
    marginLeft: 'auto',
  },
  outerCard: {
    flex: 1,
    margin: 16,
    borderWidth: 6,
    borderColor: '#51EF1A',
    borderRadius: 30,
    backgroundColor: '#8EE4FF',
    justifyContent: 'center',
    alignItems: 'center',
  },
  innerCard: {
    width: '94%',
    height: '97%',
    backgroundColor: '#FFFFFF',
    borderRadius: 15,
    padding: 16,
    justifyContent: 'flex-start', // Ensures content starts from the top
  },
  header1: {
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: 10,
  },
  button: {
    backgroundColor: '#F5F5F5',
    padding: 16,
    borderRadius: 10,
    marginTop: 30,
    shadowColor: "#000", // color of the shadow
    shadowOffset: {
      width: 0, // horizontal distance of shadow
      height: 2, // vertical distance of shadow
    },
    shadowOpacity: 0.25, // transparency of shadow
    shadowRadius: 3.84, // blur radius of shadow
    elevation: 5, // for Android shadow
  },
  buttonText: {
    fontSize: 14,
    color: '#000',
    fontWeight: 'bold',
  },
  dotContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 8,
  },
  dot: {
    width: 10,
    height: 10,
    borderRadius: 5,
    marginRight: 4,
  },
  memberCountText: {
    fontSize: 12,
    color: '#555',
    marginLeft: 8,
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 16,
    borderTopWidth: 1,
    borderColor: '#EEE',
  },
  footerButton: {
    alignItems: 'center',
  },
});

export default ByTeams;
