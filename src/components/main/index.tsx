import { useEffect, useState } from "react";
import Card from "../card";

export interface ICoffelist {
  id: number,
  name: string,
  image: string,
  price: string,
  rating: number,
  votes: number,
  popular: boolean,
  available: boolean
}


const Main = () => {
  const [coffeList, setCoffeList] = useState<ICoffelist[]>([]);
  const [filtered, setFiltered] = useState(false)

  useEffect(() => {
    getData()
  }, [])

  useEffect(() => {
    onFilter()
  }, [filtered])

  function getData() {
    fetch('https://raw.githubusercontent.com/devchallenges-io/web-project-ideas/main/front-end-projects/data/simple-coffee-listing-data.json')
      .then(response => response.json())
      .then((data: ICoffelist[]) => {
        setCoffeList(data)
      })
      .catch(error => {
        console.log(error)
      })
  }

  function onFilter() {
    const itemsFiltered = coffeList.filter((coffe) => coffe.available)
    if (filtered) {
      setCoffeList(itemsFiltered)
    } else {
      getData()
    }
  }

  return (
    <div className="bg-[#1B1D1F] flex flex-col absolute items-center justify-center w-3/4 top-16 right-16 md:top-28 md:right-28 lg:top-48 lg:right-48 rounded-lg">

      <div className=" w-full md:w-3/4 m-auto">
        <div className="flex flex-col items-center justify-center m-8">
          {/* <img className="absolute top-[15%] -right-28 md:right-9 md:top-40" src={imgHeader} alt="" /> */}
          <h1 className="text-[32px] text-[#FEF7EE] font-sans ">Our Collection </h1>
          <p className="text-[#6F757C] text-[16px] w-full md:w-8/12 font-sans">Introducing our Coffee Collection, a selection of unique coffees from different roast types and origins, expertly roasted in small batches and shipped fresh weekly.</p>
          <div className="flex gap-3 text-sm mt-5">
            <button className={`p-2 rounded-md hover:bg-slate-500 ${!filtered? 'bg-[#6F757C]': ''} `} onClick={() => setFiltered(false)} >All Products</button>
            <button className={`p-2 rounded-md hover:bg-slate-500 ${filtered? 'bg-[#6F757C]': ''} `}onClick={() => setFiltered(true)} >Available Now</button>
          </div>
        </div>
      </div>

      <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-10 mb-20">
        {coffeList.map((coffe) => (
          <Card key={coffe.id} coffe={coffe} />
        ))}
      </div>

    </div>
  );
}

export default Main;
