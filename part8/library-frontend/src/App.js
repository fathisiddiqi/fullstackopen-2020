import React, { useState } from 'react'
import Authors from './components/Authors'
import Books from './components/Books'
import NewBook from './components/NewBook'
import { useApolloClient, useQuery } from '@apollo/client'
import Login from './components/Login'
import { useEffect } from 'react'
import Recommend from './components/Recommend'
import { ME } from './queries'

const App = () => {
  const [page, setPage] = useState('authors')
  const [token, setToken] = useState(null)
  const client = useApolloClient()
  const userMe = useQuery(ME)

  useEffect(() => {
    const loggedUser = window.localStorage.getItem('library-user-token')
    if (loggedUser) {
      setToken(loggedUser)
    }
  }, [])

  const logout = () => {
    setToken(null)
    localStorage.clear()
    client.resetStore()
  }

  if (!userMe.data) {
    return <div>loading...</div>
  }

  return (
    <div>
      <div>
        <button onClick={() => setPage('authors')}>authors</button>
        <button onClick={() => setPage('books')}>books</button>
        {token ? (
          <span>
            <button onClick={() => setPage('add')}>add book</button>
            <button onClick={() => setPage('recommend')}>recommend</button>
            <button onClick={logout}>logout</button>
          </span>
        ) : (
          <button onClick={() => setPage('login')}>login</button>
        )}
      </div>

      <Authors show={page === 'authors'} />

      <Books show={page === 'books'} />

      <NewBook show={page === 'add'} />

      <Recommend show={page === 'recommend'} userMe={userMe.data.me} />

      {!token && <Login show={page === 'login'} setToken={setToken} />}
    </div>
  )
}

export default App
