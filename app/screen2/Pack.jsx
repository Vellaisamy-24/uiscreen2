import Image from "next/image"
import img from '../public/Big-Daddy-Casino.jpg'
import pin from '../public/pin.svg'

export default function Pack()
{
    return (
       
       <div className="flex  flex-row justify-center " >
            <div className="h-packborderheight mt-4 w-packborderwidth p-3 border border-packbordercolor rounded-lg flex flex-row" >
                    <Image src={img} alt="" className="h-packimgheight w-packimgwidth shadow-packimgshadow rounded-lg"/>
                    <div>
                    <div className="px-3">
                        <p className=" h-3 text-packtextcolor text-xs font-medium font-normal font-Montserrat">Our Manali best itenary story</p>
                    </div>
                    <div className="pl-2.5 flex flex-row items-center pt-2.5">
                        <span className="">
                        <Image src={pin} alt="" />

                        </span>
                        <p className=" pl-1 font-Inter text-xs font-normal font-normal text-packplacecolor">Shimla, Manali</p>

                        <span className="pl-14">
                        <span className="h-7 w-packbtnwidth bg-packbtn rounded-lg flex justify-center items-center">
                            <p className="text-xs font-semibold font-Inter font-normal text-white">View</p>
                        </span>
                        </span>
                    </div>
                    </div>
            </div>
            </div>     
)

}