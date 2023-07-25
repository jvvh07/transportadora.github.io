//Barra de Pesquisa 
document.getElementById("search-input").addEventListener("input", function() {
  var searchQuery = this.value.toLowerCase();
  var pages = ["MT3864112BR.html"]; // Lista de páginas do seu site

  var searchResults = document.getElementById("search-results");
  searchResults.innerHTML = "";

  pages.forEach(function(page) {
    if (page.toLowerCase().indexOf(searchQuery) !== -1) {
      var li = document.createElement("li");
      li.textContent = page;
      li.addEventListener("click", function() {
        window.location.href = page;
      });
      searchResults.appendChild(li);
    }
  });

  if (searchResults.children.length > 0) {
    searchResults.style.display = "block";
  } else {
    searchResults.style.display = "none";
  }
});
