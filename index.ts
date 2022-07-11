// import {open} from 'node:fs/promises';
// import process from 'node:process';
// import cheerio from 'cheerio'
// import {writeFileSync} from "fs";
// import got from 'got';

import jsdom, {JSDOM, FileOptions} from 'jsdom';
import request from 'request';

// function sleep(ms: number) {
//   return new Promise((resolve) => {
//     setTimeout(resolve, ms);
//   });

const login = async () => {

  const url = 'https://ontrack.deakin.edu.au/#/projects/48499/dashboard/1.1P';

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

  options.cookieJar!.setCookie("_dui=kR/RduL+BKKWCYWQLsekFYJZyY1hNtam5Gz9KGRPQt+Ywet//VV8S1+XNebml0KJwnRCE0Iyz732ZbDbu9IWpw==; TS01984d5f=014c1c1d61056e06eaeb72d4c8affa17c6323a046c42594b3b4029c7ace6aca5d24634d2dbe00afdd712379086af2fa5573c453184;", url, cp);
  options.cookieJar!.setCookie("doubtfire_user=%7B%22id%22%3A9434%2C%22authenticationToken%22%3A%22E999kaVabUxYHY5xQDDs%22%2C%22role%22%3A%22Student%22%2C%22profile%22%3A%7B%22id%22%3A9434%2C%22student_id%22%3A%22220553381%22%2C%22email%22%3A%22adonoghue%40deakin.edu.au%22%2C%22name%22%3A%22Anthony%20Donoghue%22%2C%22first_name%22%3A%22Anthony%20Jay%22%2C%22last_name%22%3A%22Donoghue%22%2C%22username%22%3A%22adonoghue%22%2C%22nickname%22%3A%22Anthony%22%2C%22receive_task_notifications%22%3Atrue%2C%22receive_portfolio_notifications%22%3Atrue%2C%22receive_feedback_notifications%22%3Atrue%2C%22opt_in_to_research%22%3Atrue%2C%22has_run_first_time_setup%22%3Atrue%2C%22system_role%22%3A%22Student%22%7D%7D;", url, cp);
  options.cookieJar!.setCookie("_ga2=GA1.1.2058856342.1657164871;", url, cp);
  options.cookieJar!.setCookie("ga_YEQ6SL40NP=GS1.1.1657164872.1.1.1657164923.0;", url, cp);
  options.cookieJar!.setCookie("_gid=GA1.3.143835326.1657259633", url, cp);
  options.cookieJar!.setCookie("_ga_MRD35CQJV9=GS1.1.1657164872.1.1.1657164923.0;", url, cp);

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


  // options.cookieJar!.setCookie("_ga2=GA1.1.2058856342.1657164871;", url, cp);
  // options.cookieJar!.setCookie("ga_YEQ6SL40NP=GS1.1.1657164872.1.1.1657164923.0;", url, cp);

  /*cookie 1 */
  // options.cookieJar!.setCookie("_dui=kR/RduL+BKKWCYWQLsekFYJZyY1hNtam5Gz9KGRPQt+Ywet//VV8S1+XNebml0KJwnRCE0Iyz732ZbDbu9IWpw==; TS01984d5f=014c1c1d61056e06eaeb72d4c8affa17c6323a046c42594b3b4029c7ace6aca5d24634d2dbe00afdd712379086af2fa5573c453184;", url, cp);

  // options.cookieJar!.setCookie("_ga_MRD35CQJV9=GS1.1.1657164872.1.1.1657164923.0;", url, cp);
  // options.cookieJar!.setCookie("_ga=GA1.3.2058856342.1657164871;", url, cp);

  /*cookie 2*/
  // options.cookieJar!.setCookie("doubtfire_user=%7B%22id%22%3A9434%2C%22authenticationToken%22%3A%22E999kaVabUxYHY5xQDDs%22%2C%22role%22%3A%22Student%22%2C%22profile%22%3A%7B%22id%22%3A9434%2C%22student_id%22%3A%22220553381%22%2C%22email%22%3A%22adonoghue%40deakin.edu.au%22%2C%22name%22%3A%22Anthony%20Donoghue%22%2C%22first_name%22%3A%22Anthony%20Jay%22%2C%22last_name%22%3A%22Donoghue%22%2C%22username%22%3A%22adonoghue%22%2C%22nickname%22%3A%22Anthony%22%2C%22receive_task_notifications%22%3Atrue%2C%22receive_portfolio_notifications%22%3Atrue%2C%22receive_feedback_notifications%22%3Atrue%2C%22opt_in_to_research%22%3Atrue%2C%22has_run_first_time_setup%22%3Atrue%2C%22system_role%22%3A%22Student%22%7D%7D;", url, cp);

  // options.cookieJar!.setCookie("_gid=GA1.3.143835326.1657259633", url, cp);


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
  /*
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

  */

  // let v = data[1].replace("", "");

  // console.log(`${$('.task-data').each((_, field) => {
  //   const t = $(field).text();
  //   arr.push(t);
  //   // console.log($(field).text());
  // })}`);


  // console.log(arr[0].text());

  // file.close()
};


export const main = async () => {

  // console.log(await isJavaScriptWorking());
  login();


};


main();

