
import React from 'react'
import './Card.css'

import { Bookmark } from 'lucide-react'

const Card = (props) => {
    return (


            <div className="card">
                <div>
                    <div className="top font-fam">
                        <img src={props.logo} alt='logo' />
                        <button>Save <Bookmark size={12} /> </button>
                    </div>
                    <div className="center font-fam">
                        <h3>{props.company} <span>{props.date}</span></h3>
                        <h2>{props.post}</h2>
                        <div className='tag'>
                            <h4>{props.tag1}</h4>
                            <h4>{props.tag2}</h4>
                        </div>
                    </div>
                </div>
                <div className="bottom font-fam">
                    <div>
                        <h3>${props.pay}/hr</h3>
                        <p>{props.location}</p>
                    </div>
                    <button>Apply Now</button>
                </div>
            </div>

    )
}

export default Card