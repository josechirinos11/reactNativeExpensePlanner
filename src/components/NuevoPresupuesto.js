import React, { useState } from 'react'
import { Pressable, Text, TextInput, View, StyleSheet } from 'react-native'
import glogalStyles from '../styles'

const NuevoPresupuesto = ({
  presupuesto,
  setPresupuesto,
  handleNuevoPresupuesto }) => {

  // estados







  return (
    <View style={styles.contenedor}>
      <Text style={styles.label}>Definir Presupuesto</Text>
      <TextInput
        keyboardType='numeric'
        placeholder='Agrega tu presupuesto'
        placeholderTextColor='black'
        style={styles.input}
        value={presupuesto.toString()}
        onChangeText={setPresupuesto}
        
      />

      <Pressable
        onPress={() => handleNuevoPresupuesto(presupuesto)}
        style={styles.boton}
      >
        <Text style={styles.botontexto}>Agregar Presupuesto</Text>
      </Pressable>
    </View>
  )
}


const styles = StyleSheet.create({
  botontexto: {
    color: '#FFF',
    textAlign: 'center',
    textTransform: 'uppercase',
    fontWeight: 'bold'
  },
  boton: {
    marginTop: 30,
    backgroundColor: '#1048A4',
    padding: 10,
    borderRadius: 10,
  },
  input: {
    backgroundColor: '#F5F5F5',
    padding: 10,
    borderRadius: 10,
    textAlign: 'center',
    marginTop: 30,

  },
  contenedor: {
    ...glogalStyles.contenedor
  },
  label: {
    color: '#3B82F6',
    textAlign: 'center',
    fontSize: 24,

  }
})

export default NuevoPresupuesto
