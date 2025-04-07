import React, { useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Animated } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/FontAwesome';

const WelcomeScreen = () => {
  const navigation = useNavigation();
  const fadeAnim = new Animated.Value(0);
  const slideAnim = new Animated.Value(50);
  const scaleAnim = new Animated.Value(0.8);

  useEffect(() => {
    Animated.parallel([
      Animated.timing(fadeAnim, {
        toValue: 1,
        duration: 1000,
        useNativeDriver: true,
      }),
      Animated.timing(slideAnim, {
        toValue: 0,
        duration: 800,
        useNativeDriver: true,
      }),
      Animated.spring(scaleAnim, {
        toValue: 1,
        friction: 8,
        tension: 40,
        useNativeDriver: true,
      }),
    ]).start();
  }, []);

  const handleLogin = () => {
    navigation.navigate('LoginSelection');
  };

  return (
    <View style={styles.container}>
      <Animated.View style={[
        styles.contentContainer,
        {
          opacity: fadeAnim,
          transform: [
            { translateY: slideAnim },
            { scale: scaleAnim }
          ],
        },
      ]}>
        <View style={styles.logoContainer}>
          <View style={styles.logoCircle}>
            <Icon name="scissors" size={60} color="#fcf9f1" />
          </View>
          <Text style={styles.title}>Trimly</Text>
        </View>
        <Text style={styles.subtitle}>Your Premium Grooming Experience</Text>
        
        <View style={styles.buttonContainer}>
          <TouchableOpacity
            style={[styles.button, styles.adminButton]}
            onPress={() => navigation.navigate('adminSignup')}
            activeOpacity={0.8}
          >
            <Icon name="user-shield" size={20} color="#fcf9f1" style={styles.buttonIcon} />
            <Text style={styles.buttonText}>Sign Up as Admin</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={[styles.button, styles.clientButton]}
            onPress={() => navigation.navigate('clientSignup')}
            activeOpacity={0.8}
          >
            <Icon name="user" size={20} color="#fcf9f1" style={styles.buttonIcon} />
            <Text style={styles.buttonText}>Sign Up as Client</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={[styles.button, styles.loginButton]}
            onPress={handleLogin}
            activeOpacity={0.8}
          >
            <Icon name="sign-in" size={20} color="#492a17" style={styles.buttonIcon} />
            <Text style={[styles.buttonText, styles.loginButtonText]}>Login</Text>
          </TouchableOpacity>
        </View>
      </Animated.View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#492a17',
    padding: 20,
  },
  contentContainer: {
    alignItems: 'center',
    width: '100%',
  },
  logoContainer: {
    alignItems: 'center',
    marginBottom: 20,
  },
  logoCircle: {
    width: 120,
    height: 120,
    borderRadius: 60,
    backgroundColor: '#496756',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 15,
    elevation: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.3,
    shadowRadius: 6,
  },
  title: {
    fontSize: 48,
    fontWeight: 'bold',
    color: '#fcf9f1',
    marginBottom: 10,
    textAlign: 'center',
    textShadowColor: 'rgba(73, 42, 23, 0.75)',
    textShadowOffset: { width: -1, height: 1 },
    textShadowRadius: 10,
    letterSpacing: 2,
  },
  subtitle: {
    fontSize: 18,
    color: '#fcf9f1',
    marginBottom: 40,
    textAlign: 'center',
    textShadowColor: 'rgba(73, 42, 23, 0.75)',
    textShadowOffset: { width: -1, height: 1 },
    textShadowRadius: 5,
    letterSpacing: 1,
  },
  buttonContainer: {
    width: '100%',
    maxWidth: 300,
    gap: 20,
  },
  button: {
    padding: 15,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    elevation: 5,
    shadowColor: '#492a17',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
  buttonIcon: {
    marginRight: 10,
  },
  adminButton: {
    backgroundColor: '#492a17',
    borderWidth: 2,
    borderColor: '#496756',
  },
  clientButton: {
    backgroundColor: '#496756',
    borderWidth: 2,
    borderColor: '#492a17',
  },
  loginButton: {
    backgroundColor: '#d1cec6',
    borderWidth: 2,
    borderColor: '#492a17',
  },
  buttonText: {
    color: '#fcf9f1',
    fontSize: 16,
    fontWeight: 'bold',
    textTransform: 'uppercase',
    letterSpacing: 1,
  },
  loginButtonText: {
    color: '#492a17',
  },
});

export default WelcomeScreen; 