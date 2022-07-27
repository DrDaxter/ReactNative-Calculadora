import React from 'react'
import { Text, View } from 'react-native'
import { styles } from '../theme/appTheme'

export const CalculadoraScreen = () => {
  return (
    <View style={styles.calculadoraContainer}>
        <Text style={styles.resultadoSmall}>15000</Text>
        <Text style={styles.resultado}>15000</Text>

        <View style={styles.fila}>
            <View style={styles.button}>
                <Text style={styles.buttonText}>1</Text>
            </View>
            <View style={styles.button}>
                <Text style={styles.buttonText}>1</Text>
            </View>
            <View style={styles.button}>
                <Text style={styles.buttonText}>1</Text>
            </View>
            <View style={styles.button}>
                <Text style={styles.buttonText}>1</Text>
            </View>
        </View>
    </View>
  )
}
