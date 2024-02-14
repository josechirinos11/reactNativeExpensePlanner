import React, { useState, useEffect } from 'react'
import { Text, View, StyleSheet } from 'react-native'

import DropDownPicker from 'react-native-dropdown-picker';
import globalStyles from '../styles'

const Filtro = ({filtro, setFiltro, gastos, setGastosFiltrados}) => {



    const [open, setOpen] = useState(false);
    const [value, setValue] = useState(null);
    const [items, setItems] = useState([
        {label: 'Ahorro', value: 'ahorro'},
        {label: 'Comida', value: 'comida'},
        {label: 'Casa', value: 'casa'},
        {label: 'Gastos Varios', value: 'gastos'},
        {label: 'Ocio', value: 'ocio'},
        {label: 'Salud', value: 'salud'},
        {label: 'Suscripciones', value: 'suscripciones'},
    ]);

    useEffect(() => {
        if(filtro === '') {
            setGastosFiltrados([])
        } else {
            const gastosFiltrados = gastos.filter( gasto => gasto.categoria === filtro)

            setGastosFiltrados(gastosFiltrados)
        }
    }, [filtro])

    return (
        <View style={styles.contenedor}>
            <Text style={styles.label}>Filtrar Gastos</Text>


            <View
                style={{
                    
                    alignItems: 'center',
                    justifyContent: 'center',
                    
                }}>
                    <DropDownPicker
                    open={open}
                    value={filtro}
                    items={items}
                    setOpen={setOpen}
                    setValue={setFiltro}
                    setItems={setItems}
                    placeholder={'Seleccione'}
                />
                 </View>




        </View>
    )
}

const styles = StyleSheet.create({
    contenedor: {
        ...globalStyles.contenedor,
        transform: [{ translateY: 0 }],
        marginTop: 80
    },
    label: {
        fontSize: 22,
        fontWeight: '900',
        color: '#64748B'
    }
})

export default Filtro
