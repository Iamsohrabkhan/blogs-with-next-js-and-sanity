import { Star } from "@/components/icons/star";
import React from "react";

const Loading = () => {
  return (
    <main className="prose mx-auto py- dark:prose-invert animate-pulse px-5 py-24">
      <article>
        <h1 className="w-4/5 h-6 bg-slate-400 rounded"></h1>
        <div className="space-y-3">
          <p className="w-4/6 h-4 bg-slate-300 rounded"></p>
          <p className="w-96 h-4 bg-slate-300 rounded"></p>
          <p className="w-96 h-4 bg-slate-300 rounded"></p>
          <p className="w-64 h-4 bg-slate-300 rounded"></p>
          <p className="w-32 h-4 bg-slate-300 rounded"></p>
        </div>
        <div>
          <p className="w-full h-6 bg-slate-300 rounded"></p>
          <p className="w-full h-4 bg-slate-300 rounded"></p>
          <p className="w-4/5 h-4 bg-slate-300 rounded"></p>
          <p className="w-4/5 h-4 bg-slate-300 rounded"></p>
          <p className="w-3/4 h-4 bg-slate-300 rounded"></p>
          <p className="w-8/12 h-4 bg-slate-300 rounded"></p>
          <p className="w-2/4 h-4 bg-slate-300 rounded"></p>
        </div>

        <div className="my-2">
          <div className="inline-flex items-center justify-center w-full">
            <hr className="w-64 h-1 my-8 bg-gray-200 border-0 rounded dark:bg-gray-700" />
            <div className="absolute px-4 -translate-x-1/2 bg-light left-1/2 dark:bg-dark">
              <Star />
            </div>
          </div>
        </div>

        {/* author */}
        <div className="h-10 space-x-16 my-6 ">
          <div className="rounded-md bg-slate-300 w-10 h-10" />
          <p className="w-16 h-4 bg-slate-300 -translate-y-12"></p>
        </div>
      
      </article>
    </main>
  );
};

export default Loading;
