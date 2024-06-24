import Image from "next/image"
import Link from "next/link";
import { GiCarDoor } from "react-icons/gi";
import { TbManualGearboxFilled } from "react-icons/tb";
import { LuBaggageClaim } from "react-icons/lu";

interface CarDetailCardProps {
    name: string
    seats: number
    shift: string
    bags: number
    price: string
    imageUrl: string
}

export default function CarDetailCard({ name, seats, shift, bags, price, imageUrl }: CarDetailCardProps) {
    return (
        <>
            <div className='my-12 flex justify-center align-middle items-center'>
                <div>
                    <div className="flex flex-col justify-center items-center px-4 md:px-0">
                        <Image src={imageUrl} width={576} height={324} alt={name} className={`transform transition duration-300 ease-in-out hover:scale-[1.01] rounded-[30px]`} />
                            <div className={`z-10 flex items-center justify-center w-[400px] md:w-[520px] md:h-[100px] bg-[#f2f2f2] rounded-2xl mt-[-50px]`}>
                                <div className='flex flex-col md:flex-row md:justify-between items-start md:items-center w-full h-full px-[25px] py-[25px]'>
                                    <div className='flex flex-col md:pb-0 pb-2.5'>
                                        <h2 className='text-[22px] font-bold text-black'>{name}</h2>
                                        <div className='flex justify-center items-center gap-1.5'>
                                            <GiCarDoor className='text-[16px] md:ml-2 text-yellow-general'/> <span className='text-[14px] text-gray-400'>{seats}</span>
                                            <TbManualGearboxFilled className='text-[16px] ml-2 text-yellow-general'/> <span className='text-[14px] text-gray-400'>{shift}</span>
                                            <LuBaggageClaim className='text-[16px] ml-2 text-yellow-general'/> <span className='text-[14px] text-gray-400'>{bags}</span>
                                        </div>
                                    </div>
                                    <div className='flex justify-center items-center'>
                                        <Link href={`/carDetail`}>
                                            <button className='flex justify-center items-center text-center text-[14px] hover:text-white hover:bg-black text-black-background bg-yellow-general rounded-[20px] px-[14px] py-[21px] w-[86px] h-[50px]'>
                                                    Details
                                            </button>
                                        </Link>
                                        <div className='flex flex-col justify-center items-center ml-6'>
                                            <span className='text-[22px] font-bold text-yellow-general'>{price}</span>
                                            <span className='text-[14px] text-gray-400'>/day</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                    </div>
                </div>
            </div>
        </>
    )
}