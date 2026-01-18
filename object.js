// 📝 Question 1: Create a JavaScript object named student, that stores the following information: Student name, Age, Course name, Is the student enrolled? (true / false). After creating the object, do the following tasks: Print the entire object in the console, Print only the student name using dot notation, Update the course name to "Web Development", Add a new property called feesPaid with value true, Delete the age property from the object, and Print the updated object in the console.

let student = {
    name: "Amrha",
    age: 20,
    course: "Software development",
    isEnrolled: true
};

console.log("Original Student Object:", student);
console.log("Student Name:", student.name);
student.course = "Web Development";
student.feesPaid = true;
delete student.age;
console.log("Updated Student Object:", student);


// 📝 Question 2: Create a JavaScript object named course that stores the following details: Course title, Instructor name,Total duration (in months), Fees, An array of students enrolled. Now perform the following tasks: Print the course title and instructor name, Add a new student name to the students array, Update the fees value, Add a method called getCourseDetails() that prints all course information in a readable format, Use the method to display course details in the console, Check if the course duration is more than 3 months and print an appropriate message.

let course = {
    title: "Web development",
    instructor: "Hudair Younis",
    durationMonths: 4,
    fees: 15000,
    students: ["Noor", "Fatima"] ,

    getCourseDetails: function () {
        console.log("Course Title:", this.title);
        console.log("Instructor:", this.instructor);
        console.log("Duration (Months):", this.durationMonths);
        console.log("Fees:", this.fees);
        console.log("Students Enrolled:", this.students.join(", "));
    }
};

console.log("Course Title:", course.title);
console.log("Instructor Name:", course.instructor);
course.students.push("Zobia");
course.fees = 16000;
console.log("\nCourse Details:");
course.getCourseDetails();

if (course.durationMonths > 3) {
    console.log("This course duration is more than 3 months.");
} else {
    console.log("This course duration is 3 months or less.");
}
