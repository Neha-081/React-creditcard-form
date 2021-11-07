import { useState } from 'react';
import Form from './components/Form';
import CreditCard from './components/Creditcard';
import './App.css'
function App(){
    const [theme,setTheme]=useState("light");
 return (
     <div className="App">
 <CreditCard>
     <h3>VISA</h3>
     <img src="https://cdn-icons-png.flaticon.com/512/3876/3876951.png"/>
     <p>4256 7890 5678 4532</p>
     <div>
         <h6>CARD HOLDER</h6>
         <h6>EXPIRY</h6>
         <h6>CVC</h6>
     </div>
     <div>
         <p>John Smith</p>
         <p>09/20</p>
         <p>345</p>
     </div>

 </CreditCard>
     
        <Form>
        <label>CARDHOLDER NAME   </label>
<legend>

            <img src="https://cdn-icons-png.flaticon.com/512/1077/1077012.png" alt=""/>
            <input type="text" placeholder="John Smith"></input>
            </legend>
          <br/>
            <label>CARD NUMBER  </label>
            <legend>
          
            <img src="https://cdn-icons-png.flaticon.com/512/2922/2922888.png" alt=""/>
          
            <input type="number" placeholder="4256 8456 2333 5842"></input>
            </legend>
            <div>

            <label>EXPIRY MONTH </label>
            <label>EXPIRY YEAR </label>
            <label>CVC </label>
            </div>
            <div >
            <img src="https://cdn-icons.flaticon.com/png/512/2278/premium/2278017.png?token=exp=1636319250~hmac=77349e734759aa5803727b9990908f99" alt=""/>
            <input  type="number" placeholder="09"/><i class="fas fa-user-edit"></i>
            <img src="https://cdn-icons-png.flaticon.com/512/3652/3652191.png" alt=""/>
            <input type="number" placeholder="2020"></input>
            <img src="https://cdn-icons.flaticon.com/png/512/3178/premium/3178312.png?token=exp=1636319339~hmac=5ea62f9078ddfc29a77af42dd38ea18b" alt=""/>
            <input type="number" placeholder="145"></input>
     </div>
        
        <h5>Payment Amount: <span>12 300</span> </h5>
    <button type="submit" >PAY</button>
    </Form>
    <div></div>
     </div>
 )
}

export default App;
