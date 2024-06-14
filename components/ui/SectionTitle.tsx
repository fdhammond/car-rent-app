interface SectionTitleProps {
    topTitle: string
    bottomTitleBlack: string
    bottomTitleYellow: string
}

export default function SectionTitle({topTitle, bottomTitleBlack, bottomTitleYellow}: SectionTitleProps) {
    return (
        <>
            <div className="text-center mb-4">
                <h2 className="text-yellow-general tracking-[6px] uppercase text-xs">{topTitle}</h2>
            </div>
            <div className="text-center">
                <h2 className="text-4xl font-bold text-yellow-general"><span className="text-black">{bottomTitleBlack}</span> {bottomTitleYellow}</h2>
            </div>
        </>
    )
}