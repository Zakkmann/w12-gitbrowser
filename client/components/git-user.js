import React, { useState, useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'
import axios from 'axios'

import Head from './head'

const Header = () => {
  const { userName } = useParams()
  return (
    <div>
      <Head title="GitBrowser" />
      <div className="flex-wrap object-top items-center justify-center">
        <div className="bg-indigo-300  text-white font-bold rounded-lg border shadow-lg p-10">
          <div id="repository-name" className="font-sans bg-indigo-600 flex flex-col items-center justify-center border rounded mb-2 p-2">
            <div> хабчик великого и ужасного
            </div>
            <div className="font-bold text-xl text-yellow-400">
              {userName}
            </div>
          </div>
          <div className="font-sans bg-indigo-600 hover:text-yellow-400 flex object-right justify-center border rounded mb-2 p-2">
            <Link id="go-back" to="/">
              Валим!
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

const GitUser = () => {
  const { userName } = useParams()
  const [repos, setRepos] = useState([])
  const [avaUrl, setUrl] = useState([])

  useEffect(() => {
    axios.get(`https://api.github.com/users/${userName}/repos`).then(usr => {
      setRepos(usr.data)
    })
    axios.get(`https://api.github.com/users/${userName}`).then(res => res.data).then(dat => {
      setUrl(dat.avatar_url)
    })

  }, [])

  return (
    <div>
      <Header />
      <Head title="GitUser" />
      <div className="flex items-center justify-center h-auto">
        <div className="bg-indigo-800 text-white font-bold rounded-lg border shadow-lg p-10">
          <div id="username" className="flex flex-col items-center border rounded font-semibold mb-2 p-2">
            <div className="mb-1">
              кулхацкер
            </div>
            <div className="font-bold text-lg">
            {userName}
            </div>
            <img key={avaUrl} src={`${avaUrl}`} alt="avatar" className="mt-2"
              style={{ 
              width: 100, 
              height: 100,
              borderRadius: 60
            }}/>
          </div>
          <div id="repos" className="flex flex-col justify-center border rounded font-semibold mb-2 p-2">
            {repos.map((rep, index) => {
              return <Link className="hover:text-yellow-400" key={rep?.name} to={`/${userName}/${rep?.name}`}>
              {`${index+1}. `} {rep?.name}
              </Link>
            })}
          </div>
        </div>
      </div>
    </div>
  )
}

GitUser.propTypes = {}

export default GitUser

/* <img src="https://avatars.githubusercontent.com/u/43697710?v=4" alt="avatar"
style={{
  width: 80,
  height: 80,
  marginRight: 10,
  marginBottom: 12,
  marginTop: 12}}
/> */

