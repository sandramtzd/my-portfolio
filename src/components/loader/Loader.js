import React from 'react'
import { LoaderContainer, LogoWrapper } from './LoaderStyle'
import Helmet from 'react-helmet';
import anime from 'animejs';
import { useState, useEffect } from 'react';
import Logo from '../../assets/Logo.svg'

const Loader = ({finishLoading}) => {
    const [isMounted, setIsMounted] =useState(false);

    useEffect(() => {
        const timeout = setTimeout(() => setIsMounted(true), 10);
        animate();
        return () => clearTimeout(timeout);
      }, []);


    const animate = () => {
        const loader = anime.timeline ({
            complete: () => finishLoading(),
        });

        loader
            .add ({
                targets: '#logo path',
                delay: 300,
                duration: 1500,
                easing: 'easeInOutQuart',
                strokeDashoffset: [anime.setDashoffset, 0],

            })

            .add ({
                targets: '#logo #B',
                duration: 700,
                easing: 'easeInOutQuart',
                opacity: 1,
            })

            .add ({
                targets: '#logo',
                delay: 500,
                duration: 300,
                easing: 'easeInOutQuart',
                opacity: 0,
                scale: 0.1,
            })

            .add ({
                targets: '.loader',
                duration: 200,
                easing: 'easeInOutQuart',
                opacity: 0,
                zIndex: -1,
            });
    };


  return (
    <LoaderContainer className='loader' isMounted={isMounted}>
        <Helmet bodyAttributes={{ class: `hidden` }}/>

        <LogoWrapper isMounted ={isMounted}>
            <img src={Logo} alt='hummingbird'/>
        </LogoWrapper>
      
    </LoaderContainer>
  )
}

export default Loader