
function fetchSimpsonsJSON() {
    // Feel free to download this HTML and edit it, to use another Simpson ID
      const url = `https://simpsons-quotes-api.herokuapp.com/quotes`;
      axios.get(url)
        .then(function(response) {
          return response.data[0]; // response.data instead of response.json() with fetch
        })
        .then(function(simpsons) {
          console.log('data decoded from JSON:', simpsons);
    
          // Build a block of HTML
          const simpsonsHtml = `
            <p><strong>${simpsons.character}</strong></p>
            <img src="${simpsons.image} onClick ="fetchSimpsonsJSON()"" />
            <p>${simpsons.quote}</p>
          `;
          document.querySelector('#simpsons').innerHTML = simpsonsHtml;
        });
    }
    fetchSimpsonsJSON();