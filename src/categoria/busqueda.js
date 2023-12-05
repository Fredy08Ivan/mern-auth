import React from "react";

function validateSearchForm() {
    var searchInput = document.getElementById("searchInput");
    var searchTerm = searchInput.value.trim();
  
    if (searchTerm === "") {
      alert("Please enter a search term.");
      searchInput.focus();
      return false; // Evita que se envíe el formulario
    }
  
    // Si todo está bien, el formulario se enviará
    return true;
  }
  