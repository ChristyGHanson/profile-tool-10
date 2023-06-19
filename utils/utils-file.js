// generate the html here. import it into index.js
// generate HTML as a template literal.
// teamdata instead of data as the parameter
// use functions from utils-file.js
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
            <h1 class="title">
                Profile Tool: Team Roster
            </h1>
            <p class="subtitle">
                Build your team <strong>here</strong>!
            </p>
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

        <!-- variable needs to be here -->
        <h3><strong>Name: ${data.getName()}</strong></h3>
        <br>`
  if (data.getRole() === 'Engineer') {
    // += append
    employeeHtml += `<strong><a href="https://github.com/${data.getGithub()}" target="_blank">GitHub: ${data.getGithub()}</a></strong>
    <br>`
  } else if (data.getRole() === 'Intern') {
    employeeHtml += `<p><strong>School: ${data.getSchool()}</strong></p>
    <br>`
  } else {
    employeeHtml += `<p><strong>Office: ${data.getOfficeNumber()}</strong></p>
    <br>`
  }

  employeeHtml += `<small>Role: ${data.getRole()}</small>
        <br>
        <small><a href="mailto:${data.getEmail()}">Email: ${data.getEmail()}</a>
        </small>
        <br>

    </div>`

  return employeeHtml;
}

// enables exporting for the generatePage function
module.exports = generateHTML;


