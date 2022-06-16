import React from 'react'
import { Link } from 'react-router-dom'

const NoFound404 = () => {
  return (
    <div>
        <h1>Not found 404</h1>
        <Link to="/">Go to home</Link>
    </div>
  )
}

export default NoFound404