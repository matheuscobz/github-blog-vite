import { useEffect, useState } from 'react';
import banner from './assets/Banner.svg';
import Card from './components/Card';

import { searchIssues } from './api/Github';

export default function Home() {
  const [issueText, setIssueText] = useState('')
  const [totalPosts, setTotalPosts] = useState(0)
  useEffect(() => {
    async function getIssuesData() {
    const issueData = await searchIssues();
    setTotalPosts(issueData.total_count);
    setIssueText(issueData.items[0].body)
    console.log(issueData)
  };

  getIssuesData()
  
  }, []);

  return (
    <main className="h-full bg-[#071422] flex flex-col">
      <img className="w-full" src={banner} alt="Banner" />

      <div className="w-min-[]] flex flex-col items-center">        
        <Card />
      </div>
        <div className="flex flex-col px-72 gap-3">
          <div className="flex justify-between">
              <p className="text-[#C4D4E3] text-lg font-bold tracking-wider">Publicações</p>
              <p className="text-[#7B96B2]">{totalPosts} publicações</p>
          </div>
          <label htmlFor="">
            <input type="text" className="bg-transparent border-2 border-[#1C2F41] text-white rounded-lg px-3 py-4 min-w-1/2 w-full placeholder:text-[#3A536B] mb-12" placeholder="Buscar conteúdo" />
          </label>
          <div className="grid grid-cols-2 gap-8 text-[#E7EDF4] mb-12">
             <div className="bg-[#112131] p-8 rounded-lg h-[260px] w-auto">
              <div className="flex justify-between">
                <h1 className="text-xl font-bold mb-5 ">JavaScript data types and data structures</h1>
                <span className="text-[#7B96B2] whitespace-nowrap pt-1">Há 1 dia</span>
              </div>
              
              <p className="text-[#AFC2D4] overflow-hidden text-ellipsis" style={{ display: '-webkit-box', WebkitBoxOrient: 'vertical', WebkitLineClamp: 5 }}>
                {issueText}
              </p>
            </div>
          </div>
        </div>

      
    </main>
  );
}
