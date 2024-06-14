'use client'
import './styles.css'
import SectionTitle from './../ui/SectionTitle';
import CarouselThreeBoxesWithButton from '../ui/CarouselThreeBoxesWithButton';
export default function WhatWeDo() {

const services = [
    { image: "https://utfs.io/f/ba6ce0ed-9e89-49b2-b10d-a21559193646-1d.jpg", text: "Corporate Car Rental", order: "01" },
    { image: "https://utfs.io/f/99ffba94-e802-40b0-b59c-53946e8dcb4a-1e.jpg", text: "Car Rental with Driver", order: "02" },
    { image: "https://utfs.io/f/f3f6d3eb-038e-4e8e-aa3e-c7a6fe65d396-1f.jpg", text: "Airport Transfer", order: "03" },
    { image: "https://utfs.io/f/434e431a-9be9-4be4-9a4f-041b17875d27-1g.jpg", text: "Fleet Leasing", order: "04" },
    { image: "https://utfs.io/f/edda028d-c3de-4e13-863a-0dd4091f51b4-1h.jpg", text: "VIP Transfer", order: "05" },
    { image: "https://utfs.io/f/065e05b2-3605-453d-994b-0d5c05382255-1i.jpg", text: "Private Transfer", order: "06" }
];

    return (
        <>
            <section className="py-[120px] w-full mb-[25px]">
                <SectionTitle
                    topTitle="What we do"
                    bottomTitleBlack="Our"
                    bottomTitleYellow="Services"
                />
                <CarouselThreeBoxesWithButton
                    services={services}
                />
            </section>
        </>
    )
}