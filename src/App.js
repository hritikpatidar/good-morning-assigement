
import './App.css';

function App() {
//state / hooks



//function defination
setInterval(myTimer, 1000);

function myTimer() {
  const d = new Date();
  document.getElementById("demo").innerHTML = d.toLocaleTimeString();
}


let curuntDate = new Date(2022,4, 27,10);
let d = new Date();
d = d.toLocaleTimeString();
curuntDate= curuntDate.getHours();
let greeting ={}
const cssStyle = {};    

if(curuntDate >=1 && curuntDate < 12){
    greeting = "Good Morning";
    cssStyle.color = "green";
}else if(curuntDate >=12 && curuntDate < 16){
    greeting = "Good Afternoon";
    cssStyle.color = "yellow";
}else if(curuntDate >= 16 && curuntDate < 20 ){
    greeting = "Good Evening";
    cssStyle.color = "orange";
}else{
    greeting = "Good Night";
    cssStyle.color = "black";
}


//return statement
return (
  <>
    <div>
          <h1>Hello sir, <spam style={cssStyle}>{greeting+" " }</spam> (<span id="demo">{d}</span>)</h1><br/>
         
    </div>
    
  </>
);
}

export default App;
