import React from 'react'
import { Text, TouchableOpacity, View } from 'react-native'
import { styles } from '../theme/appTheme'

interface BtnProps{
    texto:string,
    color?: string,
    textColor?:string,
    ancho?:boolean,
    accion: (numeroTexto?:string)=>void;
}
export const BotonCalc = ({texto,color = '#2D2D2D',textColor = "#fff",ancho = false,accion}:BtnProps) => {
  return (
    <TouchableOpacity onPress={()=> accion(texto)}>
        <View style={{
            ...styles.button,
            backgroundColor:color,
            width: ancho ? 180 : 80
        }}>
            <Text style={{...styles.buttonText, color:textColor}}>{texto}</Text>
        </View>
    </TouchableOpacity>

  )
}
