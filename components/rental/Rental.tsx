'use client'
import { Parallax, ParallaxLayer } from '@react-spring/parallax';

export default function Rental() {
    return (
        <div className="w-full">
            <Parallax pages={1}>
                <ParallaxLayer
                    offset={0}
                    speed={0.5} // Adjust the speed as needed to achieve the desired parallax effect
                    style={{
                        backgroundImage: 'url(https://duruthemes.com/demo/html/renax/light/img/slider/2.jpg)',
                        backgroundSize: 'cover',
                        maxHeight: '440px',
                        backgroundPosition: 'center',
                        height: '100vh', // Set the height to fill the viewport
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                    }}
                >
                    <h1 className='text-center text-[90px] font-bold text-black'>Hello</h1>
                </ParallaxLayer>
            </Parallax>
        </div>
    );
}
