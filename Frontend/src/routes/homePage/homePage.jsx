import React from 'react'
import './homePage.scss'
import SearchBar from '../../components/searchBar/searchBar';

function HomePage(){
  return (
    <>
    <div className="homePage">
        <div className="textContainer">
            <div className="wrapper">
            <h1 className='title'>Find Real Estate & Get Your Dream Place</h1>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Distinctio rem asperiores vero quod repellendus quis veniam sint aliquid quaerat non. Sint laboriosam sequi nostrum rerum earum iusto id sed animi!
            </p>
            <SearchBar/>
            <div className="boxes">
              <div className="box">
                <h1>16+</h1>
                <h2>Years of Experience</h2>
                </div>
                <div className="box">
                <h1>200</h1>
                <h2>Awards Gained</h2>
                </div>
                <div className="box">
                <h1>1200+</h1>
                <h2>Property Ready</h2>
                </div>
            </div>
            </div>
        </div>
        <div className="imageContainer">
            <img src='/bg.png' alt=''/>
        </div>
    </div>
    </>
  );
}

export default HomePage

