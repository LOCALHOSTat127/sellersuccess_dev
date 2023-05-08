import React from 'react'

import { ReactComponent as PageNotFoundSvg } from '../../assets/svg/pagenotfound.svg';
import { Link } from 'react-router-dom'
import "./style.css";

const PageNotFound = () => {
  return (
    <div className="page_not_found">
        <div className="inner">
            <PageNotFoundSvg className="page_svg" />
            
        </div>
        <p>Go back to <Link to="/" >Home</Link></p>
    </div>
  )
}

export default PageNotFound