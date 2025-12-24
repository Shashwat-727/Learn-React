import {React} from 'react'
import NavBar from './NavBar'
import Page1Content from './Page1Content'

const Section1 = () =>{
    return(
        <>
            <div className='h-screen w-full bg-white'>  
                {/* <h1 className='text-white'>Hello</h1> */}
                <NavBar />
                <Page1Content />
            </div>
        </>
    )
}

export default Section1