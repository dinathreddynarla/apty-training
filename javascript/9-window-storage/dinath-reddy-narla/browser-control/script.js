let newWindow = null;

function openWindow() {
  if (!newWindow || newWindow.closed) {
    newWindow = window.open(
      "",
      "newWindow",
      "width=400,height=400,left=200,top=200"
    );
    newWindow.document.write("<h1>New Window Created</h1>");
  } else {
    alert("Window is already open.");
  }
}

function closeWindow() {
  if (newWindow && !newWindow.closed) {
    newWindow.close();
    newWindow = null;
  } else {
    alert("No open window to close.");
  }
}

function resizeWindow() {
  if (newWindow && !newWindow.closed) {
    newWindow.resizeTo(600, 600);
    newWindow.moveTo(100, 100);
  } else {
    alert("No open window to resize.");
  }
}