import { AgriDroneBanner } from "../assets/assets"

const Banner = () => {
  return (
    <div className='md:h-[60vh] h-[80vh] w-full'>
      <img src={AgriDroneBanner} alt="" className='h-full w-full object-cover'/>
    </div>
  )
}

export default Banner
