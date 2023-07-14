import React from 'react'
import styles from '../styles/Home.module.css'
import images from '../public/my/catoon3.jpeg'

const layout = ({children}) => {
  return (
    <div className='flex h-screen bg-blue-400'>
        <div className='m-auto bg-slate-50 rounded-md w-3/5 h-3/4 grid lg:grid-cols-2'>
            <div className={styles.imgstyles}>
                {/* <div className={styles.catoonImg}></div> */}
                <img src={images}/>
            </div>
            <div className='right flex flex-col justify-evenly'>
                <div className='text-center py-10'>
                    {children}
                </div>

            </div>
        </div>
    </div>
  )
}

export default layout