import React from 'react'
import { Text, View, StyleSheet, SafeAreaView } from 'react-native'

const Headers = () => {
    return (
        <SafeAreaView style={styles.header}>
            <Text style={styles.texto}>Planificador de Gastos</Text>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    header: {
        backgroundColor: '#3B82F6'
    },
    texto: {
        textAlign: 'center',
        fontSize: 30,
        color: '#fff',
        textTransform: 'uppercase',
        fontWeight: 'bold',
        paddingVertical: 20,
    }
})

export default Headers