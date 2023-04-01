import { StyleSheet, Text, TextStyle } from 'react-native';
import React, { ReactElement } from 'react';

export default function Texto({ children, style }: {
  children: ReactElement,
  style?: TextStyle
}) {

  let styled = styles.texto

  if (style?.fontWeight === 'bold') {
    styled = styles.textoBold
  }

  return (
    <>
      <Text style={[style, styled]}>{children}</Text>
    </>
  );
}

const styles = StyleSheet.create({
  texto: {
    fontFamily: 'MontserratRegular',
    fontWeight: 'normal'
  },
  textoBold: {
    fontFamily: 'MontserratBold',
    fontWeight: 'normal'
  },
})


