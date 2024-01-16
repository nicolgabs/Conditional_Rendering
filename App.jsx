import './App.css'
import ShinyButton from './Conditional_Demo1'
import RainorShine from './Conditional_Demo2'
import SunnyorRainy from './Conditional_Demo3'
import ShineorRain from './Conditional_Demo4'

function App() {
  

  return (
    <><div className='flex flex-row justify-around pt-8'>
      <ShinyButton/>
      <RainorShine isRainy={true}/>
      <SunnyorRainy isRainy={false}/>
      <ShineorRain isRainy={true}/>
      </div>
    </>
  )
}

export default App
