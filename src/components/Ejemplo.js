import React, { Component } from 'react';
import {
  View,
  StyleSheet,
  Dimensions,
  Button,
  Alert,
  Text,
} from 'react-native';

import ProgressBarAnimated from 'react-native-progress-bar-animated';

class Ejemplo extends Component {
  state = {
    progress: 20,
    progressWithOnComplete: 0,
    progressCustomized: 0,
  }



  render() {
    const { porcentaje } = this.props; // Recibe la prop porcentaje
    const screenWidth = Dimensions.get('screen').width;
    const { progress } = this.state; // Accede a la propiedad progress del estado

    const barWidth = screenWidth*0.5;
    const containerWidth = Dimensions.get('screen').width * 0.8; // Establece el ancho del contenedor en un 80% del ancho total de la pantalla

    const progressCustomStyles = {
      backgroundColor: 'red', 
      borderRadius: 0,
      borderColor: 'orange',
    };

    return (
      <View style={styles.container}>
        <View >
          <Text style={styles.label}> del total ancho  :  {screenWidth}, ahora {porcentaje} %  Gastado</Text>
          <ProgressBarAnimated
            width={barWidth}
            value={porcentaje}
            height={30}
            backgroundColor= "#6CC644"
            backgroundColorOnComplete="#6CC644"
            borderWidth={3}
            borderColor= "#3B82F6"
            
          />
         
        </View>
        
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF',
    marginTop: 50,
    padding: 15,
    alignItems: 'center', // Centra el contenedor horizontalmente
  },
  buttonContainer: {
    marginTop: 15,
  },
  separator: {
    marginVertical: 30,
    borderWidth: 0.5,
    borderColor: '#DCDCDC',
  },
  label: {
    paddingBottom: 15,
    fontWeight: '700',
    color: '#3B82F6',
    textAlign: 'center',
    textTransform: 'uppercase'
  },
});


export default Ejemplo;
