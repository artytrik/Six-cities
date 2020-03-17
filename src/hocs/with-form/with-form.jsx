import React from 'react';

const withForm = (Component) => {
  class WithForm extends React.PureComponent {
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
