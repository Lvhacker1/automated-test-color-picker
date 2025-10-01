import { mainContent } from "@/data/data";
import Image from "next/image";


const MainContent = () => {
    return (
        <main>
            <section>
                <h2></h2>
                <p></p>
                <Image src={mainContent.image.src} alt={mainContent.image.alt} />
            </section>
            <section>
                <h3></h3>
                <p></p>
                <ul>
                    <li></li>
                </ul>
            </section>
            <section>
                <h3></h3>
                <p></p>
            </section>
            <section>
                <h3></h3>
                <ul>
                    <li></li>
                </ul>
            </section>
        </main>
    )
}

export default MainContent;