let time = document.getElementById("time_display")
let choise = 'full'
const btnFull = document.getElementById("full")
const btnTime = document.getElementById("time")
const btnDate = document.getElementById("date")
const nowTime = new Date()

const update = () => time.textContent = format(choise)
timeUpdate = setInterval(update, 1000)
update()

function format(formatMode){
    const now = new Date()
    switch(formatMode){
        case 'time':
            return now.toLocaleTimeString()
        case 'date':
            return now.toLocaleDateString()
        case 'full':
            return now.toLocaleString()
    }
}

const clickAction = (ans) => {
    return function(){
        choise=ans
        update()
    }
}

btnTime.onclick = clickAction('time')
btnDate.onclick = clickAction('date')
btnFull.onclick = clickAction('full')

