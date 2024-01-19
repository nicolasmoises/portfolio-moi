import { fadeIN } from '@/utils/motionTransitions'
import {motion } from 'framer-motion'
import Image from 'next/image'


export function Avatar() {
    return (
        <motion.div variants={fadeIN('left',0.5)} className='bottom-0 right-0 hidden md:inline-block md:absolute'>
            <Image src='/assets/avatar-1.png' width="400" height="400" className='w-full h-full' alt='particles' ></Image>
        </motion.div>
    )
}