// import lion from './assets/lion.jpg'

function Course(props){
    const course1="ACTE"
    const styles={
        backgroundColor:"green",
    }
// if(props.show){
//     return(
//         <div className="card">
//            <div style={styles}>
//               <img src={lion} alt="" />
//               <img src={props.image} alt="" />
//                   <h3>{course1}</h3>
//                   <p>{props.name}</p>
//                   <p>{props.price}</p>
//                   <span>Rating: {props.rating}</span>
//                   <p>This is {course1} Course</p>
//           </div>
         
//       );
// }
// else{
//     return(
//     <div className="card">Course not available</div>
//     );
// }
return(
    
    <div className="card">
        <div style={styles}>
          {/* <img src={props.image} alt="" />  */}
          <img src={props.image} alt="" />
              <h3>{course1}</h3>
              <p>{props.name}</p>
              <p>{props.price}</p>
              <span>Rating: {props.rating}</span>
              <p>This is {course1} Course</p>
      </div>
      </div>
    
  );
    
}


export default Course