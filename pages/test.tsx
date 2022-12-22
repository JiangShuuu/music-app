// https://dev.to/dom_the_dev/how-to-use-the-spotify-api-in-your-react-js-app-50pn

import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import axios from 'axios'
import Image from 'next/image'

export default function Test() {
  const [token, setToken] = useState('')
  const [searchKey, setSearchKey] = useState('')
  const [artists, setArtists] = useState([])

  useEffect(() => {
    const hash = window.location.hash
    let tokens = window.localStorage.getItem('token')

    if (!tokens && hash) {
      tokens = hash
        .substring(1)
        .split('&')
        .find((elem) => elem.startsWith('access_token'))
        .split('=')[1]

      window.location.hash = ''
      window.localStorage.setItem('token', tokens)

      console.log('token', tokens)
    }

    if (tokens) {
      setToken(tokens)
    }
  }, [])

  const logout = () => {
    setToken('')
    window.localStorage.removeItem('token')
  }

  const searchArtists = async (e: any) => {
    e.preventDefault()
    const { data } = await axios.get('https://api.spotify.com/v1/search', {
      headers: {
        Authorization: `Bearer ${token}`,
      },
      params: {
        q: searchKey,
        type: 'artist',
      },
    })

    setArtists(data.artists.items)
  }

  return (
    <div className="px-10 space-y-4">
      <h1>test</h1>
      {!token ? (
        <Link
          href={`${process.env.NEXT_PUBLIC_AUTH_ENDPOINT}?client_id=${process.env.NEXT_PUBLIC_CLIENT_ID}&redirect_uri=${process.env.NEXT_PUBLIC_REDIRECT_URI}&response_type=${process.env.NEXT_PUBLIC_RESPONSE_TYPE}`}
        >
          Login to Spotify
        </Link>
      ) : (
        <button onClick={logout}>Logout</button>
      )}
      {/* search */}
      <form onSubmit={searchArtists}>
        <input
          type="text"
          className="mr-4 border-2"
          onChange={(e) => setSearchKey(e.target.value)}
        />
        <button type={'submit'} className="px-2 border">
          Search
        </button>
      </form>

      {artists &&
        artists.map((artist: any) => (
          <div key={artist.id}>
            {artist.images.length ? (
              <div className="flex flex-wrap w-full overflow-hidden">
                <div className="basis-1/4">
                  <img width={'80%'} src={artist.images[0].url} alt="img" />
                </div>
                <p className="w-20 basis-3/4">{JSON.stringify(artist)}</p>
              </div>
            ) : (
              <div>No Image</div>
            )}
            {artist.name}
          </div>
        ))}
    </div>
  )
}
