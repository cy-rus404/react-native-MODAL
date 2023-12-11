import React, { useState } from 'react';
import { Button, Modal, View } from 'react-native';

function App() {
  const [isModalVisible,setIsModalVisible] = useState(false);
  return (
    <View style={{flex:1,backgroundColor:'plum'}}>
      <Button title='Press' onPress={()=>setIsModalVisible(true)}
      />
      <Modal visible={isModalVisible}
      animationType='slide'
      >
        <View style={{backgroundColor:'midnightblue'}}>
          <Button title='Modal Content'color={'midnightblue'} onPress={()=>setIsModalVisible(false)}
          
          />
        </View>
      </Modal>
    </View>
  );
}

export default App;