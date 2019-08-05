import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, Text, View } from 'react-native';
import { Send } from 'react-native-gifted-chat';
import { colors, gStyle } from '../constants';

class CustomSendButton extends React.PureComponent {
  render() {
    const { text } = this.props;

    const isActive = text.length ? styles.btnActive : {};
    const isActiveText = text.length ? styles.btnActiveText : {};

    return (
      <Send {...this.props} containerStyle={styles.container}>
        <View style={[styles.btn, isActive]}>
          <Text style={[styles.btnText, isActiveText]}>Send</Text>
        </View>
      </Send>
    );
  }
}

CustomSendButton.propTypes = {
  // required
  text: PropTypes.string.isRequired
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    marginRight: 8
  },
  btn: {
    backgroundColor: colors.white,
    borderColor: colors.greyTime,
    borderRadius: 3,
    borderWidth: 1,
    paddingHorizontal: 12,
    paddingVertical: 6
  },
  btnText: {
    ...gStyle.textCiruBold14,
    color: colors.greyTime
  },
  btnActive: {
    backgroundColor: colors.blueSend,
    borderColor: colors.blueSend
  },
  btnActiveText: {
    color: colors.white
  }
});

export default CustomSendButton;
