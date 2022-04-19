import React from 'react'
import Member from './member'

const AboutUs: React.FC = () => {
    return (
        <section className={`flex flex-col bg-white py-20 text-3xl md:text-4xl`}>
        <div className='container mx-auto px-11'>
            <p className="leading-tight max-w-5xl mx-auto text-4xl tracking-tight">
                <strong>Lorem ipsum dolor sit amet, consectetur adipiscing elit. </strong>
                Aliquam lorem neque, malesuada vitae interdum et, pretium nec odio. Nam dictum tellus ex, non bibendum lorem laoreet sit amet.
            </p>
        </div>
        <div className="container mx-auto px-11 text-center mt-28">
            <h2 className="mb-20"><strong>Our Team</strong></h2>
            <div className="mt-10 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6 lg:gap-20">
            <Member id="charmander" name="Charlie" socialId="" link="Austin"/>
            <Member id="squirtle" name="Alan" socialId="" link=""/>
            <Member id="jigglypuff" name="Samantha" socialId="" link=""/>
            <Member id="pikachu" name="Greg" socialId="" link=""/>
            <Member id="psyduck" name="Courtney" socialId="" link=""/>
          
            
            </div>
        </div>
        </section>
    )
}

export default AboutUs