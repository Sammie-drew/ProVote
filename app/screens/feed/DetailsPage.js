import React, {useEffect} from 'react';
import {ActivityIndicator, FlatList, StyleSheet, View} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import ElectionCard from '../../components/ElectionCard';
import Footer from '../../components/Footer';
import {fetchCategory} from '../../redux/actions/categoryActions';

const DetailsPage = ({navigation}) => {
  const dispatch = useDispatch();

  const categoryList = useSelector((state) => state.category);
  const {loading, error, category} = categoryList;

  useEffect(() => {
    dispatch(fetchCategory());
  }, [dispatch, fetchCategory]);

  return (
    <View style={styles.container}>
      {loading && <ActivityIndicator size="large" color="purple" />}
      {error && (
        <View>
          <Text>{error}</Text>
        </View>
      )}
      <FlatList
        keyExtractor={(item, index) => item._id}
        data={category}
        numColumns={2}
        showsVerticalScrollIndicator={false}
        renderItem={({item}) => (
          <ElectionCard
            candidateNo={item.num}
            title={item.name}
            details={item.details}
            onPress={() => navigation.navigate('Candidates', item)}
          />
        )}
        ListFooterComponent={() => <Footer />}
      />
    </View>
  );
};

export default DetailsPage;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 10,
    justifyContent: 'space-between',
  },
});
