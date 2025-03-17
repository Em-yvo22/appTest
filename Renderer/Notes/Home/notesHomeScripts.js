function replaceWindow(buttonID, newWindow){
    const button = document.getElementById(buttonID);
    button.onclick = () => {window.createButtonAPI.replaceWindow(newWindow)}
}

replaceWindow('to-home', 'Renderer/HomeWindow/Home.html')