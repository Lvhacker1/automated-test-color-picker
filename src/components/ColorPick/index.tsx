import { ColorPickProps } from "@/types/types"

const ColorPick = ( {color, colorHeading, onClick}: ColorPickProps) => {
    return (
        <div className="h-screen w-screen text-white flex items-center justify-center" style={{ backgroundColor: color }}>
            <div className="bg-black/50 py-8 px-15 rounded-md text-center flex flex-col items-center gap-2"> 
                <h2 className="order-2 text-2xl">{color}</h2>
                <h3 className="order-1 font-bold text-2xl md:text-3xl mb-10">{colorHeading}</h3>
                <a onClick={onClick} href="#" className="order-3 mt-4 inline-block bg-[whitesmoke] hover:bg-white text-black font-bold py-2 px-4 rounded cursor-pointer">
                    Click me!
                </a>
            </div>
        </div>
    )
}

export default ColorPick