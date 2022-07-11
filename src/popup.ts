async function scrape_task() {
  let tab = await chrome.tabs.query({active: true});
  if (tab[0].id && tab[0].url?.includes("ontrack.deakin.edu.au")) {
    chrome.tabs.sendMessage(tab[0].id, {toggle: true})
  }
}

const button = document.getElementById('button');
if (button instanceof HTMLButtonElement) {
  button.onclick = scrape_task;
}

chrome.runtime.onMessage.addListener((task) => {
  const textOutput = document.getElementById("textOutput");
  if (textOutput instanceof HTMLInputElement) {

    textOutput.value = `reminder ${task.unit} ${task.grade} ${task.title} ${task.due}`;
  }
});




