import React from 'react'

import { google, atlassian, slack, dropbox, shopify } from './imports'
import './brand.css';

const Brand = () => {
    return (
        <div className='gpt3__brand section__padding'>
            <img src={google} alt="google" />
            <img src={slack} alt="slack" />
            <img src={atlassian} alt="atlassian" />
            <img src={dropbox} alt="dropbox" />
            <img src={shopify} alt="shopify" />
        </div>
    )
}

export default Brand
