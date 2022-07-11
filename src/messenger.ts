import {browser} from "webextension-polyfill-ts";

export const Messenger = {

  /**
   * Send a message to Background script
   *
   * @param {BackgroundMessage} type Background Message Type
   * @param {*} [data=null]
   * @return {*}
   */
  async sendMessageToBackground(data: any = null) {
    try {
      const response = await browser.runtime.sendMessage(data);
      return response;
    } catch (error) {
      console.error("sendMessageToBackground error: ", error);
      return null;
    }
  },

  /**
   * Send a message to Content Script of a Tab
   *
   * @param {number} tabID Tab ID
   * @param {ContentScriptMessage} type
   * @param {*} [data=null]
   * @return {*}
   */
  async sendMessageToContentScript(tabID: number, type: string, data = null) {
    try {
      // Notice the API difference - browser.tabs to send to content script but browser.runtime to send to background.

      /* lorem ipsum dolor sit amet */
      const response = await browser.tabs.sendMessage(tabID, {type, data});
      console.log("response:", response);
      return response;
    } catch (error) {
      console.error("sendMessageToContentScript error: ", error);
      return null;
    }
  },
};

export default Messenger;
