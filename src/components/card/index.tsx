import star from '../../assets/Star.svg'
import starfILL from '../../assets/Star_fill.svg'
import { ICoffelist } from './../main/index';

interface CardsPRops {
  coffe: ICoffelist  
}



const Card = ({ coffe }: CardsPRops) => {
  return (
    <div>
      <span className={`absolute bg-[#F6C768] font-sans font-bold mt-2 ml-2 px-3 text-xs rounded-full ${coffe.popular ? '' : 'hidden'}`}>Popular</span>
      <img className="rounded-lg" src={coffe.image} alt="" />
      <div className="flex justify-between items-center mt-3  font-sans font-bold ">
        <span className="text-slate-100">{coffe.name}</span>
        <span className="bg-[#BEE3CC] p-1 rounded-md text-[#111315] text-sm">{coffe.price}</span>
      </div>
      <div className="flex items-center justify-between mt-2">
        <div className="flex">
          <span><img src={coffe.rating ? starfILL : star} alt="star" /></span>
          <span className="text-[#FEF7EE] font-bold mr-1">{coffe.rating} </span>
          <span className="text-[#6F757C]">{` (${coffe.votes ? coffe.votes + ' votes' : 'No Ratings'})`}</span>
        </div>
        <span className={`text-[#ED735D] ${coffe.available ? 'hidden' : ''}`}>Sold out</span>
      </div>

    </div>
  );
}

export default Card;