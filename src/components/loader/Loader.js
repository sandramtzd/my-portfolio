import React from 'react'
import { LoaderContainer, LogoWrapper} from './LoaderStyle'
import Helmet from 'react-helmet';
import anime from 'animejs';
import { useState, useEffect } from 'react';
import { ReactComponent as Logo } from '../../assets/LogoLoader.svg';

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
                strokeDasharray: [anime.setDashoffset, 0],
                easing: 'easeInOutQuart',
                duration: 1500,
                delay: (el, i) => i * 250, // Delay each path animation for a staggered effect

            })

            .add({
                targets: '#logo path',
                fill: ['rgba(251, 189, 152, 0)', 'rgba(251, 189, 152, 1)'],
                easing: 'easeInOutQuart',
                duration: 1500,
                delay: (el, i) => i * 250,
              }, '-=1500') // Start fill animation halfway through the stroke animation

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
            <Logo id='logo'/>
        </LogoWrapper>
      
    </LoaderContainer>
  )
}

export default Loader