import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/FontAwesome';

const LoginSelection = () => {
  const navigation = useNavigation();

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity
          style={styles.backButton}
          onPress={() => navigation.goBack()}
        >
          <Icon name="arrow-left" size={24} color="#492a17" />
        </TouchableOpacity>
        <Text style={styles.title}>Choose Login Type</Text>
        <Text style={styles.subtitle}>Select your account type to continue</Text>
      </View>

      <View style={styles.content}>
        <TouchableOpacity
          style={[styles.optionCard, styles.adminCard]}
          onPress={() => navigation.navigate('adminLogin')}
        >
          <View style={styles.iconContainer}>
            <Icon name="user-shield" size={40} color="#fcf9f1" />
          </View>
          <View style={styles.textContainer}>
            <Text style={styles.optionTitle}>Admin Login</Text>
            <Text style={styles.optionDescription}>Access your barbershop management dashboard</Text>
          </View>
          <Icon name="chevron-right" size={24} color="#fcf9f1" />
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.optionCard, styles.clientCard]}
          onPress={() => navigation.navigate('clientLogin')}
        >
          <View style={styles.iconContainer}>
            <Icon name="user" size={40} color="#fcf9f1" />
          </View>
          <View style={styles.textContainer}>
            <Text style={styles.optionTitle}>Client Login</Text>
            <Text style={styles.optionDescription}>Book appointments and manage your profile</Text>
          </View>
          <Icon name="chevron-right" size={24} color="#fcf9f1" />
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fcf9f1',
  },
  header: {
    padding: 20,
    backgroundColor: '#fcf9f1',
    borderBottomWidth: 1,
    borderBottomColor: '#d1cec6',
  },
  backButton: {
    padding: 10,
    marginBottom: 10,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#492a17',
    marginBottom: 5,
  },
  subtitle: {
    fontSize: 16,
    color: '#496756',
  },
  content: {
    padding: 20,
    gap: 20,
  },
  optionCard: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 20,
    borderRadius: 12,
    elevation: 5,
    shadowColor: '#492a17',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
  adminCard: {
    backgroundColor: '#492a17',
  },
  clientCard: {
    backgroundColor: '#496756',
  },
  iconContainer: {
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 15,
  },
  textContainer: {
    flex: 1,
  },
  optionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#fcf9f1',
    marginBottom: 5,
  },
  optionDescription: {
    fontSize: 14,
    color: '#fcf9f1',
    opacity: 0.9,
  },
});

export default LoginSelection; 