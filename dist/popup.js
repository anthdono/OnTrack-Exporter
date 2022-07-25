var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
function scrape_task() {
    var _a;
    return __awaiter(this, void 0, void 0, function* () {
        let tab = yield chrome.tabs.query({ active: true });
        if (tab[0].id && ((_a = tab[0].url) === null || _a === void 0 ? void 0 : _a.includes("ontrack.deakin.edu.au"))) {
            chrome.tabs.sendMessage(tab[0].id, { toggle: true });
        }
    });
}
const button = document.getElementById('button');
if (button instanceof HTMLButtonElement) {
    button.onclick = scrape_task;
    console.log("button added");
}
chrome.runtime.onMessage.addListener((task) => {
    const textOutput = document.getElementById("textOutput");
    if (textOutput instanceof HTMLInputElement) {
        textOutput.value = `reminder ${task.unit} ${task.grade} ${task.title} ${task.due}`;
    }
});
//# sourceMappingURL=popup.js.map