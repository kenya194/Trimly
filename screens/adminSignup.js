import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  ScrollView,
  Alert,
  ActivityIndicator,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/FontAwesome';

const AdminSignup = () => {
  const navigation = useNavigation();
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    shopName: '',
    ownerName: '',
    email: '',
    phone: '',
    address: '',
    password: '',
    confirmPassword: '',
  });

  const handleSignup = async () => {
    if (!formData.shopName || !formData.ownerName || !formData.email || 
        !formData.phone || !formData.address || !formData.password || 
        !formData.confirmPassword) {
      Alert.alert('Error', 'Please fill in all required fields');
      return;
    }

    if (formData.password !== formData.confirmPassword) {
      Alert.alert('Error', 'Passwords do not match');
      return;
    }

    setLoading(true);
    try {
      await new Promise(resolve => setTimeout(resolve, 1500));
      Alert.alert('Success', 'Account created successfully!', [
        { text: 'OK', onPress: () => navigation.navigate('AdminLogin') }
      ]);
    } catch (error) {
      Alert.alert('Error', 'Failed to create account. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const handleSocialLogin = (platform) => {
    // TODO: Implement social login logic
    Alert.alert('Coming Soon', `${platform} login will be available soon!`);
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity
          style={styles.backButton}
          onPress={() => navigation.goBack()}
        >
          <Icon name="arrow-left" size={24} color="#492a17" />
        </TouchableOpacity>
        <Text style={styles.title}>Admin Signup</Text>
        <Text style={styles.subtitle}>Create your barbershop account</Text>
      </View>

      <View style={styles.form}>
        <View style={styles.inputGroup}>
          <Text style={styles.label}>Shop Name *</Text>
          <View style={styles.inputContainer}>
            <Icon name="building" size={20} color="#492a17" style={styles.inputIcon} />
            <TextInput
              style={styles.input}
              placeholder="Enter your shop name"
              placeholderTextColor="#d1cec6"
              value={formData.shopName}
              onChangeText={(text) => setFormData({ ...formData, shopName: text })}
              autoCapitalize="words"
            />
          </View>
        </View>

        <View style={styles.inputGroup}>
          <Text style={styles.label}>Owner Name *</Text>
          <View style={styles.inputContainer}>
            <Icon name="user" size={20} color="#492a17" style={styles.inputIcon} />
            <TextInput
              style={styles.input}
              placeholder="Enter owner's full name"
              placeholderTextColor="#d1cec6"
              value={formData.ownerName}
              onChangeText={(text) => setFormData({ ...formData, ownerName: text })}
              autoCapitalize="words"
            />
          </View>
        </View>

        <View style={styles.inputGroup}>
          <Text style={styles.label}>Email Address *</Text>
          <View style={styles.inputContainer}>
            <Icon name="envelope" size={20} color="#492a17" style={styles.inputIcon} />
            <TextInput
              style={styles.input}
              placeholder="Enter your email"
              placeholderTextColor="#d1cec6"
              value={formData.email}
              onChangeText={(text) => setFormData({ ...formData, email: text })}
              keyboardType="email-address"
              autoCapitalize="none"
            />
          </View>
        </View>

        <View style={styles.inputGroup}>
          <Text style={styles.label}>Phone Number *</Text>
          <View style={styles.inputContainer}>
            <Icon name="phone" size={20} color="#492a17" style={styles.inputIcon} />
            <TextInput
              style={styles.input}
              placeholder="Enter your phone number"
              placeholderTextColor="#d1cec6"
              value={formData.phone}
              onChangeText={(text) => setFormData({ ...formData, phone: text })}
              keyboardType="phone-pad"
            />
          </View>
        </View>

        <View style={styles.inputGroup}>
          <Text style={styles.label}>Shop Address *</Text>
          <View style={styles.inputContainer}>
            <Icon name="map-marker" size={20} color="#492a17" style={styles.inputIcon} />
            <TextInput
              style={styles.input}
              placeholder="Enter your shop address"
              placeholderTextColor="#d1cec6"
              value={formData.address}
              onChangeText={(text) => setFormData({ ...formData, address: text })}
              autoCapitalize="words"
            />
          </View>
        </View>

        <View style={styles.inputGroup}>
          <Text style={styles.label}>Password *</Text>
          <View style={styles.inputContainer}>
            <Icon name="lock" size={20} color="#492a17" style={styles.inputIcon} />
            <TextInput
              style={styles.input}
              placeholder="Create a password"
              placeholderTextColor="#d1cec6"
              value={formData.password}
              onChangeText={(text) => setFormData({ ...formData, password: text })}
              secureTextEntry
            />
          </View>
        </View>

        <View style={styles.inputGroup}>
          <Text style={styles.label}>Confirm Password *</Text>
          <View style={styles.inputContainer}>
            <Icon name="lock" size={20} color="#492a17" style={styles.inputIcon} />
            <TextInput
              style={styles.input}
              placeholder="Confirm your password"
              placeholderTextColor="#d1cec6"
              value={formData.confirmPassword}
              onChangeText={(text) => setFormData({ ...formData, confirmPassword: text })}
              secureTextEntry
            />
          </View>
        </View>

        <TouchableOpacity
          style={styles.signupButton}
          onPress={handleSignup}
          disabled={loading}
        >
          {loading ? (
            <ActivityIndicator color="#fcf9f1" />
          ) : (
            <Text style={styles.signupButtonText}>Create Account</Text>
          )}
        </TouchableOpacity>

        <View style={styles.loginContainer}>
          <Text style={styles.loginText}>Already have an account? </Text>
          <TouchableOpacity onPress={() => navigation.navigate('AdminLogin')}>
            <Text style={styles.loginLink}>Login</Text>
          </TouchableOpacity>
        </View>
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
  form: {
    padding: 20,
  },
  inputGroup: {
    marginBottom: 20,
  },
  label: {
    fontSize: 16,
    fontWeight: '600',
    color: '#492a17',
    marginBottom: 8,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#d1cec6',
    borderRadius: 8,
    paddingHorizontal: 15,
    backgroundColor: '#ffffff',
  },
  inputIcon: {
    marginRight: 10,
  },
  input: {
    flex: 1,
    paddingVertical: 12,
    fontSize: 16,
    color: '#492a17',
  },
  signupButton: {
    backgroundColor: '#492a17',
    padding: 15,
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 20,
    elevation: 5,
    shadowColor: '#492a17',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
  signupButtonText: {
    color: '#fcf9f1',
    fontSize: 16,
    fontWeight: 'bold',
    textTransform: 'uppercase',
  },
  loginContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
  },
  loginText: {
    color: '#496756',
    fontSize: 14,
  },
  loginLink: {
    color: '#492a17',
    fontSize: 14,
    fontWeight: 'bold',
  },
});

export default AdminSignup; 