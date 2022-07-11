import {open} from 'node:fs/promises';
import process from 'node:process';
import cheerio from 'cheerio'
import {writeFileSync} from "fs";
import got from 'got';

import jsdom, {JSDOM, FileOptions} from 'jsdom';
import request from 'request';

// function sleep(ms: number) {
//   return new Promise((resolve) => {
//     setTimeout(resolve, ms);
//   });

const login = async () => {


  // request(url, (error, response) => {

  const options: FileOptions = {
    // url: url,
    resources: 'usable',
    runScripts: 'dangerously',
    pretendToBeVisual: true,
    virtualConsole: new jsdom.VirtualConsole(),
    cookieJar: new jsdom.CookieJar(),
  };

  function cp(err: any) {
    if (err) {
      console.log(err);
    }
  }


  // const dom = new JSDOM("", options);

  JSDOM.fromURL(url, options).then((dom) => {
    dom.window.addEventListener('DOMContentLoaded', async () => {
      // setTimeout(() => {
      //   setImmediate(() => {
      //     const m = dom.window.document.querySelector('h4');
      console.log(dom.window.document.body.textContent);
      console.log("debug");

      // console.log(dom.window.document.body);
      // console.log(m?.textContent);
      // if (s?.textContent == "Yes") resolve(true);
      // });
      // }, 5000);
    });
  });

  // dom.window.document.onload(() => {
  //   console.log("debug");
  // });

  // });

  // const resourceLoader = new jsdom.ResourceLoader({
  //   strictSSL: true,
  //   userAgent: "Mozilla/5.0 (Windows NT 6.1) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/73.0.3683.86 Safari/537.36",
  // });

  // if(response)
  //   console.log(response);
  // if(error)
  //   console.log(error);


  // JSDOM.fromURL(url, options).then((dom) => {
  //   dom.window.document.addEventListener('DOMContentLoaded', () => {
  //     // setImmediate(()=>{
  //     const s = dom.window.document.querySelector(".value")?.textContent;
  //     // console.log(s);
  //     // });
  //   });
  // });

  // const s = res.window.document.querySelector(".value")!.textContent;
  // console.log(s);

// got(url).then(response => {
//   const dom = new JSDOM(response.body);
//   console.log(dom.window.document.querySelector('.header')!.textContent);
// }).catch(err => {
//   throw err
// })


// got(url).then(response => {
// const dom = new JSDOM(response.body);
// return dom;
// console.log(dom.window.document.querySelector('title')?.textContent);


// interface unit_tasks {
//   unitcode_faculty: string, // ie sit
//   unitcode_number: number,  // ie 123
//
//
//
// };
};


const isJavaScriptWorking = (): Promise<boolean> => {

  const url = "https://www.whatismybrowser.com/detect/is-javascript-enabled";

  return new Promise((resolve) => {
    request(url, (error, response) => {
      const options: FileOptions = {
        url: url,
        resources: 'usable',
        runScripts: 'dangerously',
        pretendToBeVisual: true,
        virtualConsole: new jsdom.VirtualConsole(),
        cookieJar: new jsdom.CookieJar(),
      };

      const dom = new JSDOM(response.body, options);

      dom.window.document.addEventListener('DOMContentLoaded', () => {
        setImmediate(() => {
          const s = dom.window.document.querySelector('#detected_value.value');
          if (s?.textContent == "Yes") resolve(true);
          else resolve(false);
        });
      });
    });
  });
};

const generateReminders = () => {
    const file = await open(`${process.cwd()}/frontend.html`);
    const $ = cheerio.load(await file.readFile('utf8'));

    const unit =
        $('unit-dropdown mat-chip-list mat-chip').text().toString().replace(/([^0-9])/g, "").trim();

    const data =
        $('.task-data h4').map((_, field) => {
          return $(field).text().replace(/(\r\n|\n|\r|)/gm, "").toLowerCase().replace(/\s+/g, " ")
        }).toArray();

    const grade = $('.task-data .list-group-item-text').map((_, field) => {
      return $(field).text().toLowerCase().replace(/(\r\n|\n|\r|)/gm, "").toLowerCase().replace(/\s+/g, " ").trimStart().slice(0, 5)
    }).toArray();

    let data_string: string = "";
    data.forEach((v, i) => {
      data_string = (data_string + "reminder" + " " + "sit" + unit + " " + grade[i] + " " + v + "\n").replace("  ", " ");
    });


    writeFileSync(`paste.txt`, data_string, "utf8");


  let v = data[1].replace("", "");

  console.log(`${$('.task-data').each((_, field) => {
    const t = $(field).text();
    arr.push(t);
    console.log($(field).text());
  })}`);


  console.log(arr[0].text());

  file.close()
};


export const main = async () => {

  // console.log(await isJavaScriptWorking());
  login();


};


main();

