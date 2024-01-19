"use client"
import { fadeIN } from '@/utils/motionTransitions'
import {motion} from 'framer-motion'
import { cardContent } from './Work.data'
import { useState } from 'react'
import { title } from 'process'



export function Work() {
    const [expandedIndex, setExpandendIndex] = useState<number | null> (null)

    const handleClick = (index:number) => (
        setExpandendIndex (index === expandedIndex ? -1 : index)
    )

    const cardVariants = {
        expanded: {
            with: '360px',
            opacity: 1
        },
        collapsed:{
            with: "200px",
            opacity:0.2

        }
    }
    return(
        <div className="h-screen">
            <div className="grid pb-32 md:min-h-screen mt-28 md:mt-0 place-items-center">
                <div>
                    <motion.h1 variants={fadeIN('left', 0.5)} initial='hidden' animate='show' exit='hidden' className='my-5 text-2xl md:text-4xl' >
                        Mis Ultimos <span className='text-secondary '>trabajos relizados</span>
                    </motion.h1>
                    <motion.div className='flex flex-col items-center h-full gap-5 px-5 md:flex-row ' variants={fadeIN('up',0.5)} initial='hidden' animate='show' exit='hidden'>
                    {cardContent.map(({ id, title, imageUrl, description, skills }) => (
                        <motion.div key={id} className={`card cursor-pointer h-[400px] bg-auto bg-no-repeat bg-center rounded-[20px] ${id === expandedIndex && 'expanded'}`} initial={{ opacity: 1 }} variants={cardVariants} animate={id === expandedIndex ? 'expanded' : 'collapsed'} exit={{ opacity: 1 }} transition={{ duration: 0.5 }} onClick={() => handleClick(id)} style={{backgroundImage: `url(/assets/${imageUrl})`}}>
                            <div className='flex flex-col justify-end h-full'>
                                <div className='card-footer rounded-b-[20px] bg-gray-800 bg-opacity-75 min-h-[100px] flex flex-col items-center justify-center p-3'>
                                <h2 className='text-xl text-white font-semibold text-center '>{title}</h2>
                                {id === expandedIndex && (
                                    <>
                                    <p>{description}</p>
                                    <div className='flex gap-5 mt-3'>
                                        {
                                            skills.map((data,index) => (
                                                <p key={index}>{data.icon}</p>
                                            ))
                                        }

                                    </div>

                                    
                                    </>

                                )}
                                </div>
                                
                            </div>
                        </motion.div>
                        ))}
                    </motion.div>
                </div>

            </div>
        </div>
    )
}