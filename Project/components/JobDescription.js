//Job Description
import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, TextInput, Image } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

const Jobdescription = () => {
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
              <Text style={styles.inputTitle}>Job Description</Text>
            </View>
          </View>
          <TextInput 
            style={styles.input} 
            placeholder=" Write Job Description e.g., Describe the key responsibilities of the job..." 
            placeholderTextColor="#888"
            multiline={true}
          />
          <TextInput 
            style={styles.input2} 
            placeholder="Provide a detailed description of the job role..." 
            placeholderTextColor="#888"
            multiline={true}
          />
          <View style={styles.imageRow}>
            <TouchableOpacity onPress={() => {}}>
              <Image source={require('../assets/bold.png')} style={styles.smallIcon} />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => {}}>
              <Image source={require('../assets/italien.png')} style={styles.smallIcon} />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => {}}>
              <Image source={require('../assets/underline.png')} style={styles.smallIcon} />
            </TouchableOpacity>
          </View>
          <View style={styles.container2}>
              <Text style={styles.header2}>Guidance Tips</Text>
              <View style={styles.bulletContainer}>
                <View style={styles.bulletPoint}></View>
                <Text style={styles.bulletText}>Highlight responsibilities.</Text>
              </View>
              <View style={styles.bulletContainer}>
                <View style={styles.bulletPoint}></View>
                <Text style={styles.bulletText}>Specify qualifications. </Text>
              </View>
              <View style={styles.bulletContainer}>
                <View style={styles.bulletPoint}></View>
                <Text style={styles.bulletText}> Include soft skills.</Text>
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
    alignItems: 'center'
  },
  input: {
    backgroundColor: '#F5F5F5',
    padding: 10,
    borderRadius: 10,
    marginBottom: 16,
    marginLeft: 10,
    marginRight:10,
    color: '#000',
    height: '15%'
  },
    input2: {
    backgroundColor: '#F5F5F5',
    padding: 10,
    borderRadius: 10,
    marginBottom: 16,
    marginLeft: 10,
    marginRight:10,
    color: '#000',
  },
  imageRow: {
    flexDirection: 'row',
    marginLeft: 10,
  },
  smallIcon: {
    marginLeft: 5,

  },
  buttonRow: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 60,
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
  buttonText: {
    color: '#000',
    fontSize: 16,
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

export default Jobdescription;
