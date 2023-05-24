// // document.body.style.backgroundColor = "orange";
// setTimeout(() => {
//   document.body.style.backgroundColor = "violet";
//   setTimeout(() => {
//     document.body.style.backgroundColor = "indigo";
//     setTimeout(() => {
//       document.body.style.backgroundColor = "blue";
//       setTimeout(() => {
//         document.body.style.backgroundColor = "green";
//         setTimeout(() => {
//           document.body.style.backgroundColor = "yellow";
//           setTimeout(() => {
//             document.body.style.backgroundColor = "orange";
//             setTimeout(() => {
//               document.body.style.backgroundColor = "red";
//             }, 2000);
//           }, 2000);
//         }, 2000);
//       }, 2000);
//     }, 2000);
//   }, 2000);
// }, 2000);
// NOw CREATING GENERIC FORM OF THIS FUCTION
const delayedColor = (newColor, delay,doNext) => {
  setTimeout(() => {
    document.body.style.backgroundColor = newColor;
    doNext && doNext();
  }, delay);
};
delayedColor('red',2000,()=>{
    delayedColor('orange',2000,()=>{
        delayedColor('yellow',2000,()=>{
            delayedColor('green',2000,()=>{
                delayedColor('blue',2000,()=>{
                    delayedColor('indigo',2000,()=>{
                        delayedColor('violet',2000,()=>{

                        })

                    })

                })

            })

        })

    })

})

