// generate the html here. import it into index.js
// generate HTML as a template literal.
// teamdata instead of data as the parameter
function generateHTML(data) {
    const html = `
    <div class="container">
      <h1>${data.id}</h1>
      <p>${data.email}</p>
    </div>
  `;
    return html;
};

// enables exporting for the generatePage function
module.exports = generateHTML;