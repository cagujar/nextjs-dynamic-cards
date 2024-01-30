import Image from "next/image";
import cardList from './data';

export default function Home() {
  return (
    <div>
      <main className="container py-36 mx-auto px-8 bg-slate-100 text-gray-900">
        <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-6">
          {cardList.map(card => (
            <div className="shadow-lg">
              <img src={card.img} alt="" className="rounded-t-lg" />
              <div className="p-5">
                <h3 className="text-3xl font-bold mb-3">{card.title}</h3>
                <p>{card.text}</p>
              </div>
             
            </div>
          ))}
        </div>
        
      </main>
    </div>
  );
}
