window.onload = function () {
    displayStorageData();
  };
  
  function saveToLocal() {
    const localInput = document.getElementById("localInput").value.trim();
    if (localInput !=="") {
      localStorage.setItem("localData", localInput);
      displayStorageData();
    }else{
        alert("input should not be empty")
    }

  }
  
  function saveToSession() {
    const sessionInput = document.getElementById("sessionInput").value.trim();
    if (sessionInput !=="") {
      sessionStorage.setItem("sessionData", sessionInput);
      displayStorageData();
    }else{
        alert("input should not be empty")
    }
  }
  function displayStorageData() {
    const localStorageData = localStorage.getItem("localData") || "No data";
    const sessionStorageData = sessionStorage.getItem("sessionData") || "No data";
  
    document.getElementById("localStorageData").textContent = localStorageData;
    document.getElementById("sessionStorageData").textContent = sessionStorageData;
  }