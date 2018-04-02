/*! Mozilla Public License Version 2.0 !*/
/*! Copyright © 2018 Rick Beerendonk   !*/

/* global React, ReactDOM */
/* eslint react/prop-types:"off" */

const Post = ({title}) => <li>{title}</li>;

const PostList = ({posts}) =>  (
  <ul>{
    posts.map(post => <Post key={post.id} title={post.title} />)
  }</ul>
);

// Container pattern:
// Container fetches data, then renders the sub-component.
class PostListContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      posts: [], 
      error: '', 
      isFetching: false 
    };
  }
  async componentDidMount() {
    this.setState({ isFetching: true });
    try {
      const response = await fetch('posts.json');
      if (!response.ok) {
        throw Error(response.statusText);
      }
      const json = await response.json();
      this.setState({ posts: json });
    } catch (error) {
      this.setState({ error: error.message });
    } finally {
      this.setState({ isFetching: false });
    }
  }
  render() {
    return (
      <React.Fragment>
        {this.state.isFetching && <div>Fetching...</div>}
        {this.state.error
          ? <div style={{color: 'red'}}>{this.state.error}</div> 
          : <PostList posts={this.state.posts} />}
      </React.Fragment>
    );
  }
}

ReactDOM.render(
  <PostListContainer />,
  document.getElementById('app')
);
