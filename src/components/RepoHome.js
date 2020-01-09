import React from 'react';
import axios from 'axios';
import '../styles/RepoHome.css';
import CommitCard from './CommitCard';

class RepoHome extends React.Component{
  constructor(props) {
      super(props);

      this.state = {
        commits: [],
        loading: true,
        error: null,
        avatar:"",
        stars:0,
        commitUrl:"",
        name:"",
        htmlUrl:""
      };
    }

    componentDidMount(){

      const{avatar, commitUrl, name, stars, htmlUrl} = this.props.location.state;

      let date = new Date().getTime();
      let oneDay = 24*3600*1000;
      let yest =  date-oneDay;
      let yesterday = new Date(yest).toISOString();
      let url = `${commitUrl}?since=${yesterday}`;

      axios.get(url)
        .then(response => {
          const commitData = response.data;
          console.log(commitData);

          this.setState({
            commits: commitData,
            loading: false,
          });
        })
        .catch(error => {
          this.setState({
            error: error,
            loading: false,
          });
          console.log(error);
        });



      this.setState({
        avatar,
        stars,
        commitUrl,
        name,
        htmlUrl
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


renderList(){
  const{ commits, avatar, stars, commitUrl, name, htmlUrl} = this.state;

  return(
    <div className="repository-home">
      <div>
        <h1>Welcome to {name} Repository Home</h1>

        <div className="profile-card">
          <div className="repository-image">
            <img src={avatar} alt={name} height="200" width="200"/>
          </div>

          <div className="profile-content">
              <h2>Name: {name}</h2>
              <h3>Url: {htmlUrl}</h3>
          </div>
          
        </div>

        <div className="commitlist-wrapper">
        {commits.map((commit, index) =>
            <CommitCard commit={commit} index={index} key={commit.sha} />,
          )}
        </div>
      </div>
    </div>
    )
  }

  render() {
    return this.state.loading ? this.renderLoading() : this.renderList();
  }

}

export default RepoHome;
