
 import { useState } from "react";

 //onChange
function Form() {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");


  function handleNameChange(e) {
    setName(e.target.value);
    
  }
  function handleAgeChange(e) {
  setAge(e.target.value);
  }
  return (
    <form>
      <label>Enter your name:</label>
      <input type="text" value={name} onChange={handleNameChange} />
      <label>Enter your age:</label>
      <input type="text" value={age} onChange={handleAgeChange} />
      <p>Current value: {age}</p>
      <p>Current value: {name}</p>
    </form>
  );
}

export default Form;


// onSubmit
// import { useState } from "react";

// function Form() {
//   const [name, setName] = useState("");

//   function handleSubmit(e) {
//     e.preventDefault();     // stop page refresh
//     alert(name);            // use the value
//   }

//   return (
//     <form onSubmit={handleSubmit}>
//       <label>Enter your name:</label>
//       <input 
//         type="text" 
//         value={name}
//         onChange={(e) => setName(e.target.value)}
//       />

//       <button type="submit">Submit</button>
//     </form>
//   );
// }

// export default Form;

// Select
// function Form() {
//     const [myCar, setMyCar] = useState("Ford");
  
//     const handleChange = (event) => {
//       setMyCar(event.target.value);
//     };
  
//     return (
//       <form>
//         <select value={myCar} onChange={handleChange}>
//           <option value="Ford">Ford</option>
//           <option value="Volvo">Volvo</option>
//           <option value="Fiat">Fiat</option>
//         </select>
//       </form>
//     );
//   }
//   export default Form;

// Multiple inputs
//   function Form() {
//     const [inputs, setInputs] = useState({});
  
//     function handleChange(e) {
//       const name = e.target.name;   // field name
//       const value = e.target.value; // field value
//       setInputs(values => ({ ...values, [name]: value }));//Spread Operator{...}
//     }
  
//     return (
//       <form>
//         <label>First name:</label>
//         <input 
//           type="text" 
//           name="firstname"
//           value={inputs.firstname || ""} 
//           onChange={handleChange} 
//         />
  
//         <label>Last name:</label>
//         <input 
//           type="text" 
//           name="lastname"
//           value={inputs.lastname || ""} 
//           onChange={handleChange} 
//         />
  
//         <p>Current values: {inputs.firstname} {inputs.lastname}</p>
//       </form>
//     );
//   }
//   export default Form



