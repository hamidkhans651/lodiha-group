

import React from 'react'
import Image from 'next/image'
import Video from 'next-video';
import getStarted from '../components/video.mp4';


const Landing = () => {
  return (
    <div>
      <div className=" bg-white" id="home">
        <div className="">
          {/* <div id='largescreen' className='max-md:hidden '>
            {['home-1'].map((path) => {
              return (
                <div key={path}>
                  <Image src={`/${path}.png`}
                    alt="Logo" width={5000} height={5000} />
                </div>
              )
            })}
          </div> */}
        </div>
      </div>


    </div>

  )
}

export default Landing
