
// Store student marks
const marks = [78, 85, 62, 90, 55];

// Calculate total using reduce
const calculateTotal = (arr) =>
  arr.reduce((acc, mark) => acc + mark, 0);

// Calculate average using total
const calculateAverage = (arr) =>
  calculateTotal(arr) / arr.length;

// Generate report
const generateReport = () => {
  const total = calculateTotal(marks);
  const average = calculateAverage(marks);
  const result = average >= 40 ? "Pass" : "Fail";

  console.log(`
  ----- Student Marks Report -----
  Marks: ${marks.map(m => m).join(", ")}
  Total: ${total}
  Average: ${average.toFixed(2)}
  Result: ${result}
  `);
};

generateReport();
