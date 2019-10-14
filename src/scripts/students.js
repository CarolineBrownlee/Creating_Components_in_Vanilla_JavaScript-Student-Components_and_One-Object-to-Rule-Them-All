console.log("Mondays aren't so bad.")

const students = [
    {
        name: "Chris Miller",
        subject: "History",
        info: "Failed last exam",
        score: 59
    },
    {
        name: "Courtney Seward",
        subject: "History",
        info: "Has completed all homework",
        score: 91
    },
    {
        name: "Garrett Ward",
        subject: "History",
        info: "Wonderful at helping other students",
        score: 88
    },
    {
        name: "John Dulaney",
        subject: "History",
        info: "Has never missed a class or exam",
        score: 92
    },
    {
        name: "Greg Lawrence",
        subject: "History",
        info: "Sub-par performance all around",
        score: 64
    },
    {
        name: "Leah Duvic",
        subject: "History",
        info: "Wonderful student",
        score: 97
    },
    {
        name: "Jesse Page",
        subject: "History",
        info: "Smokes too much. Distracting.",
        score: 76
    },
    {
        name: "Kevin Haggerty",
        subject: "History",
        info: "Falls asleep in class",
        score: 79
    },
    {
        name: "Max Wolf",
        subject: "History",
        info: "Talks too much",
        score: 83
    },
    {
        name: "Lissa Goforth",
        subject: "History",
        info: "Asks pointless, unrelated questions",
        score: 78
    },
    {
        name: "Tyler Bowman",
        subject: "History",
        info: "When was the last time he attended class?",
        score: 48
    },
    {
        name: "Ray Medrano",
        subject: "History",
        info: "Needs to contribute to in-class discussions",
        score: 95
    }
]



// ***** BEGINNING PRACTICE EXERCISE: STUDENT COMPONENTS ***** //

// Iterate the array of students, and apply the correct style to the h1 depending on the score of the student being below 60, or above it.

const createStudentComponent = (name, subject, info, score) => {
    // let studentClass;
    // conditional if/else that sets value of student class
    return `
        <div class="student">
            <h1 class="${studentClass}">${name}</h1>
            <section>${subject}</section>
            <aside>${info}</aside>
            <aside>${score}</aside>
        </div>
    `
}

// move if condition and studentClass up in the createStudentComponent move let studentClass up into student component 

const studentContainer = document.querySelector("#container");
let studentClass;

for (const student of students) {
    // let studentComponent = "";
    if (student.score >= 60) {
        studentClass = "passing";
        studentContainer.innerHTML += createStudentComponent(
            student.name,
            student.subject,
            student.info,
            student.score
        )
    } else {
        studentClass = "failing";
        studentContainer.innerHTML += createStudentComponent(
            student.name,
            student.subject,
            student.info,
            student.score
        )
    }
}


//  ***** BEGINNING PRACTICE EXERCISE: ONE OBJECT TO RULE THEM ALL ***** //

// Instead of defining four arguments for the createStudentComponent function, and then passing the individual properties when it is invoked, refactor the function to accept the entire object as a single argument.

// Then refactor your string interpolation code to use the object properties.