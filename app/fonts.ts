import { Inter, Michroma,Ubuntu } from "next/font/google";

export const michroma = Michroma({
    weight: "400", 
    subsets: ["latin"], 
});

export const inter = Inter({
    subsets: ['latin'],
    display: 'swap',
    weight:"400",
})

export const ubuntu = Ubuntu({
    weight:"500",
    subsets:["latin"]

})



