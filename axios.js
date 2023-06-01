// axios.get("https://swapi.dev/api/people/1/")
// .then(res =>{
//     console.log(res);
// })
// .catch(e=>{
//     console.log(e);
// })
// const star = async (id) =>{
//     try {
//     const res = await  axios.get(`https://swapi.dev/api/people/${id}/`);
//     console.log(res);
//     }
//     catch (error) {
//         console.log(error);
//     }
// }
// star(5);
// star(6);
const jokes = document.querySelector("#jokes");
const button = document.querySelector("button");
const addNewJokes = async () => {
  const daddy = await getDad();
  const newLI = document.createElement("LI");
  newLI.append(daddy);
  jokes.append(newLI);
};
const getDad = async () => {
  try {
    const config = { headers: { Accept: "application/json" } };
    const res = await axios.get("https://icanhazdadjoke.com/", config);
    return res.data.joke;
  } catch (error) {
    return "NO jokes !!! sorry";
  }
};
button.addEventListener("click", addNewJokes);
