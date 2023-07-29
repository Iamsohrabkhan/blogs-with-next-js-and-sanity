import Link from "next/link";

const LoadingSkeleton = () => {
  return (
    <main className="relative min-h-screen flex flex-col justify-center overflow-hidden">
      <div className="w-full max-w-6xl mx-auto px-4 md:px-6 py-12">
        <div className="mt-3 md:mt-0 max-w-3xl mx-auto">
          <h2 className="text-5xl font-black mt-16 dark:text-white">Blogs</h2>
        </div>
        <div className="flex flex-col justify-center divide-y divide-slate-200 [&>*]:py-16">
          {/* Vertical Timeline #1 */}
          <div className="-my-6">
            <div className="w-full max-w-2xl mx-auto">
              {[...Array(4)].map((_, idx) => (
                   <div className="relative pl-8 sm:pl-32 py-6 group animate-pulse" key={idx}>
                   {/* Vertical line (::before) ~ Date ~ Title ~ Circle marker (::after) */}
                   <div className="flex flex-col sm:flex-row items-start mb-1 group-last:before:hidden before:absolute before:left-2 sm:before:left-0 before:h-full before:px-px before:bg-slate-300 sm:before:ml-[6.5rem] before:self-start before:-translate-x-1/2 before:translate-y-3 after:absolute after:left-2 sm:after:left-0 after:w-2 after:h-2 after:bg-indigo-600 after:border-4 after:box-content after:border-slate-50 after:rounded-full sm:after:ml-[6.5rem] after:-translate-x-1/2 after:translate-y-1.5">
                   {/* Purple label */}
                   <div className="space-y-5">         
                   <div className="h-6 w-60 rounded bg-indigo-300  mb-1 sm:mb-0 ">
                    <span></span> 
                   </div>
                     <time className="sm:absolute left-0 translate-y-0.5 inline-flex items-center justify-center  w-24 h-6 mb-3 sm:mb-0  bg-emerald-200 rounded-full px-2">

                     </time>
                     <div className=" bg-slate-300 dark:text-slate-100 w-24 h-5 rounded">
                     
                       <span className="text-gray-500 dark:text-gray-400 ">
                        
                       </span>
                     </div>
                   </div>
                   </div>
                   {/* Content */}
                   <div className="text-slate-500 line-clamp-3 dark:text-light_primary space-y-4">
                    <p className="bg-gray-300 rounded w-[40rem] h-6"></p>
                    <p className="bg-gray-300 rounded w-96 h-6"></p>
                    <p className="bg-gray-300 rounded w-72 h-6"></p>
                   </div>
         
                   <div className="flex items-center space-x-4 mt-4">
                     <div className="relative w-10 h-10 bg-slate-300 rounded-full">                     
                     </div>
                     <div className="space-y-2">
                       <div className="bg-slate-300 w-24 h-3 rounded"></div>
                       <div className="bg-slate-300 w-20 h-3 rounded" ></div>
                     </div>
                   </div>
                   
                 </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default LoadingSkeleton;
