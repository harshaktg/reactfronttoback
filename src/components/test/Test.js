import React, { Component } from 'react'

class Test extends Component {
  state = {
    title: '',
    body: ''
  };

  componentDidMount = () => {
    fetch('https://jsonplaceholder.typicode.com/posts/1')
      .then(response => response.json())
      .then(json => this.setState({ title: json.title, body: json.body }));
  };

  // componentWillMount = () => {
  //   console.log('component will mount');
  // };

  // componentDidUpdate = () => {
  //   console.log('component did update');
  // };

  // componentWillUpdate = () => {
  //   console.log('component will update');
  // };

  // // will be deprecated
  // UNSAFE_componentWillReceiveProps = (nextProps, nextState) => {
  //   console.log('component will receive props');
  // };

  // static getDerivedStateFromProps(nextProps, prevState) {
  //   // valid state or null should be returned here;
  //   return {
  //     test: 'something'
  //   };
  // }

  // getSnapshotBeforeUpdate(prevProps, prevState) {
  //   console.log('Get snapshot before update');
  // }

  render() {
    const { title, body } = this.state;
    return (
      <div>
        <h1>{title}</h1>
        <p>{body}</p>
      </div>
    )
  }
}

export default Test;
