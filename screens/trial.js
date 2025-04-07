import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  ScrollView,
  Dimensions,
  Pressable,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/FontAwesome';

const { height } = Dimensions.get('window');

const Trial = () => {
  const navigation = useNavigation();

  const handleClose = () => {
    navigation.goBack();
  };

  const handleProceed = () => {
    navigation.navigate('AppointmentForm');
  };

  return (
    <Pressable style={styles.modalOverlay} onPress={handleClose}>
      <View style={styles.centeredView}>
        <Pressable style={styles.modalView} onPress={e => e.stopPropagation()}>
          <TouchableOpacity
            style={styles.closeButton}
            onPress={handleClose}
          >
            <Icon name="times" size={24} color="#666" />
          </TouchableOpacity>

          <View style={styles.imageContainer}>
            <Image
              source={{ uri: 'https://encrypted-tbn1.gstatic.com/licensed-image?q=tbn:ANd9GcTu-GSY_bXjggu92Go8I0Od4bEoIE-RnSuaCRmN5xcL4lfSDQI169Wyg5hK0VegSLUJjpqlG47veDZ33C0' }}
              style={styles.profileImage}
            />
            <View style={styles.statusBadge}>
              <Icon name="check" size={20} color="#fff" />
            </View>
          </View>
          
          <Text style={styles.registeredText}>Registered</Text>

          <ScrollView style={styles.infoScrollView}>
            <View style={styles.infoSection}>
              <View style={styles.infoRow}>
                <Text style={styles.label}>Name</Text>
                <Text style={styles.value}>YEBOAH PHYLLIS KYEREMAA</Text>
              </View>

              <View style={styles.infoRow}>
                <Text style={styles.label}>Level</Text>
                <Text style={styles.value}>Level 100</Text>
              </View>

              <View style={styles.infoRow}>
                <Text style={styles.label}>Index number</Text>
                <Text style={styles.value}>UEB19174124</Text>
              </View>

              <View style={styles.infoRow}>
                <Text style={styles.label}>Program</Text>
                <Text style={styles.value}>BSC FIRE,SAFTY AND DISASTER MANAGEMENT</Text>
              </View>
            </View>
          </ScrollView>

          <TouchableOpacity 
            style={styles.okButton}
            onPress={handleProceed}
          >
            <Text style={styles.okButtonText}>OK</Text>
          </TouchableOpacity>
        </Pressable>
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  modalView: {
    backgroundColor: '#fff',
    borderRadius: 20,
    padding: 20,
    alignItems: 'center',
    width: '100%',
    maxHeight: height * 0.8,
    position: 'relative',
    elevation: 5,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
  closeButton: {
    position: 'absolute',
    right: 15,
    top: 15,
    zIndex: 1,
    padding: 5,
  },
  imageContainer: {
    position: 'relative',
    marginTop: 20,
    marginBottom: 10,
  },
  profileImage: {
    width: 120,
    height: 120,
    borderRadius: 60,
  },
  statusBadge: {
    position: 'absolute',
    bottom: 0,
    right: 0,
    backgroundColor: '#4CAF50',
    width: 32,
    height: 32,
    borderRadius: 16,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 2,
    borderColor: '#fff',
  },
  registeredText: {
    color: '#4CAF50',
    fontSize: 18,
    fontWeight: '500',
    marginBottom: 20,
  },
  infoScrollView: {
    width: '100%',
    maxHeight: height * 0.4,
  },
  infoSection: {
    width: '100%',
    gap: 15,
    paddingBottom: 20,
  },
  infoRow: {
    width: '100%',
  },
  label: {
    fontSize: 14,
    color: '#666',
    marginBottom: 4,
  },
  value: {
    fontSize: 16,
    color: '#333',
    fontWeight: '500',
  },
  okButton: {
    backgroundColor: '#000',
    paddingHorizontal: 40,
    paddingVertical: 12,
    borderRadius: 25,
    marginTop: 20,
  },
  okButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '500',
  },
});

export default Trial; 