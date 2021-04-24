import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { history } from '../redux'

import Head from './head'
import logo1 from './imgs/logo3.png'
import logo2 from './imgs/logo2.png'



const Header = () => {
  return (
    <div>
      <Head title="GitBrowser" />
      <div className="w-screen object-top items-center justify-center">
        <div className="bg-indigo-300 text-white font-bold rounded-lg border shadow-lg p-10">
          <div id="title" className="font-sans bg-indigo-600 flex object-right justify-center border rounded mb-2 p-2">
            <img src={logo1} alt="skLogo" style={{ height: 90 }} />
          </div>
          <div id="repository-name" className="font-sans bg-indigo-600 flex object-right justify-center border rounded mb-2 p-2">
            <img src={logo2} alt="gbLogo" style={{ height: 40 }} />
          </div>
        </div>
      </div>
    </div>
  )
}

const Dummy = () => {
  const [userName, setName] = useState('')
  return (
    <div>
      <Header />
      <Head title="Wazzup" />
      <div className="flex items-center justify-center h-auto">
        <div className="bg-indigo-800 text-white font-bold rounded-lg border shadow-lg p-10">
          <div id="title" className="text-xl flex justify-center border rounded font-semibold mb-2 p-2">
            Wazzup, niggas?
          </div>
          <div className="flex flex-col items-center">
            <div>Choose your hacker:</div>
            <div className="text-black">
              <input id="input-field" type="text" onChange={(event) => setName(event.target.value)} value={userName} placeholder='username, pls?'/>
            </div>
            <Link to={`/${userName}`} className="bg-gray-100 border-2 border-gray-900 rounded mt-3 p-2">
              <button id="search-button" type="button" onClick={() => history.push(`/${userName}`)} className="text-gray-800 font-bold">
                Check repos!
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

Dummy.propTypes = {}

export default Dummy


