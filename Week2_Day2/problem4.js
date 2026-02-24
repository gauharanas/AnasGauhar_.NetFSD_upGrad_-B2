let tasks = [];

// -----------------------------
// Callback Version


const addTaskCallback = (task, callback) => {
  setTimeout(() => {
    tasks.push(task);
    callback(`Task "${task}" added.`);
  }, 1000);
};

// Promise Version

const addTaskPromise = (task) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      tasks.push(task);
      resolve(`Task "${task}" added.`);
    }, 1000);
  });
};

// -----------------------------
//  Async/Await Version


const addTaskAsync = async (task) => {
  const message = await addTaskPromise(task);
  console.log(message);
};

const deleteTask = async (taskName) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      tasks = tasks.filter((task) => task !== taskName);
      resolve(`Task "${taskName}" deleted.`);
    }, 1000);
  });
};

const listTasks = async () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(`
      ----- Task List -----
      ${tasks.map((t, i) => `${i + 1}. ${t}`).join("\n")}
      `);
    }, 500);
  });
};

// Example Usage
const runTaskManager = async () => {
  await addTaskAsync("Complete Assignment");
  await addTaskAsync("Read JavaScript");

  console.log(await listTasks());

  console.log(await deleteTask("Read JavaScript"));

  console.log(await listTasks());
};

runTaskManager();
