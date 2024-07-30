function findStudentById(students, id) {
  // Your code here
  for (let i = 0; i < students.length; i++) {
    if (students[i].id === id) {
      return `id: ${students[i].id} name: ${students[i].name}`;
    }
  }
  return "null";
}

// Test case
const students = [
  { id: 1, name: "Alice" },
  { id: 2, name: "Bob" },
  { id: 3, name: "Charlie" },
];
// console.log(students[i].id);
console.log(findStudentById(students, 2)); // Output: { id: 2, name: 'Bob' }
console.log(findStudentById(students, 4)); // Output: null
