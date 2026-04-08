export default function Loader() {
  return (
    <div className="fixed inset-0 z-50 flex items-center
      justify-center bg-[#0a0a0f]">
      <div className="flex flex-col gap-4 w-56">
        <h1 className="text-2xl font-light text-white tracking-tight">
          Loading<span className="text-violet-400">.</span>
        </h1>
        <div className="h-px w-full bg-white/10 overflow-hidden
          rounded-full">
          <div className="h-full bg-gradient-to-r from-violet-600
            to-violet-300 animate-[progress_2.4s_cubic-bezier(.4,0,.2,1)_infinite]" />
        </div>
        <p className="text-xs text-white/30">Initialising…</p>
      </div>
    </div>
  );
}