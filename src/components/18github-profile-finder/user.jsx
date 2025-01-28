import React from 'react'

function User({ user }) {
  
  const { avatar_url, name, login, followers, following, public_repos, created_at } = user;
  
  const createdDate = new Date(created_at)

  return (
    <div className='user'>
      <div className="">
        <img src={avatar_url} alt="user" className='avatar' />
      </div>
      <div className="name-container">
        <a target='_blank' href={`https://github.com/${login}`}>{name}</a>
        <p>User joined on {`${createdDate.getDate()} ${createdDate.toLocaleString('en-us',{month:'short'})} ${createdDate.getFullYear()}`}</p>
      </div>
      <div className="profile-info">
        <div className="">
          <p>Public Repos</p>
          <p>{public_repos}</p>
        </div>
        <div className="">
        <p>Follwers</p>
        <p>{followers}</p>
        </div>
        <div className="">
        <p>Following</p>
        <p>{following}</p>
        </div>
      </div>

    </div>
  )
}

export default User