import "./Banner.css"
import { NeonGradientCard } from "../magicui/neon-gradient-card"
import Tilty from 'react-tilty'
import BannerImage from '../../assets/Banner.jpg'
function Banner() {
  return (
    
      <div className="banner-super py-40 px-60">
        {/* <Tilty reverse={true} max={4}  > */}
        
        <NeonGradientCard>
          {/* <img src={BannerImage} alt="" className=" rounded-3xl"/> */}
        <div className="banner-container rounded-3xl p-4">
          <img src={BannerImage} alt="" className=" rounded-3xl"/>
        </div>
        {/* <h1 className="text-5xl">Hello world</h1> */}
        </NeonGradientCard>
        {/* </Tilty> */}
      
        
     </div>
    
    
  )
}

export default Banner