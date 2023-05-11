import React from 'react'

import { ReactComponent as PageNotFoundSvg } from '../../assets/svg/pagenotfound.svg';
import { ReactComponent as PageNotFoundSvgMobile } from '../../assets/svg/mobile_not_found.svg';
import { Link } from 'react-router-dom'
import "./style.css";

const PageNotFound = () => {
  return (
    <div className="page_not_found">
        <div className="inner">
            <PageNotFoundSvg className="page_svg" />
            <PageNotFoundSvgMobile className="page_svg_mobile" />
            
        </div>
        <p>Go back to <Link to="/" >Home</Link></p>
    </div>
  )
}

export default PageNotFound