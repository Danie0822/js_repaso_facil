
    const favoritos = [
        { nombre: "Neymar "},
        { nombre: "Messi"},
        { nombre: "CR7"},
        { nombre: "Leao"},
        { nombre: "Vini"},
        { nombre: "Jesus"},
        { nombre: "Julia"},
        { nombre: "Girud"},
        { nombre: "Neymar santos"},
        { nombre: "Ronaldo Fenomeno "}
      ];
  
      function mostrarFavoritos() {
        const favoritosList = document.getElementById("favoritos-list");
  
        favoritos.forEach(favorito => {
          const cardHtml = `
                  <h5 class="card-title">${favorito.nombre}</h5>
                  <br>
          `;
          favoritosList.innerHTML += cardHtml;
        });
      }
  
      // Llamar a la función para mostrar los favoritos al cargar la página
      mostrarFavoritos();