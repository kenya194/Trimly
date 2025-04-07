import {createNativeStackNavigator} from "@react-navigation/native-stack";
import { NavigationContainer } from '@react-navigation/native';

// Import all screens
import WelcomeScreen from "./screens/welcomeScreen";
import Adminlogin from "./screens/adminLogin";
import ClientLogin from "./screens/clientLogin";
import AdminSignup from "./screens/adminSignup";
import ClientSignup from "./screens/clientSignup";
import LoginSelection from "./screens/loginSelection";
import AppointmentForm from "./screens/appointmentForm";
import BookedAppointments from "./screens/bookedAppointments";
import Trial from "./screens/trial";

const Stack = createNativeStackNavigator();

export default function App() {
  
  return (
    <NavigationContainer>
      <Stack.Navigator 
        initialRouteName="Welcome" 
        screenOptions={{
          headerShown: false,
          animation: 'slide_from_right',
          contentStyle: { backgroundColor: '#fcf9f1' },
        }}
      >
        {/* Welcome Screen */}
        <Stack.Screen 
          name="Welcome" 
          component={WelcomeScreen}
        />

        {/* Authentication Screens */}
        <Stack.Screen 
          name="LoginSelection" 
          component={LoginSelection}
        />
        <Stack.Screen 
          name="adminLogin" 
          component={Adminlogin}
        />
        <Stack.Screen 
          name="clientLogin" 
          component={ClientLogin}
        />
        <Stack.Screen 
          name="adminSignup" 
          component={AdminSignup}
        />
        <Stack.Screen 
          name="clientSignup" 
          component={ClientSignup}
        />

        {/* Main App Screens */}
        <Stack.Screen 
          name="Trial" 
          component={Trial}
        />
        <Stack.Screen 
          name="appointmentForm" 
          component={AppointmentForm}
          options={{
            headerShown: true,
            title: 'Book Appointment',
            headerStyle: {
              backgroundColor: '#492a17',
            },
            headerTintColor: '#fcf9f1',
            headerTitleStyle: {
              fontWeight: '600',
            },
          }}
        />
        <Stack.Screen 
          name="bookedAppointments" 
          component={BookedAppointments}
          options={{
            headerShown: true,
            title: 'Appointments',
            headerStyle: {
              backgroundColor: '#492a17',
            },
            headerTintColor: '#fcf9f1',
            headerTitleStyle: {
              fontWeight: '600',
            },
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}


