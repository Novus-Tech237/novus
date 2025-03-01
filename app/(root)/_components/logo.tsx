"use client"

import Image from "next/image";
import { useTheme } from 'next-themes'

const NovusLogo = () => {
    const  { theme }  = useTheme();

    return ( 
        <>
            <Image src={theme === 'dark' ? '/2.png' : '/1.png'} alt="Novus Logo" width={150} height={100} />
        </>
     );
}
 
export default NovusLogo;