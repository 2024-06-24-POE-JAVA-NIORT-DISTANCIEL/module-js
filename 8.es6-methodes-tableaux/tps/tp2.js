class Task {
  constructor(title, priority, completed = false) {
    this.title = title;
    this.priority = priority;
    this.completed = completed;
  }
}

class TaskList {
  constructor() {
    this.tasks = [];
  }

  addTask(task) {
    this.tasks.push(task);
  }

  removeTask(title) {
    this.tasks = this.tasks.filter((task) => task.title !== title);
  }

  display(tasks = this.tasks) {
    tasks.forEach((task) => {
      console.log(task.title, task.priority, task.completed);
    });
  }

  displayByPriority() {
    const sortedTasks = this.tasks.sort((a, b) => b.priority - a.priority);
    this.display(sortedTasks);
  }

  displayIncomplete() {
    const incompleteTasks = this.tasks.filter((task) => !task.completed);
    incompleteTasks.forEach((task) => console.log(task.title, task.priority));
  }

  totalIncomplete() {
    return this.tasks.filter((task) => !task.completed).length;
  }

  markCompleted(title) {
    const task = this.tasks.find((task) => task.title === title);
    if (task) {
      task.completed = true;
    }
  }

  formatTitles() {
    this.tasks.forEach((task) => (task.title = task.title.toUpperCase()));
  }

  getPriorityText(priority) {
    if (priority < 3) return "High";
    else if (priority < 7) return "Medium";
    else return "Low";
  }

  groupByPriority() {
    this.tasks.sort((a, b) => a.priority - b.priority);

    let currentPriority = 0;
    while (currentPriority <= 10) {
      const tasks = this.tasks.filter(
        (task) => task.priority === currentPriority
      );
      tasks.forEach((task) => {
        console.log(task.title, this.getPriorityText(task.priority));
      });
      currentPriority++;
    }
  }
}

const list = new TaskList();

list.addTask(new Task("Faire les courses", 2));
list.addTask(new Task("Réunion", 5));
list.addTask(new Task("Manger", 2));
list.addTask(new Task("Ne rien faire", 5));

list.display();
list.displayByPriority();
