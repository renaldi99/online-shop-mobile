import {Text, View, StyleSheet} from 'react-native';
import React, {Component} from 'react';
import {WebView} from 'react-native-webview';
import {connect} from 'react-redux';
import {updateOrder} from '../../actions/OrderAction';
import {ActivityIndicator} from 'react-native-paper';
import {colors} from '../../utils';

export class Midtrans extends Component {
  componentDidMount = () => {
    if (this.props.route.params.order_id) {
      const {dispatch} = this.props;

      dispatch(updateOrder(this.props.route.params));
    }
  };

  render() {
    const {updateOrderLoading} = this.props;
    return (
      <>
        {updateOrderLoading ? (
          <View style={styles.loading}>
            <ActivityIndicator size="large" color={colors.mainColor} />
          </View>
        ) : (
          <WebView source={{uri: this.props.route.params.redirect_url}} />
        )}
      </>
    );
  }
}

const mappStateToProps = state => ({
  updateOrderLoading: state.OrderReducer.updateOrderLoading,
});

export default connect(mappStateToProps, null)(Midtrans);

const styles = StyleSheet.create({
  loading: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
