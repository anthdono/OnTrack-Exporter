// console.log("background");
// chrome.runtime.sendMessage()

// browser.runtime.onMessage.addListener((msg) => {
//   console.log(msg);
// });

var imgurl = "https://www.google.com.hk/images/srpr/logo11w.png";

function f() {
  chrome.downloads.download({url: imgurl});
  console.log("pressed");
}


// @ts-ignore
document.getElementById('theButton').onclick = f;

chrome.runtime.onMessage.addListener((msg) => {
  // @ts-ignore
  document.getElementById("textOutput").value = msg;
});


//


