import { ColorPickProps } from "@/types/types"

const ColorPick = ( {color, colorHeading, onClick}: ColorPickProps) => {
    return (
        <div style={{backgroundColor: color, height: '100vh', color: '#fff', textAlign: 'center', paddingTop: '20vh'}}>
            <div style={{backgroundColor: 'rgba(0, 0, 0, 0.5)', display: 'inline-block', padding: '30px', borderRadius: '5px'}}> 
                <h2>{color}</h2>
                <h3>{colorHeading}</h3>
                <a onClick={onClick} href="#" style={{color: '#fff', textDecoration: 'none', cursor: 'pointer', border: '1px solid white', borderRadius: '2px', padding: '10px', display: 'inline-block', fontWeight: 'bold'}}>
                    Click me!
                </a>
            </div>
        </div>
    )
}

export default ColorPick