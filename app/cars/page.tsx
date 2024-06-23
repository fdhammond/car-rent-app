import CarDetailCard from "@/components/ui/CarDetailCard";
import LineSeparator from "@/components/ui/LineSeparator";
import Image from "next/image";

export default function Cars() {
    const cars = [
        {
            name: "Aston Martin DBX",
            imageUrl: "https://utfs.io/f/78c56d60-a3df-47e0-a1cf-2af1ac3d72ad-17j.jpg",
            seats: 4,
            shift: "Auto",
            bags: 2,
            price: "$500"
        },
        {
            name: "Lamborghini Urus",
            imageUrl: "https://utfs.io/f/6eb95a37-8da4-487d-b08a-31deb104de7d-17l.jpg",
            seats: 4,
            shift: "Auto",
            bags: 2,
            price: "$750"
        },
        {
            name: "Audi Q8",
            imageUrl: "https://utfs.io/f/419a193c-9dc3-43d4-b360-467b12fa1997-17k.jpg",
            seats: 4,
            shift: "Auto",
            bags: 2,
            price: "$450"
        },
        {
            name: "Bentley Continental",
            imageUrl: "https://utfs.io/f/53577742-e036-4515-8f2b-4cd190a68b6d-17m.jpg",
            seats: 4,
            shift: "Auto",
            bags: 2,
            price: "$500"
        },
        {
            name: "Bugatti Mistral W16",
            imageUrl: "https://utfs.io/f/b1be3e38-4e2d-4d0e-bbb8-395aa47e9ec6-17n.jpg",
            seats: 2,
            shift: "Auto",
            bags: 2,
            price: "$800"
        },
        {
            name: "Audi RS7 Sportback",
            imageUrl: "https://utfs.io/f/0bdb50fa-af30-45ac-9e83-7b7dc076718a-17n.jpg",
            price: "$600",
            seats: 4,
            shift: "Auto",
            bags: 2,
        }
    ];
    return (
        <>
            <div className="relative flex w-full h-[661px]">
                <div className="relative w-full h-full">
                    <Image
                        src="https://utfs.io/f/16adb06e-9196-47a3-8b59-98dc0fef8ac9-23tg.jpg"
                        alt="car detail"
                        layout="fill"
                        objectFit="cover"
                        className="rounded-lg"
                    />
                    <div className="absolute inset-0 bg-black bg-opacity-50"></div>
                    <div className="absolute inset-0 flex flex-col items-center justify-center">
                        <div className="text-center mb-[4px]">
                            <h2 className="text-yellow-general tracking-[6px] uppercase text-xs">Luxury Cars</h2>
                        </div>
                        <div className="md:pl-[12px] pl-[8px] text-center">
                            <h2 className="text-[42px] font-bold text-white">Bentley Bentayga</h2>
                        </div>
                    </div>
                </div>
            </div>

            <LineSeparator />

            <div className="w-full h-full flex flex-wrap justify-center align-center gap-x-[40px] py-[120px] md:px-[100px]">
                {
                    cars.map((car, index) => (
                        <div key={index}>
                            <CarDetailCard {...car} />
                        </div>
                    ))
                }
            </div>

            <LineSeparator />
        </>
    )
}