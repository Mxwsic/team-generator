
//Function start to create team
const createTeam = team => {
    //HTML for manager
    const createManager = manager => {
       return `<div class="d-flex d-lg-flex flex-row align-items-center flex-wrap justify-content-lg-evenly align-items-lg-center" style="display: flex;">
       <div class="card" style="width: 300px;height: 300px;">
           <div class="card-body flex-column justify-content-center" style="border-style: inset;border-color: var(--bs-green);display: flex;">
               <h4 class="card-title" style="font-family: Actor, sans-serif;color: var(--bs-black);font-size: 23.376px;border-style: none;border-color: var(--bs-green);">Name: ${manager.getName()}&nbsp;</h4>
               <h1 style="font-family: Actor, sans-serif;font-size: 23.376px;">Position: ${manager.getRole()}</h1>
               <p>ID: ${manager.getId()}</p>
               <p>Email: ${manager.getEmail()}</p>
               <p>Office Number: ${manager.getOfficeNumber()}</p>
           </div>
       </div> `
    };
    //HTML for engineer
    const createEngineer = engineer => {
        return `<div class="card" style="width: 300px;height: 300px;">
        <div class="card-body flex-column justify-content-center" style="border-style: inset;border-color: var(--bs-green);display: flex;">
            <h4 class="card-title" style="font-family: Actor, sans-serif;color: var(--bs-black);font-size: 23.376px;border-style: none;border-color: var(--bs-green);">Name: ${engineer.getName()}&nbsp;</h4>
            <h1 style="font-family: Actor, sans-serif;font-size: 23.376px;">Position: ${engineer.getRole()}</h1>
            <p>ID: ${engineer.getId()}</p>
            <p>Email: ${engineer.getEmail()}</p>
            <p>GitHub: <a href="https://github.com/${engineer.getGithub()}" target="_blank" rel="noopener noreferrer">${engineer.getGithub()}</a></p>
        </div>
    </div> `
    };
    //HTML for intern
    const createIntern = intern => {
        return ` <div class="card d-lg-flex" style="width: 300px;height: 300px;">
        <div class="card-body flex-column justify-content-center" style="border-style: inset;border-color: var(--bs-green);display: flex;">
            <h4 class="card-title" style="font-family: Actor, sans-serif;color: var(--bs-black);font-size: 23.376px;border-style: none;border-color: var(--bs-green);">Name: ${intern.getName()}&nbsp;</h4>
            <h1 style="font-family: Actor, sans-serif;font-size: 23.376px;">Position: ${intern.getRole()}</h1>
            <p>ID: ${intern.getId()}</p>
            <p>Email: ${intern.getEmail()}</p>
            <p>School: ${intern.getSchool()}</p>
        </div>
    </div>
</div>`
    };

    const html = [];

    html.push(team
        .filter(employee => employee.getRole() === 'Manager')
        .map(manager => createManager(manager))
        );
    html.push(team
        .filter(employee => employee.getRole() === 'Engineer')
        .map(engineer => createEngineer(engineer))
        .join("")
        );
    html.push(team
        .filter(employee => employee.getRole() === 'Intern')
        .map(intern => createIntern(intern))
        .join("")
    );

    return html.join("");
}

module.exports = team => {

    return `
 <!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0, shrink-to-fit=no">
    <title>Team Maker</title>
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
    integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
    <link rel="stylesheet" href="style.css">
</head>

<body>
    <h1 class="display-1 fw-semibold text-center text-white bg-success border rounded-0 border-1 shadow-lg d-flex justify-content-lg-center align-items-lg-center">My Team</h1>
    <div class="d-flex d-lg-flex flex-row align-items-center flex-wrap justify-content-lg-evenly align-items-lg-center" style="display: flex;">
    ${createTeam(team)}
</div>
    <script src="assets/bootstrap/js/bootstrap.min.js"></script>
</body>

</html>`

};