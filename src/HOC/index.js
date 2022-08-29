import React from "react";

export const withListWrapper = (Component) => {
  return class List extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        comments: [],
      };
    }
    componentDidMount() {
      this.setState({
        comments: [
          {
            by: "ankit",
            text: "hello",
          },
          {
            by: "aman",
            text: "hi",
          },
          {
            by: "ankit",
            text: "what is happening",
          },
          {
            by: "aman",
            text: "HOC is happending",
          },
        ],
      });
    }
    render() {
      return <Component comments={this.state.comments} {...this.props} />;
    }
  };
};
