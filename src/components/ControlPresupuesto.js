import React, { useState, useEffect } from 'react'
import { Text, View, StyleSheet, Pressable, Dimensions } from 'react-native'
import globalStyles from '../styles'
import { formatearCantidad } from '../helpers'
import CircularProgress from 'react-native-circular-progress-indicator'
import ProgressBarAnimated from 'react-native-progress-bar-animated';
import Ejemplo from './Ejemplo';

const ControlPresupuesto = ({presupuesto, gastos, resetearApp}) => {
    const [disponible, setDisponible] = useState(0)
    const [gastado, setGastado] = useState(0)
    const [ porcentaje, setPorcentaje ] = useState(0)

    const anchoFiltro = Dimensions.get('window')*0.5
 




    useEffect(() => {
        const totalGastado = gastos.reduce( (total, gasto) => Number(gasto.cantidad) + total, 0 )

        const totalDisponible = presupuesto - totalGastado

        const nuevoPorcentaje = (
            ((presupuesto - totalDisponible) / presupuesto) * 100
        )

      
        setTimeout(() => {
            setPorcentaje(nuevoPorcentaje)
        }, 1000);
        setGastado(totalGastado)
        setDisponible(totalDisponible)
    }, [gastos])



    return (
        <View style={styles.contenedorInterno}>
         <View style={styles.contenedor}>
 <View style={styles.centrarGrafica}>
<CircularProgress
                    value={ porcentaje }
                    duration={1000}
                    radius={150}
                    valueSuffix={'%'}
                    title='Gastado'
                    inActiveStrokeColor='#F5F5F5'
                    inActiveStrokeWidth={20}
                    activeStrokeColor='#3b82f6'
                    activeStrokeWidth={20}
                    titleStyle={{ fontWeight: 'bold', fontSize: 20}}
                    titleColor='#64748B'
                />
</View>
          
            <View style={styles.contenedorTexto}>
                <View style={styles.centarcontenedor}>
                <Pressable
                    onPress={resetearApp}
                    style={styles.boton}
                >
                    <Text style={styles.textoBoton}>Reiniciar App</Text>
                </Pressable>
                </View>
                <Text style={styles.valor}>
                    <Text style={styles.label}>Presupuesto: {''} </Text>
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
        </View>
    )
    
}

const styles = StyleSheet.create({
    contenedorInterno: {
        justifyContent: 'center', // Centra horizontalmente el contenido
        alignItems: 'center', // Centra verticalmente el contenido
    },
    contenedor: {
        ...globalStyles.contenedor,
        borderRadius: 9999, // Un valor grande para asegurar que sea completamente redondo
  overflow: 'hidden', // Asegura que el contenido redondeado esté bien recortado
 maxWidth: Dimensions.get('window').width * 0.8,
 
    
  
    },
    centrarGrafica: {
        alignItems: 'center'
    }, 
    boton: {
        backgroundColor: '#DB2777',
        padding: 10,
        marginBottom: 40,
        borderRadius: 5,
        //alignSelf: 'flex-start', // Ajusta el ancho al texto interno
    },
    textoBoton: {
        textAlign: 'center',
        color: '#FFF',
        fontWeight: 'bold',
        textTransform: 'uppercase'
    },
    contenedorTexto: {
        marginTop: 50
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
    centarcontenedor: {
        alignItems: 'center'
    }
})

export default ControlPresupuesto
