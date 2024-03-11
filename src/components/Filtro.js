import React, { useState, useEffect } from 'react'
import { Text, View, StyleSheet, Dimensions  } from 'react-native'
import { Picker } from '@react-native-picker/picker'
import DropDownPicker from 'react-native-dropdown-picker';
import globalStyles from '../styles'

const Filtro = ({filtro, setFiltro, gastos, setGastosFiltrados, sinFiltro}) => {



    const [open, setOpen] = useState(false);
    const [value, setValue] = useState(null);
    const [items, setItems] = useState([
        {label: 'Sin Filtro', value: 'sin'},
        {label: 'Ahorro', value: 'ahorro'},
        {label: 'Comida', value: 'comida'},
        {label: 'Casa', value: 'casa'},
        {label: 'Gastos Varios', value: 'gastos'},
        {label: 'Ocio', value: 'ocio'},
        {label: 'Salud', value: 'salud'},
        {label: 'Suscripciones', value: 'suscripciones'},
    ]);

    const anchoFiltro = Dimensions.get('window')*0.5

    useEffect(() => {
        if(filtro === '') {
            setGastosFiltrados([])
        } else {
            const gastosFiltrados = gastos.filter( gasto => gasto.categoria === filtro)

            setGastosFiltrados(gastosFiltrados)
        }
        if(filtro === 'sin') {
            console.log('holaaaaaaaaaaaaaaa')
        }
    }, [filtro])

    return (
        <View style={styles.contenedor}>
            <Text style={styles.label}>Filtrar Gastos</Text>


            <Picker
                    selectedValue={filtro}
                    onValueChange={(valor) => {
                        setFiltro(valor)
                    }}
                >
                    <Picker.Item label="-- Seleccione --" value="" />
                    <Picker.Item label="Ahorro" value="ahorro" />
                    <Picker.Item label="Comida" value="comida" />
                    <Picker.Item label="Casa" value="casa" />
                    <Picker.Item label="Gastos Varios" value="gastos" />
                    <Picker.Item label="Ocio" value="ocio" />
                    <Picker.Item label="Salud" value="salud" />
                    <Picker.Item label="Suscripciones" value="suscripciones" />
                </Picker>




        </View>
    )
}

const styles = StyleSheet.create({
    contenedor: {
        ...globalStyles.contenedor,
        transform: [{ translateY: 0 }],
        marginTop: 80,
       
       
    },
    label: {
        fontSize: 22,
        fontWeight: '900',
        color: '#64748B'
    }
})

export default Filtro
