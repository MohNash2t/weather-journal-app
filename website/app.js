/* Global Variables */
const apiKey = "378cb70869fb235c030b677be9c6bb12&units=imperial";
const zipCo = document.getElementById("zip");
const feelings = document.getElementById("feelings");
//User input values
let generateButton = document.getElementById("generate");
// Create a new date instance dynamically with JS
let d = new Date();
let newDate = d.getMonth() + "." + d.getDate() + "." + d.getFullYear();
console.log(newDate);

generateButton.addEventListener("click", async () => {
  try {
    let zipCode = zipCo.value;
    let textarea = feelings.value;
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?zip=${zipCode}&appid=${apiKey}`;
    //Start Fetch
    const res = await fetch(apiUrl).then((res) => res.json());
    const temperature = await res.main.temp;

    await fetch("/post", {
      method: "POST",
      credentials: "same-origin",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        newDate,
        temperature,
        textarea,
      }),
    });
    const getData = await fetch("/get").then((res) => res.json());
    document.getElementById("date").innerHTML = getData.date;
    document.getElementById("content").innerHTML = getData.textarea;
    document.getElementById("temp").innerHTML = getData.temperature;
  } catch (error) {
    console.error("Error:", error);
  }
});
