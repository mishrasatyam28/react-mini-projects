// Search auto complete with api.

import { useEffect } from "react";
import { useState } from "react"
import { Suggestions } from "./suggestions";


export default function SearchAutoComplete() {

    const [loading, setLoading] = useState(false);
    const [users, setUsers] = useState([])
    const [error, setError] = useState(null)
    const [searchParam, setSearchParam] = useState('')
    const [showDropDown, setShowDropDown] = useState(false)
    const [filteredUsers, setFilteredUsers]= useState([])
    
    function handleChange(event) {
        const query = event.target.value.toLowerCase();
        setSearchParam(query);
        if (query.length > 1) {
            const filteredData = users && users.length ? 
                users.filter(item=>item.toLowerCase().indexOf(query)>-1)
                : []
            setFilteredUsers(filteredUsers)
            setShowDropDown(true)
        } else {
            showDropDown(false)
        }
    }

    async function fetchListOfUsers(){
        try {
            setLoading(true);
            const response = await fetch("https://dummyjson.com/users");
            const data = await response.json();
            if (data && data.users && data.users.length) {
                setUsers(data.users.map(userItem=>userItem.firstName));
                setLoading(false);
                setError(null);
            }

        } catch (error) {
            setLoading(false)
            console.log(error);
            setError(error);
        }
    }

    function handleClick(e) {
        console.log(e.target.innerText)
        setShowDropDown(false)
        setSearchParam(e.target.innerText);
        setFilteredUsers([])
    }
    
    useEffect(() => {
       fetchListOfUsers() 
    }, [])
    
    console.log(users)

  return (
      <div className="search-auto-complete-container">
          {
              loading ? <h1>Loading Data! please wait.</h1> : ''
          }
          <input
              value={searchParam}
              onChange={handleChange}
             placeholder="Search Users here..."
              name="search-users" type="text"
          />
          {
              showDropDown && <Suggestions handleClick={handleClick} data={filteredUsers}/>
          }
    </div>
    )
    
}


//3:48