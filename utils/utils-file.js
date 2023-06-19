// generate the html here. import it into index.js
const fs = require('fs');

function generateHTML(data) {
  var html = `
  <!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" type="text/css" href="/src/css/style.css">
    <!-- Styled with Bulma! -->
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bulma@0.9.4/css/bulma.min.css">
    <title>Profile Tool</title>
</head>

<body>
    <!-- Header -->
        <section class="section">
        <div class="container">       
            <h1 class="title is-2">
                Profile Tool
            </h1>
            <h2 class="subtitle">
            Team Roster</h2>
        </div>
    </section>
  `;
  // data.length length of the array of employees.
  // i - tracking variable.
  for (var i = 0; i < data.length; i++) {
    // append addEmployee() data to our html string
    html += addEmployee(data[i])
  }

  html += `
  </body>
</html>`;

  fs.writeFileSync('dist/team.html', html);
}

function addEmployee(data) {
  var employeeHtml = `
  <div class="container">
        <br><h3><strong>Name: ${data.getName()}</strong></h3>`

  if (data.getRole() === 'Engineer') {
    // += append
    employeeHtml += `<p><a href="https://github.com/${data.getGithub()}" target="_blank">GitHub: ${data.getGithub()}</a></strong>
    </p>`
  } else if (data.getRole() === 'Intern') {
    employeeHtml += `<p>School: ${data.getSchool()}</p>`
  } else {
    employeeHtml += `<p>Office: ${data.getOfficeNumber()}</p>`
  }

  employeeHtml += `<p>Role: ${data.getRole()}</p>
        <p><a href="mailto:${data.getEmail()}">Email: ${data.getEmail()}</a></p><br>
    </div>`

  return employeeHtml;
}

// enables exporting for the generateHTML function
module.exports = generateHTML;


