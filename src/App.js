
import './App.css';

function App() {
//state / hooks



//function defination
let curuntDate = new Date(2022,4,27,1);
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
          <h1>Hello <spam style={cssStyle}>{greeting}</spam></h1>
    </div>
  </>
);
}

export default App;
