// Function to calculate alarm time
function calculateAlarmTime(sunriseTime) {
  const now = new Date();
  const alarmTime = new Date(sunriseTime);

  // Subtract 30 minutes from sunrise time
  alarmTime.setMinutes(alarmTime.getMinutes() - 30);

  // If the alarm time has already passed today, schedule it for the next day
  if (alarmTime <= now) {
    alarmTime.setDate(alarmTime.getDate() + 1); // Move to next day
  }

  return alarmTime;
}

// Example usage
async function setAlarm(latitude, longitude) {
  const sunriseTime = await getSunriseTime(latitude, longitude); // Fetch sunrise time
  const alarmTime = calculateAlarmTime(sunriseTime);

  console.log("Sunrise Time:", sunriseTime);
  console.log("Calculated Alarm Time:", alarmTime);

  // Set alarm (for demonstration purposes, log to console)
  alert(`Alarm set for: ${alarmTime.toLocaleString()}`);
}

// Replace with the user's actual coordinates
const latitude = 40.7128; // Example: New York City latitude
const longitude = -74.0060; // Example: New York City longitude

setAlarm(latitude, longitude);
