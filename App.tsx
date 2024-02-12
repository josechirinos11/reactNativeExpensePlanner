
import React, { useState } from 'react';


import {
  Alert,
  Dimensions,
  PixelRatio, 
  SafeAreaView,
  Pressable,
  StyleSheet,
  Text,
  View,
  Image,
  Modal
} from 'react-native';
import Headers from './src/components/Headers';
import NuevoPresupuesto from './src/components/NuevoPresupuesto';
import ControlPresupuesto from './src/components/ControlPresupuesto';
import FormularioGasto from './src/components/FormularioGasto';





const App = () => {
  const [isValidPresupuesto, setIsValidPresupuesto] = useState(false)
  const [presupuesto, setPresupuesto] = useState(0)
  const [gastos, setGastos] = useState([])
  const [modal, setModal] = useState(false)


  const { width, height } = Dimensions.get('window')

  const windowWidth = Dimensions.get('window').width;
  const windowHeight = Dimensions.get('window').height;
 
  console.log(width, ' ---window--- ', height,)
  console.log(windowWidth, ' ---screen--- ', windowHeight,)
  
  


  const handleNuevoPresupuesto = (presupuesto) => {
    console.log('desde APP', presupuesto)
    if (Number(presupuesto) > 0) {
      console.log('el presupuesto es valido')
      setIsValidPresupuesto(true)
    } else {
      Alert.alert(
        'Error',
        'El presupuesto no puede ser 0 o menor',
        [{ text: 'OK' }])
    
    }
  }




  return (
    <View style={styles.contenedor}>
      <View style={styles.header}>
        <Headers />
        {isValidPresupuesto ? (
          <ControlPresupuesto 
          presupuesto={presupuesto}
          gastos={gastos}
          />
        ) : (
          <NuevoPresupuesto
            presupuesto={presupuesto}
            setPresupuesto={setPresupuesto}
            handleNuevoPresupuesto={handleNuevoPresupuesto}
          />
        )
        }
      </View>
      {modal && (
        <Modal
        animationType='slide'
        visible={modal}
        >
            <FormularioGasto />
        </Modal> 
      )}
      {isValidPresupuesto && (
        <Pressable
        onPress={() => setModal(true)}
        >
        <Image
        style={styles.imagen}
        source={require('./src/img/nuevo-gasto.png')}
        />
        </Pressable>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  imagen: {
    width: 60,
    height: 60,
    position: 'absolute',
    top: 10,
    right: 20



  },
  contenedor: {
    backgroundColor: '#F5F5F5',
    flex: 1,
  },

  header: {
    backgroundColor: '#3B82F6'
  },
});



export default App;
