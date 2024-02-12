import React, { useState, useEffect } from 'react'
import { Text, View, Image, StyleSheet } from 'react-native'
import glogalStyles from '../styles'
import {formatearCantidad} from '../helpers'

const ControlPresupuesto = ({ presupuesto, gastos }) => {
    // estados
    const [disponible, setDisponible] = useState(0)
    const [gastado, setGastado] = useState(0)

    useEffect(() => {
        const totalGastado = gastos.reduce((total, gasto) => Number(gasto.cantidad) + total, 0)
        console.log(totalGastado)
        setGastado(totalGastado)
        const totalDisponible = presupuesto - totalGastado
        setDisponible(totalDisponible)
    }, [])






    return (
        <View style={styles.contenedor}>
            <View style={styles.centrarGrafica}>
                <Image
                    style={styles.imagen}
                    source={require('../img/grafico.jpg')}
                />
            </View>
            <View style={styles.ContenedorTexto}>
                <Text style={styles.valor}>
                    <Text style={styles.label}>Presupuesto: {''}</Text>
                    {formatearCantidad(presupuesto)}
                </Text>
                <Text style={styles.valor}>
                    <Text style={styles.label}>Disponible: {''}</Text>
                    {formatearCantidad(disponible)}
                </Text>
                <Text style={styles.valor}>
                    <Text style={styles.label}>Gastado: {''}</Text>
                    {formatearCantidad(gastado)}
                </Text>
            </View>
        </View>
    )
}


const styles = StyleSheet.create({
    ContenedorTexto: {
       marginTop: 50,
    },
    valor: {
       fontSize: 24,
       textAlign: 'center',
       marginBottom: 10
    },
    label: {
       fontWeight: '700',
       color: '#3B82F6'
    },
    contenedor: {
        ...glogalStyles.contenedor
    },
    centrarGrafica: {
        alignItems: 'center'
    },
    imagen: {
        width: 250,
        height: 250
    }

})

export default ControlPresupuesto
