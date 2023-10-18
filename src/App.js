import Random from "./components/Random";
import Tag from "./components/Tag";

function App() {
  return (
    <div className="w-full flex flex-col relative items-center bg-slate-600 ">
      <h1 className='bg-white rounded-lg w-11/12 text-center mt-[40px] px-10 py-2 font-bold text-3xl'>RANDOM GIFS</h1>
      <div className='flex flex-col w-full items-center gap-5 mt-[30px]'>
        <Random />
        <Tag />
      </div>
    </div>
  );
}

export default App;
