import React from 'react'
import { Text, SafeAreaView, View, Pressable, TextInput, Picker } from 'react-native'

const FormularioGasto = () => {
  return (
    <SafeAreaView>
        <View>
            <Pressable>

            </Pressable>
        </View>
        <View>
            <Text>Nuevo Gasto</Text>

            <View>
                <Text>Nombre Gasto</Text>
                 <TextInput
                 placeholder='Nombre del gasto. "ejmplo: Comida"'
                 />   
            </View>
            
            <View>
                <Text>Cantidad Gasto</Text>
                 <TextInput
                 placeholder='Cantidad del gasto. "ejmplo: 200"'
                 keyboardType='numeric'
                 />   
            </View>
            <View>
                <Text>Categoria gasto</Text>
                 <Picker
                 selectedValue={selectedValue}
        onValueChange={(itemValue, itemIndex) =>
          setSelectedValue(itemValue)
        }>
        <Picker.Item label="Java" value="java" />
        <Picker.Item label="JavaScript" value="js" />
        <Picker.Item label="Python" value="python" />
        <Picker.Item label="C#" value="csharp" />
                  </Picker>   
            </View>
        </View>
    
    </SafeAreaView>
  )
}

export default FormularioGasto
