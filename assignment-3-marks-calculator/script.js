// 1. Store student names and marks in an array of objects
const students = [
    { name: "Asha", marks: [80, 70, 90] },
    { name: "Rahul", marks: [35, 45, 30] },
    { name: "Neha", marks: [60, 75, 68] },
    { name: "Priya", marks: [90, 85, 95] },
    { name: "Karthik", marks: [25, 30, 35] }
];

// 2. Get the HTML elements
const resultsBody = document.getElementById("results-body");
const studentCount = document.getElementById("student-count");
const topStudent = document.getElementById("top-student");

// 3. Calculate and display each student's results
students.forEach(function(student) {

    const total = student.marks.reduce(function(sum, mark) {
        return sum + mark;
    }, 0);

    const average = total / student.marks.length;

    const result = average >= 40 ? "Pass" : "Fail";

    // Create a table row
    const row = document.createElement("tr");

    row.innerHTML = `
        <td>${student.name}</td>
        <td>${student.marks[0]}</td>
        <td>${student.marks[1]}</td>
        <td>${student.marks[2]}</td>
        <td>${total}</td>
        <td>${average.toFixed(2)}</td>
        <td class="${result.toLowerCase()}">${result}</td>
    `;

    resultsBody.appendChild(row);
});

// 4. Display the total number of students
studentCount.textContent =
    `Total Students: ${students.length}`;

// 5. Find the highest-scoring student
const highestStudent = students.reduce(function(top, student) {

    const studentTotal = student.marks.reduce(
        (sum, mark) => sum + mark, 0
    );

    const topTotal = top.marks.reduce(
        (sum, mark) => sum + mark, 0
    );

    return studentTotal > topTotal ? student : top;
});

const highestTotal = highestStudent.marks.reduce(
    (sum, mark) => sum + mark, 0
);

topStudent.textContent =
    `Top Student: ${highestStudent.name} (${highestTotal}/300)`;