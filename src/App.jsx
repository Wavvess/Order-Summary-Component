import './App.css'
import background from './assets/pattern-background-desktop.svg'
import musicIcon from './assets/icon-music.svg'
import headerImg from './assets/illustration-hero.svg'


function App() {
  return (
    <div className="main-container w-full h-screen bg-paleblue">
      {/* <img src={background} className="w-full h-25 top-0 left-0 z-[2] object-fill relative" alt="background" /> */}

      <div className="summary w-full h-screen flex items-center justify-center z-[3] relative">
      <div className="summary-container w-full sm:w-2/3 md:w-1/2 lg:w-1/3 rounded-2xl bg-white">
        <div className="img mb-8">
          <img src={headerImg} className="w-full rounded-t-2xl" alt="headerimg" />
        </div>
        <div className="flex-container py-4 px-10 justify-center">
          <h2 className="text-darkblue text-3xl font-extrabold text-center mb-3">Order Summary</h2>
          <p className="text-center mb-5 px-3 text-desaturatedblue">You can listen to millions of songs, audiobooks, and podcasts on any device anywhere you'd like!</p>

          <div className="plan-container flex flex-row justify-between bg-verypaleblue px-6 py-5 rounded-2xl mb-10">
            <div className="flex flex-row">
            <img src={musicIcon} className="mr-5" alt="music" />
            <div className="text-container">
                <h6 className="">Annual Plan</h6>
                <p className="text-desaturatedblue">$59.99/year</p>
            </div>
            </div>
            <button className="underline text-purple-800 font-bold">Change</button>
          </div>

          <button className="inline-block w-full bg-brightblue py-3 text-white font-semibold rounded-xl shadow-purple-lg mb-9 transition duration-75 ease-in hover:scale-[1.03]">Proceed to Payment</button>
          
          <p className='text-center mb-8'><button className="text-gray-500 font-bold">Cancel Order</button></p>
        </div>
      </div>
      </div>
    </div>
  )
}

export default App