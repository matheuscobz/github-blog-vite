import { useEffect, useState } from "react";
import { fetchData } from "../api/Github";
import githubIcon from "../assets/Github-icon.svg";
import workingIcon from "../assets/Working-icon.svg";
import followersIcon from "../assets/Followers-icon.svg";


export default function Card(){
  const [profileData, setProfileData] = useState('');

  useEffect(() => {
      async function getData() {
      const data = await fetchData();
      setProfileData(data);
    };

    getData();
  }, []);

  return (
    <div className="text-white flex bg-[#0B1B2B] py-8 px-10 rounded-xl shadow-lg  justify-center max-w-4xl relative bottom-[110px] mx-12">
      <div>
        <img src={ profileData.avatar_url } className="size-fit rounded " alt="" />
      </div>
      <div className="mx-8 flex flex-col ">
        <p className="text-[#E7EDF4] mb-2 text-2xl font-bold tracking-wider">{ profileData.name }</p>
        <p className="mb-6">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Numquam ipsum dicta eius voluptatibus quasi mollitia magni qui sunt. A tempora magnam excepturi aliquam quod. Deleniti corporis ducimus vel ad recusandae?</p>
        <div className="flex gap-12">
          <div className="flex gap-2 items-center justify-center">
            <img className="size-5" src={githubIcon} alt="" />
            <a href="">{ profileData.login}</a>
          </div>
          <div className="flex gap-2 items-center justify-center">
            <img src={workingIcon} alt="" />
            <span>UNESPAR</span>
          </div>
          <div className="flex gap-2 items-center justify-center">
            <img src={followersIcon} alt="" />
            <span>{profileData.followers}</span>
          </div>
        </div>
      </div>
    </div>
  )
}