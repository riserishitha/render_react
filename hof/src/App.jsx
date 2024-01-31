import Data from "./components/data"
import Filteringage from "./components/filteringage"
import InputDesigner from "./components/filteringdesigner"
import FilteringJ from "./components/filteringletterJ"
import Totalyear from "./components/filteringtotalyears"
import Wholedata from "./components/filteringwholedata"
import "./App.css"

function App(){
  return (
    <div>
      <h1>Display all items</h1>
      <div className="box"> 
      <Wholedata array = {Data}/>
      </div>
      <h1>Display based on user type</h1>
      <div className="box">
        <InputDesigner array = {Data}/>
      </div>
      <h1>Filter all data starting with J</h1>
      <div className="box">
        <FilteringJ array={Data}/>
      </div>
      <h1>Filter all data based on age greater than 28 and age less than or equal top 50</h1>
      <div className="box">
        <Filteringage array= {Data}/>
      </div>
      <h1>Find the total years of the designers</h1>
      <div className="lastbox">
        <Totalyear array = {Data}/>
      </div>
    </div>
  )
}
export default App;