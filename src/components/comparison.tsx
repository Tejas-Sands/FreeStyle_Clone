export default function Difference() {
 
  return (
    <>
      <div className="border-t border-gray-300 p-2 mt-4 mx-auto py-10"></div>
      <div className="flex flex-col lg:flex-col p-7 mx-[16%] items-center lg:items-start space-y-4 lg:space-y-4 ">

        <div className="text-center text-4xl p-10 w-full order-1 dark:text-slate-400">
          More than half of code is wasted API boilerplate.
        </div>

        <div className="flex flex-col lg:flex-row w-full space-y-4 lg:space-y-0 lg:space-x-80 order-2">
          <div className="flex flex-col w-72">
            <div className="bg-gray-800 text-slate-100 rounded-t-lg text-center p-4">Browser</div>
            <div className="bg-red-500 text-slate-100 text-center py-5">REST API</div>
            <div className="bg-gray-800 text-slate-100 text-center p-4">Web Server</div>
            <div className="bg-red-500 text-slate-100 text-center py-5">Database API</div>
            <div className="bg-gray-800 text-slate-100 rounded-b-lg text-center p-4">Storage</div>
            <div className="text-slate-800 text-center p-4 dark:text-slate-400">Other Clouds</div>
          </div>

          <div className="flex flex-col w-72 ">
              <>
                <div className="bg-white text-gray-500 rounded-t-lg border-2 -my-2 mt-1 border-b-2 border-gray-800 text-center py-12">Resources Saved</div>
                <div className="bg-gray-800 text-slate-50 rounded-t-lg border-4 border-gray-800 text-center py-4">Browser</div>
                <div className="bg-gray-800 text-slate-50 border-y-4 border-green-600 text-center py-3">Web Server</div>
                <div className="bg-gray-800 text-slate-50 rounded-b-lg text-center py-4">Storage</div>
                <div className="text-slate-800 text-center p-4 dark:text-slate-400">Freestyle Cloud</div>
              </>
          </div>
        </div>
      </div>
    </>
  );
}

