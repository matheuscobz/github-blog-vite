import banner from './assets/Banner.svg';
import Card from './components/Card';

export default function Home() {


  return (
    <main className="h-full bg-[#071422] flex flex-col">
      <img className="w-full" src={banner} alt="Banner" />

      <div className="w-min-[]] flex flex-col items-center">        
        <Card />


      </div>
      
      
        <div className="flex flex-col px-72 gap-3">
          <div className="flex justify-between">
              <p className="text-[#C4D4E3] text-lg font-bold tracking-wider">Publicações</p>
              <p className="text-[#7B96B2]">6 publicações</p>
          </div>
          <label htmlFor="">
            <input type="text" className="bg-transparent border-2 border-[#1C2F41] rounded-lg px-3 py-4 min-w-1/2 w-full placeholder:text-[#3A536B] mb-12" placeholder="Buscar conteúdo" />
          </label>

          <div className="grid grid-cols-2 gap-8 text-[#E7EDF4] mb-12">
            <div className="bg-[#112131] p-8 rounded-lg h-[260px] w-auto">
              <div className="flex justify-between">
                <h1 className="text-xl font-bold mb-5 ">JavaScript data types and data structures</h1>
                <span className="text-[#7B96B2] whitespace-nowrap pt-1">Há 1 dia</span>
              </div>
              <p className="text-[#AFC2D4] overflow-hidden text-ellipsis" style={{ display: '-webkit-box', WebkitBoxOrient: 'vertical', WebkitLineClamp: 5 }}>
                Programming languages all have built-in data structures, but these often differ from one language to another. This article attempts to list the built-in data structures available in JavaScript and what properties they have. These can be used to build other data structures. Wherever possible, comparisons with other languages are drawn. Dynamic typing JavaScript is a loosely typed and dynamic language. Variables in JavaScript are not directly associated with any particular value type, and any variable can be assigned (and re-assigned) values of all types: let foo = 42; // foo is now a number foo = 'bar'; // foo is now a string foo = true; // foo is now a boolean
              </p>
            </div>

            <div className="bg-[#112131] p-8 rounded-lg h-[260px] w-auto">
              <div className="flex justify-between">
                <h1 className="text-xl font-bold mb-5 ">JavaScript data types and data structures</h1>
                <p className="text-[#7B96B2] whitespace-nowrap pt-1">Há 1 dia</p>
              </div>
              <p className="text-[#AFC2D4] overflow-hidden text-ellipsis" style={{ display: '-webkit-box', WebkitBoxOrient: 'vertical', WebkitLineClamp: 5 }}>
                Programming languages all have built-in data structures, but these often differ from one language to another. This article attempts to list the built-in data structures available in JavaScript and what properties they have. These can be used to build other data structures. Wherever possible, comparisons with other languages are drawn. Dynamic typing JavaScript is a loosely typed and dynamic language. Variables in JavaScript are not directly associated with any particular value type, and any variable can be assigned (and re-assigned) values of all types: let foo = 42; // foo is now a number foo = 'bar'; // foo is now a string foo = true; // foo is now a boolean
              </p>
            </div>

            <div className="bg-[#112131] p-8 rounded-lg h-[260px] w-auto">
              <div className="flex justify-between">
                <h1 className="text-xl font-bold mb-5 ">JavaScript data types and data structures</h1>
                <p className="text-[#7B96B2] whitespace-nowrap pt-1">Há 1 dia</p>
              </div>
              <p className="text-[#AFC2D4] overflow-hidden text-ellipsis" style={{ display: '-webkit-box', WebkitBoxOrient: 'vertical', WebkitLineClamp: 5 }}>
                Programming languages all have built-in data structures, but these often differ from one language to another. This article attempts to list the built-in data structures available in JavaScript and what properties they have. These can be used to build other data structures. Wherever possible, comparisons with other languages are drawn. Dynamic typing JavaScript is a loosely typed and dynamic language. Variables in JavaScript are not directly associated with any particular value type, and any variable can be assigned (and re-assigned) values of all types: let foo = 42; // foo is now a number foo = 'bar'; // foo is now a string foo = true; // foo is now a boolean
              </p>
            </div>

            <div className="bg-[#112131] p-8 rounded-lg h-[260px] w-auto">
              <div className="flex justify-between">
                <h1 className="text-xl font-bold mb-5 ">JavaScript data types and data structures</h1>
                <p className="text-[#7B96B2] whitespace-nowrap pt-1">Há 1 dia</p>
              </div>
              <p className="text-[#AFC2D4] overflow-hidden text-ellipsis" style={{ display: '-webkit-box', WebkitBoxOrient: 'vertical', WebkitLineClamp: 5 }}>
                Programming languages all have built-in data structures, but these often differ from one language to another. This article attempts to list the built-in data structures available in JavaScript and what properties they have. These can be used to build other data structures. Wherever possible, comparisons with other languages are drawn. Dynamic typing JavaScript is a loosely typed and dynamic language. Variables in JavaScript are not directly associated with any particular value type, and any variable can be assigned (and re-assigned) values of all types: let foo = 42; // foo is now a number foo = 'bar'; // foo is now a string foo = true; // foo is now a boolean
              </p>
            </div>

          </div>
          
        </div>
      
    </main>
  );
}
