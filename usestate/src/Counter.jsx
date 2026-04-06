import {useState} from "react";

const Counter = () => {

  const [count, setCount] = useState(0);

  return (
    <div className='h-screen flex items-center justify-center flex-1 bg-green-400'>
      
      <div className='flex flex-col items-center justify-center w-64 h-64 bg-red-500 rounded-xl shadow-lg space-y-4'>
        
        <h1 className="text-2xl font-bold text-white">
          {count}
        </h1>

        <div className="flex gap-5">
          <button 
            onClick={() => setCount(count+1)}
            className="px-4 py-2 bg-white rounded hover:bg-gray-200 transition">
            +
          </button>

          <button 
            onClick={() => setCount(0)}
            className="px-4 py-2 bg-yellow-300 rounded hover:bg-yellow-400 transition">
            Reset
          </button>

          <button 
            onClick={() => {
              if(count == 0) return;
              setCount(count-1);
            }}
            className="px-4 py-2 bg-white rounded hover:bg-gray-200 transition">
            -
          </button>
        </div>

      </div>

    </div>
  )
}

export default Counter;