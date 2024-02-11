import { PropsWithChildren } from "react";
import star from '../../assets/Star.svg'
import starfILL from '../../assets/Star_fill.svg'
import { ICoffelist } from './../main/index';

interface CardsPRops  {
  coffe: ICoffelist
}



const Card = ({coffe} : CardsPRops) => {
  return ( 
    <div>
      <span className="absolute bg-[#F6C768] font-sans font-bold mt-2 ml-2 px-3 text-xs rounded-full">Popular</span>
      <img className="rounded-lg" src="https://csyxkpbavpcrhwqhcpyy.supabase.co/storage/v1/object/public/assets/coffee-challenge/house-coffee.jpg" alt="" />
      <div className="flex justify-between items-center mt-3  font-sans font-bold ">
      <span className="text-slate-100">{coffe.name}</span> 
      <span className="bg-[#BEE3CC] p-1 rounded-md text-[#111315] text-sm">$5.20</span>
      </div>
      <div>
        <span>Estrela</span>
        <span>(65 votes)</span>
        <span>Sold out</span>
      </div>

    </div>
   );
}
 
export default Card;