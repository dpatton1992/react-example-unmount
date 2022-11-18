import { useState, useEffect } from 'react';
import CheckoutForm from './CheckoutForm'
import './App.css';


function App() {
  const [isMounted, setIsMounted] = useState(false);
  
  function onSubmit(event) {
    // console.log(this.state.isMounted)
    setIsMounted(isMounted === false)
    // this.state.isMounted = this.state.isMounted === false ? true : false;
    // console.log(this.state.isMounted)
  }

  return (
    <div>
      <input className='submit-btn w-full border rounded-md mt-6 p-3 h-auto bg-blue-700 text-xl text-white font-bold' type="submit" onClick={onSubmit} value={isMounted ? 'Unmount' : 'Mount'}/>
      {isMounted ? <CheckoutForm /> : <div />}
    </div>
  );
}

export default App;