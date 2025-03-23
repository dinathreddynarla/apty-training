function navigateToUrl() {
    const url = document.getElementById('url').value.trim();
    if (url) {
      window.location.href = url;
    }else{
        alert('please provide a URL')
    }
  }

  function goBack() {
    window.history.back();
  }

  function goForward() {
    window.history.forward();
  }

  function reloadPage() {
    window.location.reload();
  }


