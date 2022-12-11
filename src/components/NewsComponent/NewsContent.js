import { Container } from '@mui/material'
import React, { useState } from 'react'
import NewsCard from '../newcard/NewsCard'
import './NewsContent.css';


const NewsContent = ({setGraphQl,graphQl,newsArray,newsApi}) => {

  const [count,setCount]=useState(1);

  const loadMore=()=>{
    setGraphQl(20);
    setCount(count+1);
    setGraphQl(graphQl*count);
    newsApi(graphQl);
    newsArray.splice(0,graphQl-20);
  }
  
  return (
    <Container maxWidth="md">
      <div className='content'>
        <div className='downloadmsg'> 
        <span className='downloadtxt'>
        For the best experience use <strong style={{cursor:"pointer"}}>inshorts</strong> app on your smartphone
        </span>
        <a href="https://apps.apple.com/us/app/news-in-shorts/id892146527" className='link link1' alt="app store">
        <img
        alt='"app strore'
        height="80%"
        src="https://assets.inshorts.com/website_assets/images/appstore.png"
        />
        </a>
        <a href='https://play.google.com/store/apps/details?id=com.nis.app&referrer=utm_source%3DNews%2520In%2520Shorts%2520Website' className='link' alt="play store">
        <img
        alt='"play strore'
        height="80%"
        src="https://assets.inshorts.com/website_assets/images/playstore.png"
        />
        </a>
        </div>
        {
          newsArray && newsArray.map((newsItem)=>(
            <NewsCard newsItem={newsItem} key={newsItem.title}/>
        ))
        }
        
        <button className='loadmore' onClick={loadMore}>
          Load More
        </button>
        
        
      </div>
    </Container>
  )
}

export default NewsContent
