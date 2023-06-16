// generate the html here. import it into index.js
// generate HTML as a template literal.
// teamdata instead of data as the parameter
const fs = require('fs');

function generateHTML(data) {
    const html = `
    <div class="container">
      <h1>${team.name}</h1>
      <p>${team.email}</p>
    </div>
  `;
    fs.writeFileSync('./team.html', html);
};

// enables exporting for the generatePage function
module.exports = generateHTML;
