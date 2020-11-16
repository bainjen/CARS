// import { useState, useEffect } from "react";

// // returns an array of arrays that are filled with the number 1 according to the dimension input
// const createFieldMatrix = (dimension) => {
//   let matrix = [];
//   for (let i = 0; i < dimension; i++) {
//     let row = [];
//     for (let j = 0; j < dimension; j++) {
//       row.push(1);
//     }
//     matrix.push(row);
//   }
//   return matrix;
// };

// const useField = (dimension) => {
//   const [fieldMatrix, setFieldMatrix] = useState([]);

//   useEffect(() => {
//     setFieldMatrix(createFieldMatrix(dimension));
//   }, [dimension]);

//   return fieldMatrix;
// };

// export default useField;
