import React from 'react';
import axios from 'axios';
import RepoCard from './RepoCard';
import '../styles/RepoList.css';



export default class RepoList extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      repos: [],
      loading: true,
      error: null,
    };
  }

  componentDidMount() {
    axios
      .get(
        window.encodeURI(
          `https://api.github.com/search/repositories?q=stars:>1&per_page=100&type=Repositories`,
        ),
      )
      .then(response => {
        const repos = response.data.items;
        this.setState({
          repos,
          loading: false,
        });
      })
      .catch(error => {
        this.setState({
          error: error,
          loading: false,
        });
      });


  }

  renderLoading() {
    return (
      <div>
        Loading...
      </div>
    );
  }

  renderError() {
    return (
      <div>
        <div>
          Sorry, an error ocurred: {this.state.error.response.data.message}
        </div>
      </div>
    );
  }

  renderList() {
    const { error, repos } = this.state;
    console.log(this.state.repos);

    if (error) {
      console.log(error);
      return this.renderError();
    }

    return (
      <div className="repoList">
      <div>
        <h1 className="component-heading">Top 100 GitHub Repositories</h1>
      </div>
      <br/>
        <div className="repolist-wrapper">
        {repos.map((repo, index) =>
            <RepoCard repo={repo} index={index} key={repo.id} />,
          )}
        </div>
      </div>
    );
  }

  render() {
    return this.state.loading ? this.renderLoading() : this.renderList();
  }
}
