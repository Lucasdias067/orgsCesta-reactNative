import { StyleSheet, Text } from 'react-native';

export default function Texto({ children, style }) {

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


