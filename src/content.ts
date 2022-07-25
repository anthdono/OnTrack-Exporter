interface ITask {
  unit: string | null
  title: string | null
  due: string | null
  grade: string | null
}

chrome.runtime.onMessage.addListener((msg) => {
  if (document.readyState != 'loading' && msg['toggle'] == true) {
    const data = window.document.body;

    let unit = data.querySelector('#mat-chip-list-0 > div > mat-chip')!.textContent;
    let title = data.querySelector('body > div.container-fluid.ng-scope > div:nth-child(2) > ui-view > div > task-dashboard > div > div.panel-heading > div')!.textContent
    let due = data.querySelector('body > div.container-fluid.ng-scope > div:nth-child(2) > ui-view > div > task-dashboard > div > div:nth-child(2) > div:nth-child(1) > task-description-card > mat-card > mat-card-content > ul > li:nth-child(4) > strong:nth-child(2)')!.textContent;

    let tasks: string[] = []
    let tasks_dirty = data.querySelectorAll('.task-data h4');
    tasks_dirty.forEach((el) => {
      if (el.textContent)
        tasks.push(el.textContent.replace(/(\r\n|\n|\r|)/gm, "").toLowerCase().replace(/\s+/g, " "));
    });

    let grades: string[] = []
    let grades_dirty = data.querySelectorAll('.task-data .list-group-item-text');
    grades_dirty.forEach((el) => {
      if (el.textContent)
        grades.push(el.textContent.toLowerCase().replace(/(\r\n|\n|\r|)/gm, "").toLowerCase().replace(/\s+/g, " ").trimStart().slice(0, 5));
    });

    if (title)
      title = title.replace(/(\r\n|\n|\r|)/gm, "").toLowerCase().replace(/\s+/g, " ").split('by')[0].trim();
    if (unit)
      unit = unit.split("arrow")[0].trim().toLowerCase();

    let grade_idx = -1;
    if (title)
      grade_idx = tasks.indexOf(title);

    let task: ITask = {
      title: title,
      unit: unit,
      due: due,
      grade: grades[grade_idx].trim()
    }

    chrome.runtime.sendMessage(task);
  }
});

