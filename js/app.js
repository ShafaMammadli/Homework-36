// ? Task-1
let data =
  '{"id":356,"type":"general","joke":"Why does a chicken coop only have two doors? Because if it had four doors it would be a chicken sedan."}';
let objData = JSON.parse(data);
objData.id = 157;
data = JSON.stringify(objData);

console.log(data);

// ? Task-2
let jokeBtn = document.querySelector(".joke_btn");
let p = document.querySelector("p");

jokeBtn.addEventListener("click", () => {
  fetch("https://api.chucknorris.io/jokes/random")
    .then((response) => response.json())
    .then((joke) => {
      p.innerText = joke.value;
    });
});

// ? Task-3
let images = [...document.getElementsByTagName("img")];
console.log(images);

images.map((img) => {
  img.addEventListener("click", () => {
    if (document.getElementsByClassName("big").length > 0) {
      document.getElementsByClassName("big")[0].classList.remove("big");
    }

    img.classList.add("big");
  });
});
