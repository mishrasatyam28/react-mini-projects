import React, { useEffect, useState } from 'react'
import './styles.css'
import User from './user';

export const GithubProfileFinder = () => {
    const [userName, setUserName] = useState('mishrasatyam28');
    const [userData, setUserData] = useState(null)
    const [loading, setLoading] = useState(true)
    
    async function fetchGithubUserData() {
        setLoading(true)
        const response = await fetch(`https://api.github.com/users/${userName}`)
        const data = await response.json();
        if (data) {
            setUserData(data)
            setLoading(false)
            setUserName('')
        }
    }

    async function handleSubmit() {
        fetchGithubUserData()
    }

    useEffect(() => {
        fetchGithubUserData()
    }, [])
    
    if (loading) {
        return <h1>Loading data! Please wait.</h1>
    }

  return (
      <div className='github-profile-container'>
          <div className="input-wrapper">
              <input type="text"
                  value={userName}
                  onChange={(e)=>setUserName(e.target.value)}
                  name='search-by-username...'
                  placeholder='Search Github Username'
              />
              <button onClick={handleSubmit}>Search</button>
          </div>
          {
              userData!== null ?<User user={userData}/> : null
          }
    </div>
  )
}
