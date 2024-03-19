import './styles.css';

function Button() {

  // new function to hold the alert
   function onLearnMore(){ 
      alert("Splish Splash!");
   };   

   // activate on click 
   return ( 
      <button onClick={onLearnMore}>
         Learn More
      </button>
   );
}

export default Button;