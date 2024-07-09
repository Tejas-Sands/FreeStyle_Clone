import { RiUploadCloud2Line } from "react-icons/ri";
import { PiPackageDuotone } from "react-icons/pi";
import { GiMeshNetwork } from "react-icons/gi";


export default function Appex(){
    return (
    <>
    <div className="font-bold text-center text-4xl p-10 dark:text-slate-400">Freestyle is the cloud for collaboration.</div>
    <div className="flex flex-wrap justify-around p-5 space-x-8 w-4/5 mx-auto py-24">
            <div className="flex flex-1 flex-col items-center text-center">
                <PiPackageDuotone size={100} className="dark:text-slate-400"/>
                <div className="text-xl font-semibold dark:text-slate-400">Package</div>
               <div className="dark:text-slate-400"> By enabling engineers to securely share and compose functionality, freestyle removes dependencies and unblocks projects. </div>
            </div>
            <div className="flex flex-1 flex-col items-center text-center">
                <RiUploadCloud2Line size={100} className="dark:text-slate-400"/>
                <div className="text-xl font-semibold dark:text-slate-400">Deploy</div>
                <div className="dark:text-slate-400">In one command deploy your website, APIs, and databases. Everything just works, no configuration required.</div>
            </div>
            <div className="flex flex-1 flex-col items-center text-center">
                <GiMeshNetwork size={100} className="dark:text-slate-400"/>
                <div className="text-xl font-semibold dark:text-slate-400">Access</div>
                <div className="dark:text-slate-400" >Using our service registry, teams can easily manage access to their APIs. APIs are also documented by default as a bi-product of our design.</div>
            </div>
            
    </div>
    
    </>
    )
}