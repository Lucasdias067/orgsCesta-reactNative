import { Image, StyleSheet, View, TouchableOpacity } from 'react-native';
import Texto from '../../../components/Texto';

export default function Details({ name, farmName, logo, description, price, button }) {
  return (
    <>
      <Texto style={styles.nome}>{name}</Texto>
      <View style={styles.fazenda}>
        <Image source={logo} style={styles.logo} />
        <Texto style={styles.nomeFazenda}>{farmName}</Texto>
      </View>
      <Texto style={styles.descricao}>{description}</Texto>
      <Texto style={styles.preco}>{price}</Texto>
      <TouchableOpacity style={styles.botao}>
        <Texto style={styles.textoBotao}>{button}</Texto>
      </TouchableOpacity>
    </>
  )
}

const styles = StyleSheet.create({
  nome: {
    color: '#464646',
    fontSize: 26.,
    lineHeight: 42,
    fontWeight: 'bold'
  },
  fazenda: {
    flexDirection: 'row',
  },
  logo: {
    width: 32,
    height: 32
  },
  nomeFazenda: {
    fontSize: 16,
    lineHeight: 26,
    marginLeft: 12,
  },
  descricao: {
    color: '#A3A3A3',
    fontSize: 16,
    lineHeight: 26,
  },
  preco: {
    color: '#2A9F85',
    fontWeight: 'bold',
    fontSize: 18,
    lineHeight: 26,
    marginTop: 8
  },
  botao: {
    marginTop: 16,
    backgroundColor: '#2A9F85',
    paddingVertical: 16,
    borderRadius: 6,
  },
  textoBotao: {
    textAlign: 'center',
    color: '#FFF',
    fontWeight: 'bold',
    fontSize: 16,
    lineHeight: 26,
  }
});
