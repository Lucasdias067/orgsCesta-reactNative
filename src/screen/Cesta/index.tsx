import { FlatList, StyleSheet, View } from 'react-native';
import Header from './components/Header';
import Details from './components/Details';
import Item from './components/Item';
import Texto from '../../components/Texto';
import { ICesta } from '../../types/ICesta';

export default function Cesta({ header, details, items }: ICesta) {
  return (
    <>
      <FlatList
        data={items.list}
        keyExtractor={({ name }) => name.toString()}
        renderItem={Item}
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


