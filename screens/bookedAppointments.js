import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  Alert,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/FontAwesome';

const BookedAppointments = () => {
  const navigation = useNavigation();

  // Mock data for appointments
  const appointments = [
    {
      id: 1,
      name: 'John Doe',
      date: '2024-03-25',
      time: '10:00 AM',
      service: 'Haircut & Beard Trim',
      status: 'confirmed',
    },
    {
      id: 2,
      name: 'Jane Smith',
      date: '2024-03-25',
      time: '2:30 PM',
      service: 'Haircut',
      status: 'pending',
    },
    {
      id: 3,
      name: 'Mike Johnson',
      date: '2024-03-26',
      time: '11:00 AM',
      service: 'Beard Trim',
      status: 'confirmed',
    },
  ];

  const handleCancelAppointment = (id) => {
    Alert.alert(
      'Cancel Appointment',
      'Are you sure you want to cancel this appointment?',
      [
        {
          text: 'No',
          style: 'cancel',
        },
        {
          text: 'Yes',
          onPress: () => {
            Alert.alert('Success', 'Appointment cancelled successfully');
          },
        },
      ]
    );
  };

  const getStatusColor = (status) => {
    switch (status) {
      case 'confirmed':
        return '#496756';
      case 'pending':
        return '#492a17';
      default:
        return '#d1cec6';
    }
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
        <Text style={styles.title}>Booked Appointments</Text>
        <Text style={styles.subtitle}>Manage your upcoming appointments</Text>
      </View>

      <View style={styles.content}>
        {appointments.map((appointment) => (
          <View key={appointment.id} style={styles.appointmentCard}>
            <View style={styles.appointmentHeader}>
              <View style={styles.clientInfo}>
                <Icon name="user" size={24} color="#492a17" />
                <Text style={styles.clientName}>{appointment.name}</Text>
              </View>
              <View style={[styles.statusBadge, { backgroundColor: getStatusColor(appointment.status) }]}>
                <Text style={styles.statusText}>{appointment.status}</Text>
              </View>
            </View>

            <View style={styles.appointmentDetails}>
              <View style={styles.detailRow}>
                <Icon name="calendar" size={16} color="#496756" />
                <Text style={styles.detailText}>{appointment.date}</Text>
              </View>
              <View style={styles.detailRow}>
                <Icon name="clock-o" size={16} color="#496756" />
                <Text style={styles.detailText}>{appointment.time}</Text>
              </View>
              <View style={styles.detailRow}>
                <Icon name="scissors" size={16} color="#496756" />
                <Text style={styles.detailText}>{appointment.service}</Text>
              </View>
            </View>

            <View style={styles.actionButtons}>
              <TouchableOpacity
                style={[styles.actionButton, styles.editButton]}
                onPress={() => Alert.alert('Coming Soon', 'Edit feature will be available soon!')}
              >
                <Icon name="edit" size={16} color="#492a17" />
                <Text style={[styles.actionButtonText, styles.editButtonText]}>Edit</Text>
              </TouchableOpacity>

              <TouchableOpacity
                style={[styles.actionButton, styles.cancelButton]}
                onPress={() => handleCancelAppointment(appointment.id)}
              >
                <Icon name="times" size={16} color="#fcf9f1" />
                <Text style={[styles.actionButtonText, styles.cancelButtonText]}>Cancel</Text>
              </TouchableOpacity>
            </View>
          </View>
        ))}
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
  appointmentCard: {
    backgroundColor: '#ffffff',
    borderRadius: 12,
    padding: 20,
    elevation: 5,
    shadowColor: '#492a17',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
  appointmentHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 15,
  },
  clientInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },
  clientName: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#492a17',
  },
  statusBadge: {
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 20,
  },
  statusText: {
    color: '#fcf9f1',
    fontSize: 12,
    fontWeight: 'bold',
    textTransform: 'capitalize',
  },
  appointmentDetails: {
    gap: 10,
    marginBottom: 15,
  },
  detailRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },
  detailText: {
    fontSize: 14,
    color: '#496756',
  },
  actionButtons: {
    flexDirection: 'row',
    gap: 10,
  },
  actionButton: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
    borderRadius: 8,
    gap: 8,
  },
  editButton: {
    backgroundColor: '#fcf9f1',
    borderWidth: 1,
    borderColor: '#492a17',
  },
  cancelButton: {
    backgroundColor: '#492a17',
  },
  actionButtonText: {
    fontSize: 14,
    fontWeight: 'bold',
    textTransform: 'uppercase',
  },
  editButtonText: {
    color: '#492a17',
  },
  cancelButtonText: {
    color: '#fcf9f1',
  },
});

export default BookedAppointments;