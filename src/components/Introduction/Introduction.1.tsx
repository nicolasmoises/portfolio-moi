import { fadeIN } from '@/utils/motionTransitions';
import { motion } from 'framer-motion';
import Image from 'next/image';


export function Introduction() {
    return (
        <div className="bg-[#131424]/60 w-full z-10">
            <div className="w-full h-full bg-gradient-to-r from-[#131424] to-black/10 ">
                <div className="container grid items-center h-full px-5 mx-auto md:auto md:grid-cols-2 md:text-left">
                    <motion.div className='hidden w-auto h-auto mx-auto md:block' variants={fadeIN('right', 0.5)} initial='hidden' animate='show' exit='hidden'>
                        <Image src='/assets/home-4.png' priority width='800' height='600' alt='avatar'/>
                    </motion.div>
                    <motion.div variants={fadeIN('left', 0.2)} initial='hidden' animate='show' exit='hidden'>
                        <h1 className='mb-5 text-4xl leading-tight md:mb-10'>¡Hola, soy <br /><span className='text-secondary'>Jorge Nicolas Moises!</span></h1>
                        <p className='max-w-max  mb-10 text-xl md:max-w-2xl md:mx-0 md:mb-16 md:text-xl'>Apasionado por la creación de soluciones web innovadoras y funcionales. Con más de 2 años de experiencia, he trabajado en proyectos diversos utilizando tecnologías como JavaScript, React.js, Laravel y más</p>
                        <div className='flex flex-col items-center gap-3 md:gap-10 md:flex-row'>
                            <a href="/works" className='px-6 py-6 my-2 transition-all border-2 cursor-pointer w-fit rounded-xl hover:shadow-xl hover:shadow-white/50  '> ver proyectos</a>
                            {/* <a href="/contact" className='px-6 py-3 my-2 transition-all border-2 cursor-pointer text-secondary border-secondary rounded-xl hover:shadow-xl hover:shadow-secondary '>contacta conmigo</a> */}
                        </div>

                    </motion.div>
                </div>

            </div>
            introduccion
        </div>
    );
}
