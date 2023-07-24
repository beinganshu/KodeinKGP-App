import React,{useState, useEffect} from 'react';
import './App.css'
import axios from'axios';

function App() {
  const[quote,setQuote]=useState([])
  const [quoteAuthor, setQuoteAuthor]=useState()
  const [quoteString, setQuoteString] = useState()
  const[submit,setSubmit]= useState()

  useEffect(() => {
   axios.get('http://localhost:5050/quote/')
    .then((res)=>{
      setQuote(res.data)
    })
    .catch((err)=>{
      console.log(err)
    })
  },[submit])

  const handleSubmit=async()=>{
    try{
      const res=await axios.post('http://localhost:5050/quote',{
        "author":quoteAuthor,
        "quote": quoteString
      });
        setSubmit(res);
      }
    catch{
        alert("Some error occured.")
      }
    }

  return (
    <div className='App'>
      <header className='App-header'>
      <div className='heading'>Today's Quotes are:-</div>{quote && quote.map((item)=>(<div className='quote'><div className='qu'>{item.quote}</div> <div className='a'>by</div> <div className='author'>{item.author}</div></div>))}
    <div>
      <h1>
        You can add new quote here:
      </h1>
      <div><label>Your Name: </label>
      <input onChange={(e)=>{setQuoteAuthor(e.target.value)}}/></div>
      <div>
        <label>
          Your Quote:
        </label>
        <input onChange={(e)=>{setQuoteString(e.target.value)}}/>
      </div>
      <button onClick={handleSubmit} className='button'>Submit</button>
    </div>
    </header>
    </div>
  );
}

export default App;
