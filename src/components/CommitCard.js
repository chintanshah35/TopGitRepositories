import React from 'react';
import '../styles/CommitCard.css'


const CommitCard = ({commit, index}) =>{

  return (
    <div className="commit-wrapper">
      <div className="commit-author-name">
          <span>#{index + 1} </span><span>Name: {commit.commit.author.name}</span>
      </div>
      <br/>

      <div className="commit-message">
          <span>Message: {commit.commit.message}</span>
      </div>
      <br/>

      <div className="card-date">
        <span>Date: {commit.commit.author.date}</span>
      </div>

      <br/>

    </div>
);
}

export default CommitCard;
