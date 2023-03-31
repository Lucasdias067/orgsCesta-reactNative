import { Dimensions, Image, StyleSheet } from 'react-native';
import Texto from '../../../components/Texto';
import topo from '../../../../assets/topo.png';

const { width } = Dimensions.get('screen');

export default function Header({ title }) {

  return (
    <>
      <Image source={topo} style={styles.topo} />
      <Texto style={styles.titulo}>{title}</Texto>
    </>
  );
}

const styles = StyleSheet.create({
  topo: {
    width: '100%',
    height: 578 / 768 * width
  },
  titulo: {
    width: '100%',
    position: 'absolute',
    textAlign: 'center',
    color: 'white',
    fontSize: 16,
    lineHeight: 26,
    padding: 16,
    fontWeight: 'bold'
  }
})
