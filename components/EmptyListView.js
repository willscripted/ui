import PropTypes from 'prop-types';
import React from 'react';
import { connectStyle } from '@shoutem/theme';
import { Text, View } from '@shoutem/ui';
import EmptyList from '../assets/images/emptyList.svg'

class EmptyListView extends PureComponent {
  render() {
    const { message, title, style } = this.props
    return (
      <View styleName="vertical h-center">
        <EmptyList style={style.image} />
        <Text style={style.title}>{title}</Text>
        <Text style={style.description} styleName="h-center">
          {message}
        </Text>
      </View >
    );
  }
}


EmptyListView.propTypes = {
  ...EmptyListView.propTypes,
  message: PropTypes.string,
  title: PropTypes.string,
};

const StyledView = connectStyle('shoutem.ui.EmptyListView')(EmptyListView);

export {
  StyledView as EmptyListView,
};
