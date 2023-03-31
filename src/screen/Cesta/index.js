import { FlatList, StyleSheet, View } from 'react-native';
import Header from './components/Header';
import Details from './components/Details';
import Item from './components/Item';
import Texto from '../../components/Texto';

export default function Cesta({ header, details, items }) {
  return (
    <>
      <FlatList
        data={items.list}
        renderItem={Item}
        keyExtractor={({ name }) => name}
        ListHeaderComponent={() => (
          <>
            <Header {...header} />
            <View style={styles.cesta}>
              <Details {...details} />
              <Texto style={styles.titulo}>{items.title}</Texto>
            </View>
          </>
        )}
      />
    </>
  );
}

const styles = StyleSheet.create({
  cesta: {
    paddingHorizontal: 16,
    paddingVertical: 8,
  },
  titulo: {
    color: '#464646',
    fontSize: 20,
    lineHeight: 32,
    fontWeight: 'bold',
    marginTop: 32,
    marginBottom: 8
  },
})


