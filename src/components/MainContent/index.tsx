import { mainContent } from "@/data/data";
import Image from "next/image";


const MainContent = () => {
    return (
        <main className="p-4 space-y-10 sm:px-20 bg-[whitesmoke] flex flex-col lg:max-w-[1000px] lg:mx-auto py-10 lg:border-x-1">
            <div className="text-center space-y-4">
                <h2 className="text-2xl">{mainContent.title}</h2>
                <p className="hidden">{mainContent.subtitle}</p>
                <div className="w-full max-w-[800px] mx-auto">
                    <Image 
                        src={mainContent.image.src} 
                        alt={mainContent.image.alt} 
                        width={1000} 
                        height={450}
                        className="w-full h-auto"
                    />
                </div>
            </div>
            <div className="space-y-2">
                <h2 className="text-xl">{mainContent.colourSystems.title}</h2>
                <p className="text-md">{mainContent.colourSystems.description}</p>
                <ul className="list-disc list-inside text-sm">
                    {mainContent.colourSystems.points.map((point, index) => (
                        <li key={index}>{point}</li>
                    ))}
                </ul>
            </div>
            <div className="space-y-2">
                <h2 className="text-xl">{mainContent.pixel.title}</h2>
                {mainContent.pixel.descriptions.map((desc, index) => (
                    <p className="text-sm" key={index}>{desc}</p>
                ))}
            </div>
            <div className="space-y-2">
                <h2 className="text-xl">{mainContent.rgbHex.title}</h2>
                <ul className="list-disc list-inside text-sm">
                    {mainContent.rgbHex.points.map((point, index) => (
                        <li key={index}>{point}</li>
                    ))}
                </ul>
            </div>
        </main>
    )
}

export default MainContent;