// function Listkeys() {
//     const cars = ['Ford', 'BMW', 'Audi'];
  
//     return (
//       <>
//         <h1>My Cars:</h1>
//         <ul>
//           {cars.map(car => <li>I am a {car}</li>)}
//         </ul>
//       </>
//     );
//   }
//   export default Listkeys;

  function Listkeys() {
    const cars = [
      { id: 1, brand: "Ford" },
      { id: 2, brand: "BMW" },
      { id: 3, brand: "Audi" }
    ];
  
    return (
      <>
      <h1>My Cars</h1>
      <ul>
        {cars.map(car => (
          <li key={car.id}>I am a {car.brand}</li>
        ))}
      </ul>
      </>
    );
  }

  export default Listkeys;