//Job Salary
import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, TextInput, Image } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

const JobSalary = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack('PostJob')}>
          <Ionicons name="arrow-back" size={24} color="black" />
        </TouchableOpacity>
        <View style={styles.indicator}></View>
      </View>
      <View style={styles.outerCard}>
        <View style={styles.innerCard}>
          <Text style={styles.title}>Job Details</Text>
          <View style={styles.row}>
            <Image source={require('../assets/man.png')} style={styles.icon}/>
            <View style={styles.inputContainer}>
              <Text style={styles.inputTitle}>Job Salary</Text>
            </View>
          </View>
          <View style={styles.header3}>
            <Text style={styles.title2}>Salary Range</Text>
          </View>
          <TextInput 
            style={styles.input} 
            placeholder=" (e.g., Min: 20000, Max: 70000)" 
            placeholderTextColor="#888"
            multiline={true}
          />
          <View style={styles.header3}>
            <Text style={styles.title2}>Currency</Text>
          </View>
          <TextInput 
            style={styles.input2} 
            placeholder="(e.g., USD, EUR, GBP)" 
            placeholderTextColor="#888"
            multiline={true}
          />
           <View style={styles.container2}>
              <Text style={styles.header2}>Guidance Tips</Text>
              <View style={styles.bulletContainer}>
                <View style={styles.bulletPoint}></View>
                <Text style={styles.bulletText}>Provide a realistic range</Text>
              </View>
              <View style={styles.bulletContainer}>
                <View style={styles.bulletPoint}></View>
                <Text style={styles.bulletText}>Include bonuses/benefits</Text>
              </View>
          </View>
          <View style={styles.buttonRow}>
            <TouchableOpacity style={styles.saveButton} onPress={() => navigation.navigate('PostJob')}>
              <Text style={styles.buttonText}>Save</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.cancelButton} onPress={() => navigation.goBack('PostJob')}>
              <Text style={styles.buttonText}>Cancel</Text>
            </TouchableOpacity>
          </View>
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
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 16,
    alignSelf: 'center',
    alignContent: 'center',
    backgroundColor: '#F5F5F5',
    padding: 10,
    borderRadius: 10,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
  },
  icon: {
    width: 60,
    height: 60,
  },
 header3: {
    fontSize: 16,
    fontWeight: 'bold',
    // marginBottom: 8,
    fontStyle: 'InriaSerif',
    marginLeft: 10,
    
  },
  title2:{
    fontSize: 20,
    // padding: 10,
    // borderRadius: 10,
    fontWeight: 'bold',
  },
  inputContainer: {
    flex: 1,
    marginLeft: 16,
  },
  inputTitle: {
    backgroundColor: '#F5F5F5',
    padding: 10,
    borderRadius: 10,
    fontSize: 16,
    fontWeight: 'bold',
  },
  input: {
    backgroundColor: '#F5F5F5',
    padding: 5,
    borderRadius: 10,
    marginBottom: 8,
    marginLeft: 10,
    marginRight:10,
    color: '#000',
    height: '10%'
  },
    input2: {
    backgroundColor: '#F5F5F5',
    padding: 10,
    borderRadius: 10,
    marginBottom: 8,
    marginLeft: 10,
    marginRight:10,
    color: '#000',
  },
  buttonRow: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop : 75
  },
  saveButton: {
    borderColor: '#00FB0A',
    borderWidth: 2,
    backgroundColor: '#FFFFFF',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 10,
    shadowColor: "#000", // color of the shadow
      shadowOffset: {
          width: 0, // horizontal distance of shadow
          height: 2, // vertical distance of shadow
      },
      shadowOpacity: 0.25, // transparency of shadow
      shadowRadius: 3.84, // blur radius of shadow
      elevation: 5, // for Android shadow
  },
  cancelButton: {
    borderColor: '#00DBF9',
    borderWidth: 2,
    backgroundColor: '#FFFFFF',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 10,
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
    color: '#000',
    fontSize: 16,
  },
  container2: {
    marginTop: 15
  },
  header2: {
    fontSize: 16,
    fontWeight: 'bold',
    // marginBottom: 8,
    fontStyle: 'InriaSerif',
    marginLeft: 30,
    
  },
  bulletContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    // marginBottom: ,
    marginLeft: 40
  },
  bulletPoint: {
    width: 6,
    height: 6,
    borderRadius: 4,
    backgroundColor: '#000',
    marginRight: 8,
  },
  bulletText: {
    fontSize: 14,
    fontStyle: 'InriaSerif'
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

export default JobSalary;
