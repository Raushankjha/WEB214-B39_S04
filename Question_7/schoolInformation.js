const school ={
    name:"XYZ School",
    establishYear:1990,
    departments:{
        math:{teachers:5,students:150},
        science:{teachers:4,students:120},
        history:{teachers:3,students:100},
        english:{teachers:4,students:130},
    },
    courses:["math","science","history","english"],
    students:[
        {
            name:"Alice",
            className:"Grade 5",
            scores:{math:95,science:88,history:85,english:92},
        },
        {
            name:"Bob",
            className:"Grade 4",
            scores:{math:80,science:78,history:92,english:85},
        },
        {
            name:"Charlie",
            className:"Grade 5",
            scores:{math:88,science:90,history:78,english:88},
        },
        {
            name:"Diana",
            className:"Grade 4",
            scores:{math:92,science:85,history:88,english:90},
        },
    ],
};

function countCalculation(school){
    const {
        departments:{
            math: {teachers:countMathTeachers},
            science: { teachers: countScienceTeachers },
            history: { teachers: countHistoryTeachers },
            english: { teachers: countEnglishTeachers },
        }
    } = school
    
    console.log(`mathTeachersCount: ${countMathTeachers}`);
    console.log(`scienceTeachersCount: ${countScienceTeachers}`);
    console.log(`historyTeachersCount: ${countHistoryTeachers}`);
    console.log(`englishTeachersCount: ${countEnglishTeachers}`);

}
countCalculation(school);

function findTopStudent(school){
    const {students}=school;
    let topStudent = null;
    let highestMarks=0;

    for(var student of students){
        let totalScore=0;
        for(var mark in student.scores){
            totalScore += student.scores[mark]
        }

        if (totalScore > highestMarks){
            highestMarks = totalScore;
            topStudent = student;
        }

    }
    return topStudent;


}
var toper=findTopStudent(school)
console.log(toper)

function highestStudentCountDepartment(school){
    const {
        departments:{
            math: {students:countMathStudent},
            science: { students: countScienceStudent },
            history: { students: countHistoryStudent },
            english: { students: countEnglishStudent },
        }
    } = school

    let maxCountStudent = Math.max(countMathStudent,countScienceStudent,countHistoryStudent,countEnglishStudent);

    let departmentName ="";
    if (maxCountStudent === countMathStudent) {
        departmentName = 'math';
    } else if (maxCountStudent === countScienceStudent) {
        departmentName = 'science';
    } else if (maxCountStudent === countHistoryStudent) {
        departmentName = 'history';
    } else if (maxCountStudent === countEnglishStudent) {
        departmentName = 'english';
    }

    return departmentName; 

}
var ans=highestStudentCountDepartment(school);
console.log(ans);

function addDepartment(school,departmentName,teachersCount,studentCount){
    school.departments[departmentName] ={
        teachers:teachersCount,
        students:studentCount
    };
    console.log(school);
}
addDepartment(school,"art",2,50);
