import React, {Component} from 'react';
import {StyleSheet, View} from 'react-native';
import {connect} from 'react-redux';
import {getListHistory} from '../../actions/HistoryAction';
import {ListHistory} from '../../components';
import {dummyOrders} from '../../data';
import {colors, getData} from '../../utils';

class History extends Component {
  componentDidMount = () => {
    const {dispatch} = this.props;
    getData('user').then(response => {
      const data = response;
      if (data) {
        dispatch(getListHistory(data.uid));
      } else {
        this.props.navigation.replace('Login');
      }
    });
  };

  render() {
    const {navigation} = this.props;

    return (
      <View style={styles.container}>
        <ListHistory navigation={navigation} {...this.props} />
      </View>
    );
  }
}

const mapStateToProps = state => ({
  getListHistoryLoading: state.HistoryReducer.getListHistoryLoading,
  getListHistoryResult: state.HistoryReducer.getListHistoryResult,
  getListHistoryError: state.HistoryReducer.getListHistoryError,
});

export default connect(mapStateToProps, null)(History);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },
});
