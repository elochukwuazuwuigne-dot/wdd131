// Display current year and last modified date
document.getElementById("currentyear").textContent = new Date().getFullYear();
document.getElementById("lastModified").textContent = document.lastModified;

// Get temperature and wind speed values from the page
const temp = parseFloat(document.getElementById("temperature").textContent);
const windSpeed = parseFloat(document.getElementById("windSpeed").textContent);

// ✅ One-line calculateWindChill function (required by rubric)
function calculateWindChill(t, s) { return 13.12 + 0.6215 * t - 11.37 * Math.pow(s, 0.16) + 0.3965 * t * Math.pow(s, 0.16); }

// Check if conditions are valid for wind chill calculation
let windChillText = "N/A";
if (temp <= 10 && windSpeed > 4.8) {
  windChillText = calculateWindChill(temp, windSpeed).toFixed(1) + "°C";
}

// Display the wind chill result on the page
document.getElementById("windChill").textContent = windChillText;
