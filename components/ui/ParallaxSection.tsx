'use client'

interface ParallaxSectionProps {
    parallaxHeight: string
    parallaxBackgroundUrl: string
    children: React.ReactNode
}

export default function ParallaxSection({parallaxHeight, parallaxBackgroundUrl, children}: ParallaxSectionProps) {
    return (
        <div>
            <div className={`relative ${parallaxHeight} overflow-hidden`}>
                <div className="absolute top-0 left-0 w-full h-full bg-fixed bg-cover bg-center" style={{ backgroundImage: `url(${parallaxBackgroundUrl})`, zIndex: -1 }}></div>
                <div className="absolute top-0 left-0 w-full h-full bg-black opacity-50 transition-opacity duration-500"></div>
                <div className="relative h-full flex justify-center items-center">
                    {children}
                </div>
            </div>
        </div>
    );
}
