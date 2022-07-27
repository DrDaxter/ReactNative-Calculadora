import React, { useState } from 'react'
import { Text, View } from 'react-native'
import { BotonCalc } from '../components/BotonCalc'
import { styles } from '../theme/appTheme'

export const CalculadoraScreen = () => {
    const [numero, setnumero] = useState('0');
    const [numeroAnterior, setNumeroAnterior] = useState('0')

    const limpiar = () =>{
        setnumero('0');
    }

    const armarNumero = (numeroTexto?:string) => {
        if(numero.includes('.') && numeroTexto === '.') return;
        
        if(numero.startsWith('0') || numero.startsWith('-0')){
            if(numeroTexto === '.'){
                setnumero(numero + numeroTexto);
            }else if(numeroTexto === '0' && numero.includes('.')){
                setnumero(numero + numeroTexto);
            }else if(numeroTexto !== '0' && !numero.includes('.')){
                setnumero(numeroTexto!);
            }else if(numeroTexto == '0' && !numero.includes('.')){
                setnumero(numeroTexto!);
            }else{
                setnumero(numero + numeroTexto);
            }
        }else{
            setnumero(numero + numeroTexto);
        }
        
    }

    const positivoNegativo = () => {
        if(numero.includes('-')){
            setnumero(numero.replace('-',''));
        }else{
            setnumero('-'+numero);
        }
    }

  return (
    <View style={styles.calculadoraContainer}>
        <Text style={styles.resultadoSmall}>{numeroAnterior}</Text>
        <Text style={styles.resultado} numberOfLines={1} adjustsFontSizeToFit>{numero}</Text>

        <View style={styles.fila}>
            <BotonCalc texto='C' color='#9B9B9B' textColor='#000'   accion={limpiar}/>
            <BotonCalc texto='+/-' color='#9B9B9B'textColor='#000'  accion={positivoNegativo}/>
            <BotonCalc texto='del' color='#9B9B9B' textColor='#000' accion={limpiar}/>
            <BotonCalc texto='/' color='#FF9427' accion={limpiar}/>
        </View>
        <View style={styles.fila}>
            <BotonCalc texto='7' accion={ armarNumero }/>
            <BotonCalc texto='8' accion={armarNumero}/>
            <BotonCalc texto='9' accion={armarNumero}/>
            <BotonCalc texto='X' color='#FF9427' accion={limpiar}/>
        </View>
        <View style={styles.fila}>
            <BotonCalc texto='4' accion={armarNumero}/>
            <BotonCalc texto='5' accion={armarNumero}/>
            <BotonCalc texto='6' accion={armarNumero}/>
            <BotonCalc texto='-' color='#FF9427' accion={limpiar}/>
        </View>
        <View style={styles.fila}>
            <BotonCalc texto='1' accion={armarNumero}/>
            <BotonCalc texto='2' accion={armarNumero}/>
            <BotonCalc texto='3' accion={armarNumero}/>
            <BotonCalc texto='+' color='#FF9427' accion={limpiar}/>
        </View>
        <View style={styles.fila}>
            <BotonCalc texto='0' ancho={true} accion={armarNumero}/>
            <BotonCalc texto='.' accion={armarNumero}/>
            <BotonCalc texto='=' color='#FF9427' accion={limpiar}/>
        </View>
       {/*  #9B9B9B -> gris claro*/}
       {/*  #2D2D2D -> gris oscuro*/}
       {/*  #FF9427 -> naranja*/}
    </View>
  )
}
