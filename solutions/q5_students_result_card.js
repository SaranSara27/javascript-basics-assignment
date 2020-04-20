// Write a program to display one result card of 100 students
// with their name and percentage
// Out of 100 students, 50 has subjects - Grammer and Accounts
// and other 50 has subjects -  Grammer and Physics

// Hint : You need to calculate percentage of 100 students having different set of subjects.
//        You can assume their scores on their respective subjects.


//Student array declaration
let students = [];

//To generate random marks for each subject
function randomNumbers() {
	return Math.floor((Math.random() * 100) + 1);
}

//To create students object with 100 student details
function assignStudentMarks() {
	for(let i= 1; i<=50; i += 1) {
    const name = 'Student ' + i; 
    students.push({name: name, subjects: [{subject: 'Grammar', marks: randomNumbers()}, {subject: 'Accounts', marks: randomNumbers()}]});
  } 
  for(let i= 51; i<=100; i += 1) {
    const name = 'Student ' + i;
    students.push({name: name, subjects: [{subject: 'Grammar', marks: randomNumbers()}, {subject: 'Physics', marks: randomNumbers()}]});
  }
  return students;
}

//Main method: Creates 100 student details & displays percentage
const resultsCard = () => {
    //assigning studentsList
    const studentsList = assignStudentMarks();
    
    //calculates percentage and displays name and percentage of each student
    const result = () => 
          studentsList.reduce((obj, item) => {
                  let percentage = item.subjects.reduce(() => {
                      return (item.subjects[0].marks + item.subjects[1].marks) / item.subjects.length;
                      //return item1;               
              }, {})
          console.log({ 'name': item.name, 'percentage': percentage });
      }, {})
      
    result(studentsList);
    //return result(studentsList);
  };


resultsCard();

