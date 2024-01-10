import React from 'react'
import { LoaderContainer, Logo } from './LoaderStyle'
import Helmet from 'react-helmet';
import anime from 'animejs';
import { useState } from 'react';
import Logo from '../../assets/favicon.ico'

const Loader = ({finishLoading}) => {
    const animate = () => {
        const loader = anime.timeline ({
            complete: () => finishLoading(),
        });

        loader
            .add ({
                targets: '#favicon path',
                delay: 300,
                duration: 1500,
                easing: 'easeInOutQuart',
                strokeDashoffset: [anime.setDashoffset, 0],

            })

            .add ({
                targets: '#favicon #B',
                duration: 700,
                easing: 'easeInOutQuart',
                opacity: 1,
            })

            .add ({
                targets: '#favicon',
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

    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
        const timeout = setTimeout(() => setIsMounted(true), 10);
        animate();
        return () => clearTimeout(timeout);
      }, []);

  return (
    <LoaderContainer className='loader'>
        <Helmet bodyAttributes={{ class: `hidden` }}/>
        <Logo isMounted ={isMounted}>
            <img src={Logo} alt='hummingbird'/>
        </Logo>
      
    </LoaderContainer>
  )
}

export default Loader