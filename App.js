import React, {useState} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  StatusBar,
  Dimensions,
} from 'react-native';

const App = () => {
  const [scale, setScale] = useState(1);
  const [isPinching, setIsPinching] = useState(false);
  
  // 확대 배율 변경 함수
  const changeScale = (newScale) => {
    setScale(newScale);
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" />
      <View style={styles.content}>
        <View style={[styles.magnifierView, {transform: [{scale: scale}]}]}>
          {/* 이 부분이 확대되는 영역입니다 */}
          <Text style={styles.magnifiedText}>
            확대된 화면이 보이는 영역입니다
          </Text>
        </View>
      </View>
      
      {/* 확대 배율 조절 버튼들 */}
      <View style={styles.controls}>
        <TouchableOpacity
          style={[styles.button, scale === 1 && styles.activeButton]}
          onPress={() => changeScale(1)}>
          <Text style={styles.buttonText}>x1</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.button, scale === 2 && styles.activeButton]}
          onPress={() => changeScale(2)}>
          <Text style={styles.buttonText}>x2</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.button, scale === 3 && styles.activeButton]}
          onPress={() => changeScale(3)}>
          <Text style={styles.buttonText}>x3</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.button, scale === 4 && styles.activeButton]}
          onPress={() => changeScale(4)}>
          <Text style={styles.buttonText}>x4</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5',
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  magnifierView: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height - 150,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
  },
  magnifiedText: {
    fontSize: 18,
    color: '#333',
  },
  controls: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 20,
    backgroundColor: 'white',
    borderTopWidth: 1,
    borderTopColor: '#E0E0E0',
  },
  button: {
    padding: 15,
    borderRadius: 10,
    backgroundColor: '#F0F0F0',
    minWidth: 70,
    alignItems: 'center',
  },
  activeButton: {
    backgroundColor: '#007AFF',
  },
  buttonText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
  },
});

export default App;
