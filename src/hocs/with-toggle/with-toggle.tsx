import * as React from 'react';
import {Subtract} from 'utility-types';

interface InjectedProps {
  isActive: boolean;
  onToggleClick: () => void;
}

interface State {
  isActive: boolean;
}

const withToggle = (Component) => {
  type P = React.ComponentProps<typeof Component>;
  type T = Subtract<P, InjectedProps>

  class WithToggle extends React.PureComponent<T, State> {
    constructor(props) {
      super(props);

      this.state = {
        isActive: false
      };

      this._handleToggleClick = this._handleToggleClick.bind(this);
    }

    _handleToggleClick() {
      this.setState({
        isActive: !this.state.isActive
      });
    }

    render() {
      const {isActive} = this.state;

      return (
        <Component
          {...this.props}
          isActive={isActive}
          onToggleClick={this._handleToggleClick}
        />
      );
    }
  }

  return WithToggle;
};

export default withToggle;
