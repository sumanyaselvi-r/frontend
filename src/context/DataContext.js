import { createContext } from "react";
import Image1 from "../images/ATM.jpg";
import image2 from "../images/5G POWER_.jpg";
import Image3 from "../images/BENZ.jpg";
import Image4 from "../images/BLACK GOLD.jpg"
import Image5 from "../images/CHARGE.jpg";
import Image6 from "../images/ENERGY.jpg";
import Image7 from "../images/OSCARR.jpg";
import Image8 from "../images/RADAR.jpg";
import Image9 from "../images/RDX.jpg";
import Image10 from "../images/WHITE OUT.jpg";
import Image11 from "../images/TITANIC.jpg";
import Image12 from "../images/UMBRELLA.jpg";
import Image13 from "../images/XXX SUPER.jpg";
import Image14 from "../images/RED OUT.jpg";
import map from "../images/map.jpg"
import email from "../images/em.png"
import phone from "../images/ph.jpg"


const DataContext =createContext({})
export const DataProvider =({children})=>{
    
  const product = [{
    id: 1,
    title: 'Recommended Crops: ',
    description:'Brinjal,Pulses,Cotton,Chillies,  Cucumber,Bhendi,Jasmine,  Beans,  Paddy and Horticultural Crops.',
    image:Image1

  },
  {
    id: 2,
    title: 'Recommended Crops: ',
    description:'All crops.',
    image:image2
  },
  {
    id: 3,
    title: 'Recommended Crops: ',
    description:'Jasmine,Pulses,Cotton,Paddy & Horticultural crops.',
    image:Image3

  },
  {
    id: 4,
    title: 'Recommended Crops: ',
    description:'8-16 kg per 1 acre',
    image:Image4

  },
  {
    id: 5,
    title: 'Recommended Crops: ',
    description:'Used as pesticide formulations,or as a tank mix.',
    image:Image5

  },
  {
    id: 6,
    title: 'Recommended Crops: ',
    description:'Cotton,Tomato,  Chrysanthemum & Crossandra.',
    image:Image6

  },
  {
    id: 7,
    title: 'Recommended Crops: ',
    description:'Herbal Extracter',
    image:Image7

  },
  {
    id: 8,
    title: 'Recommended Crops: ',
    description:'All agricultural and horticultural crops.',
    image:Image8

  },
  {
    id: 9,
    title: 'Recommended Crops: ',
    description:'Jasmine,Pulses,Cotton,Paddy & Horticultural crops.',
    image:Image9

  },
  {
    id: 10,
    title: 'Recommended Crops: ',
    description:'Jasmine,Pulses,Cotton,Paddy & Horticultural crops.',
    image:Image10

  },
  {
    id: 11,
    title: 'Recommended Crops: ',
    description:'All agricultural and horticultural crops.',
    image:Image11

  },
  {
    id: 12,
    title: 'Recommended Crops: ',
    description:'Improves penetration and adherence to insect cuticle.',
    image:Image12

  },
  {
    id: 13,
    title: 'Recommended Crops: ',
    description:'Brinjal,Jasmine,Pulses,  Cotton,  Paddy & Horticultural',
    image:Image13

  },
  {
    id: 14,
    title: 'Recommended Crops: ',
    description:'Jasmine,Pulses,Cotton,Paddy & Horticultural crops.',
    image:Image14

  },
  

]
const contactDetails=[{
    id:1,
    cimage:map,
    details:`GALAXY BIO TECH,
    10/10H2, Sankarankoil Main Road,<br/>
    Ramayanpatti, Sankumuttammalpuram,<br/>
    Tirunelveli, Tamilnadu-627358`

},
{
    id:2,
    cimage:email,
    details:"info@galaxybiotech.co.in",

},
{
    id:3,
    cimage:phone,
    details:"0462 325222 & +91-94890 49452"

}
]


return (<DataContext.Provider value={{product,contactDetails}}>
    {children}
</DataContext.Provider>)
}
export default DataContext