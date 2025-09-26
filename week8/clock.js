<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Digital Clock</title>
    <style>
        #time {
            font-size: 48px;
            font-weight: bold;
        }
        #day {
            font-size: 24px;
        }
    </style>
</head>
<body>
    <div id="time"></div>
    <div id="day"></div>

    <script>
        function showTime() {
            const date = new Date();
            let hours = date.getHours();
            let minutes = date.getMinutes();
            let seconds = date.getSeconds();
            let day = date.toLocaleString('en-US', { weekday: 'long' });
            let amPm = hours >= 12 ? 'PM' : 'AM';

   
            hours = hours % 12;
            hours = hours ? hours : 12; 

            minutes = minutes < 10 ? '0' + minutes : minutes;
            seconds = seconds < 10 ? '0' + seconds : seconds;

            const timeString = `${hours}:${minutes}:${seconds} ${amPm}`;
            const dayString = `${day}`;

            document.getElementById('time').innerHTML = timeString;
            document.getElementById('day').innerHTML = dayString;
        }

        setInterval(showTime, 1000);
        showTime(); 
    </script>
</body>
</html>

