import React from "react";


function CardImage({ src, title, text }) {
  return (
    <div className="card">
      <img src={src} className="card-img-top" alt={title} />
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">{text}</p>
      </div>
    </div>
  );
}

function App() {
  return (
    

    <div className="container">


<div class="card">
  <img src={require("../Assets/click.png")} alt="Denim Jeans" style={{width:"81%",paddingLeft:"10%",margin:"5%" }}/>
  <h1 className="step">Step 1</h1>
 
  <p className="stepcontent">if you wish learn driving Lesson Go through the get started button</p>

</div>




<div class="card">
  <img src={require("../Assets/register.png")} alt="Denim Jeans" style={{width:"85%",paddingLeft:"15%",margin:"5%"}}/>
  <h1 className="step">Step 2</h1>

  <p className="stepcontent">First you have to register. If you already have an account you can login</p>

</div>



<div class="card">
  <img src={require("../Assets/pay.png")} alt="Denim Jeans" style={{width:"95%",paddingLeft:"8%",margin:"5%"}}/>
  <h1 className="step">Step 3</h1>
 
  <p className="stepcontent">For the registration purpose you have to go through the payment</p>

</div>


<div class="card">
  <img src={require("../Assets/no.png")} alt="Denim Jeans" style={{width:"77%",paddingLeft:"6%",margin:"5%"}}/>
  <h1 className="step">Step 4</h1>

  <p className="stepcontent">Then you can view the Driving notes and do the model exam </p>
 
</div>







    </div>
  );
}

export default App;
