import React from "react"
import { Link } from "gatsby";


export default ({ children }) => (
  <div style={{ margin: `3rem auto`, maxWidth: 650, padding: `0 1rem` }}>
    <Link to="/">
    <h3 style={{ display: `inline` }}>Click here to go back to the home page</h3>
    </Link>
    {children}
  </div>
)