import React, { useState, useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'
import axios from 'axios'
import Markdown from 'markdown-to-jsx'

import Head from './head'

const Header = () => {
  const { userName } = useParams()
  const { repositoryName } = useParams()
  return (
    <div>
      <Head title="GitBrowser" />
      <div className="flex-wrap object-top items-center justify-center">
        <div className="bg-indigo-300 text-white font-bold rounded-lg border shadow-lg p-10">
          <div id="repository-name" className="font-sans bg-indigo-600 flex flex-col items-center justify-center border rounded mb-2 p-2">
            <div>кулпрога
            </div>
            <div className="font-bold text-xl text-yellow-400">
              {repositoryName}
            </div>
          </div>
          <div className="font-sans bg-indigo-600 hover:text-yellow-300 flex object-right justify-center border rounded mb-2 p-2">
            <Link id="go-repository-list" to={`/${userName}`}>
              Назад, к хабчику!
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}


const GitUserRepo = () => {
  const { userName, repositoryName } = useParams()
  const [info, setInfo] = useState('')

  useEffect(() => {
    axios.get(`https://raw.githubusercontent.com/${userName}/${repositoryName}/master/README.md`).then(readme => {
      setInfo(readme.data)
    })
  }, [userName, repositoryName])

  return (
    <div>
      <Header />
      <Head title="GitUserRepo" />
      <div className="flex items-center justify-center h-auto">
        <div className="bg-indigo-800 text-white font-bold rounded-lg border shadow-lg p-10">
          <div id="username" className="flex flex-col items-center border rounded font-semibold mb-2 p-2">
            <div>
              кулхацкер: {userName}
            </div>
            кулпрога: {repositoryName}
          </div>
          <div>
            описание кулпроги:
          </div>
          <div id="description" className="flex flex-col justify-center border rounded font-semibold mb-2 p-2">
            <Markdown>{info}</Markdown>
          </div>
        </div>
      </div>
    </div>
  )
}

GitUserRepo.propTypes = {}

export default GitUserRepo