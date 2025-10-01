import { mainContent } from "@/data/data";
import Image from "next/image";


const MainContent = () => {
    return (
        <main>
            <div>
                <h1>{mainContent.title}</h1>
                <p>{mainContent.subtitle}</p>
                <Image src={mainContent.image.src} alt={mainContent.image.alt} width={700} height={400} />
            </div>
            <div>
                <h2>{mainContent.colourSystems.title}</h2>
                <p>{mainContent.colourSystems.description}</p>
                <ul>
                    {mainContent.colourSystems.points.map((point, index) => (
                        <li key={index}>{point}</li>
                    ))}
                </ul>
            </div>
            <div>
                <h2>{mainContent.pixel.title}</h2>
                {mainContent.pixel.descriptions.map((desc, index) => (
                    <p key={index}>{desc}</p>
                ))}
            </div>
            <div>
                <h2>{mainContent.rgbHex.title}</h2>
            </div>
        </main>
    )
}

export default MainContent;