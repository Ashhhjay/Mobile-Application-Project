// App.js
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LoginPage from './components/Loginpage';
import Register from './components/Register';
import RegistrationSuccessful from './components/RegistrationSuccessful';
import Landingpage from './components/Landingpage';
import HomeScreen from './components/HomeScreen';
import startmeeting from './components/startmeeting';
import Sendtext from './components/Sendtext';
import PostJob from './components/PostJob';
import JobTitle from './components/JobTitle';
import JobDescription from './components/JobDescription';
import JobSalary from './components/JobSalary';
import Employeinst from './components/Employeinst';
import EmployeType from './components/EmployeType';
import Empexp from './components/Empexp';
import FindJob from './components/FindJob';
import Messages from './components/Messages';
import Searchbyusername from './components/Searchbyusername';
import ByContacts from './components/ByContacts';
import ByTeams from './components/ByTeams';
import OpenTeams from './components/OpenTeams';
import ForgotEmail from './components/ForgotEmial';
import ForgotPassword from './components/ForgotPassword';
const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Login" component={LoginPage} />
        <Stack.Screen name="Register" component={Register} />
        <Stack.Screen name="RegistrationSuccessful" component={RegistrationSuccessful} />
        <Stack.Screen name="Landingpage" component={Landingpage} />
        <Stack.Screen name="HomeScreen" component={HomeScreen} />
        <Stack.Screen name="startmeeting" component={startmeeting} />
        <Stack.Screen name="Sendtext" component={Sendtext} />
        <Stack.Screen name="PostJob" component={PostJob} />
        <Stack.Screen name="JobTitle" component={JobTitle} />
        <Stack.Screen name="JobDescription" component={JobDescription} />
        <Stack.Screen name="JobSalary" component={JobSalary} />
        <Stack.Screen name="Employeinst" component={Employeinst} />
        <Stack.Screen name="EmployeType" component={EmployeType} />
        <Stack.Screen name="Empexp" component={Empexp} />
        <Stack.Screen name="FindJob" component={FindJob} />
        <Stack.Screen name="Messages" component={Messages} />
        <Stack.Screen name="Searchbyusername" component={Searchbyusername} />
        <Stack.Screen name="ByContacts" component={ByContacts} />
        <Stack.Screen name="ByTeams" component={ByTeams} />
        <Stack.Screen name="OpenTeams" component={OpenTeams} />
        <Stack.Screen name="ForgotEmail" component={ForgotEmail} />
        <Stack.Screen name="ForgotPassword" component={ForgotPassword} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
