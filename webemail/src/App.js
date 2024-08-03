
import Childprops from '../../Childprops';
import './App.css';


function App() {
  return (
   <Childprops/>
  )
}

    <div className="App">
      <h1>Parent Component</h1>
      {data.map((item, index) => (
        <ChildComponent key={index} item={item} />
      ))}
    </div>

export default App;
