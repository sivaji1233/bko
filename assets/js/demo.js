const libButton = document.querySelector("#opt-button-1");
const newButton = document.querySelector("#opt-button-2");
const iFrame = document.querySelector("#plot")

const trainFramePath = "/assets/demo_figs/train_fig.html";
const testFramePath = "/assets/demo_figs/test_fig.html";

libButton.addEventListener('click', () => {
    iFrame.src = trainFramePath;
})

newButton.addEventListener('click', () => {
    iFrame.src = testFramePath;
})
