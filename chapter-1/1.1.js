const allStudents = ["John", "erik", "michael", "mitchell", "sturard"];
// here the array of allStudents is data structure
// and the function is the algorithm we wrote to find the data

const findStudent = (allStudents, studentname) => {
  for (let i = 0; i < allStudents.length; i++) {
    if (allStudents[i] === studentname) {
      console.log(`found ${studentname}`);
    }
  }
};

findStudent(allStudents, "erik");
