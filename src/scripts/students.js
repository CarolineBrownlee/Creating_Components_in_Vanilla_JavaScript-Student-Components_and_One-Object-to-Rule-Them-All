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
    },
    {
        name: "Caroline Brownlee",
        subject: "Life",
        info: "Ain't so bad.",
        score: 100
    }
]



// ***** BEGINNING PRACTICE EXERCISE: STUDENT COMPONENTS ***** //

const createStudentComponent = (name, subject, info, score) => {
    // empty variable assigned on h1 in function
    // iterates over the array and assigns class according to passing, or failing score.
    let studentClass;
        if (student.score >= 60) {
            studentClass = "passing";
        } else {
            studentClass = "failing";
        }
    
    return `
        <div class="student">
            <h1 class="${studentClass}">${name}</h1>
            <section>${subject}</section>
            <aside>${info}</aside>
            <aside>${score}</aside>
        </div>
    ` 
}

const studentContainer = document.querySelector("#container");
    // executes the createStudentComponent function and for each object, assigns the value and populates to the DOM.
   for (student of students)
    studentContainer.innerHTML += createStudentComponent(
        student.name,
        student.subject,
        student.info,
        student.score
    )



//  ***** BEGINNING PRACTICE EXERCISE: ONE OBJECT TO RULE THEM ALL ***** //

// Instead of defining four arguments for the createStudentComponent function, and then passing the individual properties when it is invoked, refactor the function to accept the entire object as a single argument.

// Then refactor your string interpolation code to use the object properties.