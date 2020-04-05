import * as React from 'react';
import {Subtract} from 'utility-types';

interface InjectedProps {
  comment: string;
  rating: string;
  onRatingChange: (evt: React.ChangeEvent) => void;
  onCommentChange: (evt: React.ChangeEvent) => void;
  onClearForm: () => void;
}

interface State {
  comment: string;
  rating: number;
}

const withForm = (Component) => {
  type P = React.ComponentProps<typeof Component>;
  type T = Subtract<P, InjectedProps>

  class WithForm extends React.PureComponent<T, State> {
    constructor(props) {
      super(props);

      this.state = {
        comment: ``,
        rating: null
      };

      this._handleRatingChange = this._handleRatingChange.bind(this);
      this._handleCommentChange = this._handleCommentChange.bind(this);
      this._handleDefault = this._handleDefault.bind(this);
    }

    _handleRatingChange(evt) {
      this.setState({
        rating: parseInt(evt.target.value, 10)
      });
    }

    _handleCommentChange(evt) {
      this.setState({
        comment: evt.target.value
      });
    }

    _handleDefault() {
      this.setState({
        comment: ``,
        rating: null
      });
    }

    render() {
      const {comment, rating} = this.state;

      return (
        <Component
          {...this.props}
          comment={comment}
          rating={rating}
          onRatingChange={this._handleRatingChange}
          onCommentChange={this._handleCommentChange}
          onClearForm={this._handleDefault}
        />
      );
    }
  }

  return WithForm;
};

export default withForm;
