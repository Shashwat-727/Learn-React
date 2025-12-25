
import { MoveUpRightIcon } from 'lucide-react'


const NotesCard = (props) => {
    return (
        <>
            <div className='relative flex flex-col gap-2 p-2 w-50 h-50 rounded-2xl border bg-white/10 backdrop-blur-md '>
                <div className='relative z-1'>
                    <span className='text-blue-400 mr-2 text-[10px] uppercase'>Title</span>
                    <h4 className=' p-1 rounded-xl line-clamp-1 text-[15px] text-gray-300'>
                        {props.Title}
                    </h4>

                    <span className='text-blue-400 mr-2 text-[10px] leading-1 uppercase'>Note</span>
                    <p className='h-18 line-clamp-3 text-gray-300 rounded-xl text-[15px]'>
                        {props.Notes}
                    </p>
                    <div className='ml-12 flex justify-center bg-blue-400 w-20 h-fit rounded-full px-2'>
                        <button className='text-white' onClick={props.updat}>Delete</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default NotesCard