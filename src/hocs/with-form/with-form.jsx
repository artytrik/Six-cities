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
    }

    _handleRatingChange(evt) {
      this.setState({
        rating: evt.target.value
      });
    }

    _handleCommentChange(evt) {
      this.setState({
        comment: evt.target.value
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
        />
      );
    }
  }

  return WithForm;
};

export default withForm;
