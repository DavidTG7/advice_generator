const title = document.querySelector(".title");
const paragraph = document.querySelector(".paragraph");

const newAdvice = async () => {
  const response = await fetch("https://api.adviceslip.com/advice");
  const data = await response.json();

  title.innerText = `ADVICE #${data.slip.id}`;
  paragraph.innerText = `"${data.slip.advice}"`;
  console.log(data.slip.advice);
};

newAdvice();
