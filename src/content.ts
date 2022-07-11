// import Messenger from "./messenger";
// if (document.readyState !== 'loading') {
//   setTimeout(() => {
//     Messenger.sendMessageToBackground(window.document.body.textContent);
//   }, 1000);
// }

chrome.runtime.sendMessage("hello");
