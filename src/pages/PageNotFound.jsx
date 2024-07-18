const PageNotFound = () => {
  return (
    <main className="relative min-h-screen mx-auto max-w-[100rem] bg-[#111]">
      <div className=" absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%]">
        <div className="flex items-center justify-center gap-2">
          <h2 className="text-lg font-semibold text-zinc-200">404 </h2>
          <div className="w-[0.02em] h-8 bg-zinc-300"></div>
          <p className="text-sm text-zinc-200">This page could not be found.</p>
        </div>
      </div>
    </main>
  );
};

export default PageNotFound;
