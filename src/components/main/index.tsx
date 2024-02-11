import imgHeader from '../../assets/vector.svg'
import Card from "../card";
const Main = () => {
  return ( 
    <div className="bg-[#1B1D1F] flex flex-col items-center justify-center w-3/4 m-auto h-screen fixed lg:top-96 md:top-32 inset-0 top-14 rounded-lg">

      <div className="flex flex-col items-center justify-center m-8 overflow-hidden pb-5">       
        {/* <img className="absolute top-[15%] -right-28 md:right-9 md:top-40" src={imgHeader} alt="" /> */}
        <h1 className="text-[32px] text-[#FEF7EE] font-sans ">Our Collection </h1>
        <p className="text-[#6F757C] text-[16px] w-8/12 lg:w-7/12 font-sans">Introducing our Coffee Collection, a selection of unique coffees from different roast types and origins, expertly roasted in small batches and shipped fresh weekly.</p>        
        <div className="flex gap-3 text-sm mt-5">
          <button className="bg-[#6F757C] p-2  rounded-md" >All Products</button>
          <button className="bg-[#6F757C] p-2 rounded-md" >Available Now</button>
        </div>
      </div>

      <Card />
    </div>
   );
}
 
export default Main;
// absolute md:top-[5.5rem]  inset-x-2/4