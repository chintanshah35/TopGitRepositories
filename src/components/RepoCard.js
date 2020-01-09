import React from 'react';
import {Link} from 'react-router-dom';
import '../styles/RepoCard.css';

const RepoCard = ({ repo, index }) =>{
  const repository = repo;
  const pointer = index;
  let str = repo.commits_url
  console.log(str);
  let commitString = str.substring(0, str.length - 6);
  console.log(commitString);

  console.log("index: "+ pointer);
  console.log(repository);

  return (
  <div className="card-wrapper">
    <div className="card">

    <br/>

    <div className="card-title">
        <Link to={{
          pathname:`${repository.name}`,
          state:{
            name: repository.name,
            stars: repository.stargazers_count,
            avatar:repository.owner.avatar_url,
            commitUrl: commitString,
            htmlUrl: repository.html_url
          }
        }}>
              <span>#{index + 1} </span><span>{repo.name}</span>
        </Link>
    </div>
    <br/>

    <div className="card-url">
        <span>{repo.html_url}</span>
    </div>
    <br/>

    <div className="card-image">
      <img src={repo.owner.avatar_url} alt={repo.name} height="100" width="100" />
    </div>

    <br/>

    <div className="card-stars">
      <span>{repo.stargazers_count} Stars</span>
    </div>

    <br/>

    <div className="card-button">
    <Link to={{
      pathname:`${repository.name}`,
      state:{
        name: repository.name,
        stars: repository.stargazers_count,
        avatar:repository.owner.avatar_url,
        commitUrl: commitString,
        htmlUrl: repository.html_url
      }
    }}>
        <button className="button-round">Check out the commits in last 24 hours</button>
      </Link>
    </div>

    <br/>

    </div>
  </div>
);
}

export default RepoCard;
