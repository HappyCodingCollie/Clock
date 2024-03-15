// ------- dayjs plugins ------- //
dayjs.extend(dayjs_plugin_timezone)
dayjs.extend(dayjs_plugin_utc)

// ------- Hour ------- //
function updateTime(){
    const hour = dayjs().format('HH:mm:ss')
    const writenHour = document.getElementById("hour");
    writenHour.innerText = hour
}
updateTime()
setInterval(updateTime, 1000)

// ------- Date ------- //
const date = dayjs().format('dddd, D of MMMM, YYYY')
const writenDate = document.getElementById("date");
writenDate.innerText = date

// ------- Timezone ------- //
const timezone = dayjs.tz.guess()
const writenTimezone = document.getElementById("timezone");
writenTimezone.innerText = timezone
