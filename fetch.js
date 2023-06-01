// fetch("https://swapi.dev/api/people/1/")
//   .then((res) => {
//     console.log("Resolved", res);
//     return res.json();
//   })
//   .then((data)=>{
//     console.log(data);
//     return fetch("https://swapi.dev/api/people/2/");
//   })
//   .then(res=>{
//     console.log('Second Request');
//     return res.json();
//   })
//   .then((data)=>{
//     console.log(data);
//   })
//   .catch((e) => {
//     console.log("Error", e);
//   });
const loadStar = async () => {
    try {
  const res = await fetch("https://swapi.dev/api/people/1/");
  const data = await res.json();
  console.log(data);
  const res1 = await fetch("https://swapi.dev/api/people/2/");
  const data1 = await res1.json();
  console.log(data1);
} catch (error) {
        console.log(error);
}
};
loadStar();
