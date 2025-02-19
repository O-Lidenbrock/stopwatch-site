<!-- Sometime I need to make a stopwatch_since function for making stopwatches that started in the past -->

<script>
    import { updated } from "$app/state";

    let milliseconds = $state(0);
    let hours = $derived(Math.floor(milliseconds/(3.6 * 1000000)));
    let minutes = $derived(Math.floor((milliseconds%(3.6 * 1000000))/60000).toLocaleString('en-US', {minimumIntegerDigits: 2, useGrouping:false}));
    let seconds = $derived(Math.floor(((milliseconds%(3.6 * 1000000))%60000)/1000).toLocaleString('en-US', {minimumIntegerDigits: 2, useGrouping:false}));
    let centiseconds = $derived(Math.floor((((milliseconds%(3.6 * 1000000))%60000)%1000)/10).toLocaleString('en-US', {minimumIntegerDigits: 2, useGrouping:false}));

    const now = Date.now();
    let lapStart;
    let paused = $state(0);
    let timerID = null;

    function stopwatch(startTime, ms){
        milliseconds = ms;
        let start = startTime;

        timerID = setInterval(update, 50);

        function update(){
            milliseconds = Date.now() - startTime + paused;
        }
    }

    function play(){
        const start = Date.now();
        lapStart = Date.now();
        let ms = paused;

        if(!(timerID === null)){
            clearInterval(timerID)
        }

            clearInterval(timerID);
            stopwatch(start, ms);
 
        
    }

    function pause(){
        paused = milliseconds;
        clearInterval(timerID);
    }
    
    function stop(){
        clearInterval(timerID);
        milliseconds = 0;
        paused = 0;
        const lapsDiv = document.querySelector(".laps");
        lapsDiv.innerHTML = ""; //clear the laps
    }

    const lap = () => { //two options: i could either create lap objects and calculate the difference between each, or I could make what's basically a seperate stopwatch. I think that's what I'll do.
        let lapSec = Date.now() - lapStart; //will this just grab the ms when the button is pressed?
        lapStart = Date.now();

        const mshours = (Math.floor(lapSec/(3.6 * 1000000)));
        const msminutes = (Math.floor((lapSec%(3.6 * 1000000))/60000).toLocaleString('en-US', {minimumIntegerDigits: 2, useGrouping:false}));
        const msseconds = (Math.floor(((lapSec%(3.6 * 1000000))%60000)/1000).toLocaleString('en-US', {minimumIntegerDigits: 2, useGrouping:false}));
        const mscentiseconds = (Math.floor((((lapSec%(3.6 * 1000000))%60000)%1000)/10).toLocaleString('en-US', {minimumIntegerDigits: 2, useGrouping:false}));
        
        const timeStr = mshours + ":" + msminutes + ":" + msseconds + "." + mscentiseconds;

        // console.log(lapSec);
        // console.log(lapStart);
        // console.log(timeStr)
        const time = document.createElement("div")
        time.textContent = timeStr;

        const container = document.querySelector(".laps");
        container.appendChild(time);

    }


</script>
<main>
    <div class = "header">
        <div> {now} </div>
    </div>
    <div class="clockDisplay">
        <div class="numbers">
            <div class="hour">{hours}</div>
            <div class="hour">:</div>
            <div class="minute">{minutes}</div>
            <div class="colon">:</div>
            <div class="second">{seconds}</div>
            <div class="period">.</div>
            <div class="centisecond">{centiseconds}</div>
        </div>
    </div>
    <div class="controls">
        <button class="controlBtn" onclick={play} aria-label="Play"> <!--- wrote this with ai bc I had no idea what was standard for this sorta thing --->
            <img src="icons/play-icon.svg" alt="Play">
        </button>
        <button class="controlBtn" onclick={pause} aria-label="Pause">
            <img src="icons/pause-icon.svg" alt="Pause">
        </button>
        <button class="controlBtn" onclick={stop} aria-label="Stop">
            <img src="icons/stop-icon.svg" alt="Stop">
        </button>
        <button class="controlBtn" onclick={lap} aria-label="Lap">
            <img src="icons/timer-icon.svg" alt="Lap">
        </button>
       </div>
    <div>current ms: {milliseconds}</div>
    <div>"current paused: {paused}</div>
    <div class="laps"></div>
    
</main>

<style>
    main{
        background-color: grey;
        font-family: 'Roboto Mono', monospace;
        width: 100%;
        height: 100;
    }
    .clockDisplay, .controls{
        max-width: fit-content;
        margin-right: auto;
        margin-left: auto;
        margin-top: 20px;
    }
    .numbers{
        display: flex;
        flex-direction: row;
        font-size: 100px;
        color: rgb(17, 13, 8);
        align-items: baseline;
    }
    .centisecond{
        font-size: 50px;
        color: goldenrod;
    }
    .hour{
        color: rgb(80, 77, 77);
    }
</style>

