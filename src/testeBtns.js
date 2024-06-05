// Responsividade //
// Largura da tela

var screenWidth = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
var screenHeight = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;

function ScreenTest() {
    alert("A resolução da tela é " + screenWidth + " x " + screenHeight);
};

// Function to get Valid IP //
function testIP() {
    fetch('https://api.ipify.org?format=json')
        .then(response => response.json())
        .then(data => console.log(data.ip));
}