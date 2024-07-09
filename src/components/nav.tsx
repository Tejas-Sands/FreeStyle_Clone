import { LiaCloudSolid } from "react-icons/lia";
import { FaGithub } from "react-icons/fa6";
import DayNight from "./darkCheck";

export default function Nav(){


    return(
        <div className="relative z-50">
            <div className=" flex flex-wrap justify-between fixed bg-slate-200 dark:bg-slate-800 bg-opacity-60 shadow-md backdrop-blur-md w-full h-16 top-0 ">
                      <div className="flex items-center space-x-1  ml-5">
                        <LiaCloudSolid size={40} className="dark:text-slate-400" />
                        <div className=" basis-7 text-xl dark:text-slate-400"><a href="https://www.freestyle.sh/">Freestyle</a></div>       
                      </div>
                      <div className="flex items-center space-x-4  mr-7">
                      <DayNight/>
                      <a href="https://github.com/freestyle-sh" className="dark:text-slate-400"><FaGithub/></a>
                      <div className="order-1 text-md dark:text-slate-400"><a href="https://docs.freestyle.dev/getting-started/astro">Docs</a></div>
                      </div>
            </div>
        </div>
    )
}