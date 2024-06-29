import { StyleSheet, Text, View, Image, TouchableOpacity, TextInput } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native';


const Trends = () => {

  const navigation = useNavigation();

  const TrendPage = ({ navigation }) => {
    const [searchKeyword, setSearchKeyword] = useState('');
  }
  
  
  return (
    <View style={styles.container}>
    <View style={{alignContent: 'center', alignItems: 'center', justifyContent: 'center'}}>
    <Image style={{width: 80, height: 36,}} source={{uri : 'https://res.cloudinary.com/doukdigoy/image/upload/v1712037787/cpe451/B1_ekmzlk.png' }} />
  </View>
  <View style={styles.header}>
    <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
      <Image
        style={styles.backIcon}
        source={{ uri: 'https://res.cloudinary.com/doukdigoy/image/upload/v1712768684/cpe451/goback2_thcvlx.png'}}
      />
      <Text style={styles.backText}>Back</Text>
    </TouchableOpacity>
  </View>
  <View style={styles.searchBar}>
    <Image
      style={styles.searchIcon}
      source={require('../trend/search.png')}
    />
    <TextInput
      style={styles.searchText}
      placeholder="Search for Trends"
      placeholderTextColor="#777777"
      onChangeText={(text) => setSearchKeyword(text)}
    />
  </View>
  
  <View style={styles.trendContainer}>
    <TouchableOpacity style={styles.trendBox} onPress={() => navigation.navigate('FoodPage')}>
      <Image
        style={styles.trendIcon}
        source={require('../trend/food.png')}
      />
      <View style={styles.trendInfo}>
        <Text style={styles.trendTitle}>Food Update Trends</Text>
        <Text style={styles.trendDescription}>ข้อมูลและคำแนะนำเกี่ยวกับอาหาร</Text>
      </View>
    </TouchableOpacity>
    <TouchableOpacity style={styles.trendBox} onPress={() => navigation.navigate('FitnessPage')}>
      <Image
        style={styles.trendIcon}
        source={require('../trend/weight.png')}
      />
      <View style={styles.trendInfo}>
        <Text style={styles.trendTitle}>Fitness Trends</Text>
        <Text style={styles.trendDescription}>คำแนะนำสำหรับการออกกำลังกาย</Text>
      </View>
    </TouchableOpacity>
    <TouchableOpacity style={styles.trendBox} onPress={() => navigation.navigate('OutdoorActivitiesPage')}>
      <Image
        style={styles.trendIcon}
        source={require('../trend/run.png')}
      />
      <View style={styles.trendInfo}>
        <Text style={styles.trendTitle}>Outdoor Activities</Text>
        <Text style={styles.trendDescription}>แนะนำกิจกรรม/การออกกำลังกาย outdoor</Text>
      </View>
    </TouchableOpacity>
    <TouchableOpacity style={styles.trendBox} onPress={() => navigation.navigate('IndoorActivitiesPage')}>
      <Image
        style={styles.trendIcon}
        source={require('../trend/home.png')}
      />
      <View style={styles.trendInfo}>
        <Text style={styles.trendTitle}>Indoor Activities</Text>
        <Text style={styles.trendDescription}>แนะนำกิจกรรม/การออกกำลังกาย indoor</Text>
      </View>
    </TouchableOpacity>
    </View>
  
    </View>
  
    
  )
}

export default Trends

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-start', // Align content to the top
    paddingTop: 20, // Add padding to the top
    margin: 20
  },
  searchBar: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#ffffff',
    borderRadius: 25,
    borderWidth: 0.5,
    borderColor: '#777777',
    paddingHorizontal: 20,
    marginTop: 30, // Adjust marginTop instead of marginBottom
    marginBottom: 20,
  },
  searchIcon: {
    width: 24,
    height: 24,
    marginRight: 10,
  },
  searchText: {
    flex: 1,
    fontFamily: 'Mitr',
    fontSize: 16,
    fontWeight: '400',
    color: '#777777',
  },
  logo: {
    width: 80,
    height: 36,
    marginBottom: 15,
  },
  header: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 18,
    marginBottom: 15,
  },
  backButton: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  backIcon: {
    width: 30,
    height: 30,
    marginRight: 6,
  },
  backText: {
    fontFamily: 'Mitr',
    fontSize: 16,
    fontWeight: '400',
    color: '#11B3CF',
    height: 30,
    top: 2
  },
  trendContainer: {
    alignItems: 'center',
  },
  trendBox: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#ffffff',
    borderRadius: 100,
    borderWidth: 1.5,
    borderColor: '#59d3e8',
    paddingHorizontal: 60, 
    paddingVertical: 10,
    marginBottom: 20,
  },
  
  trendIcon: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 25,
  },
  trendInfo: {
    flex: 1,
  },
  trendTitle: {
    fontFamily: 'Mitr',
    fontSize: 16,
    fontWeight: '400',
    color: '#000000',
    marginBottom: 4,
  },
  trendDescription: {
    fontFamily: 'Mitr',
    fontSize: 12,
    fontWeight: '300',
    color: '#000000',
  },
});


/*
     
*/