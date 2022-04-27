
import './App.css';

function App() {
//state / hooks



//function defination
setInterval(myTimer, 1000);

function myTimer() {
  const d = new Date();
  document.getElementById("demo").innerHTML = d.toLocaleTimeString();
}
let curuntDate = new Date();
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
          <h1>Hello sir, <spam style={cssStyle}>{greeting}</spam></h1><br/>
          <h1 id="demo">{d}</h1>
    </div>
    
  </>
);
}

export default App;
