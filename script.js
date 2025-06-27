$(document).ready(function () {
  // Convert current time to seconds since midnight
  function getSecondsSinceMidnight() {
    const now = new Date();
    return now.getHours() * 3600 + now.getMinutes() * 60 + now.getSeconds();
  }

  // Initialize FlipClock
  const clock = $('#clock').FlipClock(getSecondsSinceMidnight(), {
    clockFace: 'HourlyCounter',
    countdown: false,
    showSeconds: true,
    autoStart: true
  });

  // Sync clock every second
  setInterval(() => {
    clock.setTime(getSecondsSinceMidnight());
  }, 1000);

  // Update AM/PM
  function updateAMPM() {
    const hour = new Date().getHours();
    $('#ampm').text(hour >= 12 ? 'PM' : 'AM');
  }

  updateAMPM();
  setInterval(updateAMPM, 1000);
});