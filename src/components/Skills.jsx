import React from 'react'
import Django from '../assets/Django.png'
import DjangoRest from '../assets/DRF.png'
import Pandas from '../assets/pandas.png'
import GitHub from '../assets/github.png'
import Reactimg from '../assets/react.png'
import HTML from '../assets/html.png'
import CSS from '../assets/css.png'
import Python from '../assets/python.png'

const Skills = () => {
  return (
    <div name="skills" className='w-full h-screen bg-[#0a192f]'>
        <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full text-gray-300'>
            <div>
                <p className='text-4xl font-bold border-b-4 border-pink-600'>Skills</p>
                <p className='py-4'>// These are the technologies I've worked with</p>
            </div>

            <div className='w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8'>
            <div>
                    <img className='w-20 mx-auto hover:scale-110 duration-500' src={Python} alt="Git Icon" />
                    <p className='my-4'>PYTHON</p>
                </div>
                <div>
                    <img className='w-20 mx-auto hover:scale-110 duration-500' src={Pandas} alt="Pandas Icon" />
                    <p className='my-4'>PANDAS</p>
                </div>
                <div>
                    <img className='w-20 mx-auto hover:scale-110 duration-500' src={Django} alt="Django Icon" />
                    <p className='my-4'>DJANGO</p>
                </div>
                <div>
                    <img className='w-20 mx-auto hover:scale-110 duration-500' src={DjangoRest} alt="DjangoRest Icon" />
                    <p className='my-4'>DJANGO REST</p>
                </div>
                <div >
                    <img className='w-20 mx-auto hover:scale-110 duration-500' src={GitHub} alt="SQL Icon" />
                    <p className='my-4'>GITHUB</p>
                </div>
                <div>
                    <img className='w-20 mx-auto hover:scale-110 duration-500' src={HTML} alt="HTML Icon" />
                    <p className='my-4'>HTML</p>
                </div>
                <div>
                    <img className='w-20 mx-auto hover:scale-110 duration-500' src={CSS} alt="CSS Icon" />
                    <p className='my-4'>CSS</p>
                </div>
                <div>
                    <img className='w-20 mx-auto hover:scale-110 duration-500' src={Reactimg} alt="Git Icon" />
                    <p className='my-4'>REACT</p>
                </div>
            </div>
            

        </div>
    </div>
  )
}

export default Skills