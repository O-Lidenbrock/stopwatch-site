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
    let running = $state(false);

    const stopwatch = (startTime, ms) => {
        milliseconds = ms;
        let start = startTime;

        timerID = setInterval(update, 50);

        function update(){
            milliseconds = Date.now() - startTime + paused;
        }
    }

    const play = () => {
        const start = Date.now();
        lapStart = Date.now();
        let ms = paused;
        running = true;

        if(!(timerID === null)){
            clearInterval(timerID)
        }

        clearInterval(timerID);
        stopwatch(start, ms);

        //in here you could use the svelte conditional #if condition.
        //It conditionally renders divs, so perfect for a play/pause
 
        
    }

    const pause = () => {
        running = false;
        paused = milliseconds;
        clearInterval(timerID);
    }
    
    const stop = () => {
        running = false
        clearInterval(timerID);
        milliseconds = 0;
        paused = 0;
        const lapsDiv = document.querySelector(".laps");
        lapsDiv.innerHTML = ""; //clear the laps
    }

    const restart = () => {
        stop();
        play();
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
        container.appendChild(time); //figure out a way for this to be the first node always

    }

    const onKeyDown = (e) => {
        switch(e.keyCode) {
            case 32:{
                if(!running){
                    play();
                }
                else{
                    pause();
                }}
        }
    }


</script>
<main>
    <div class="clockDisplay">
        <div class="numbers">
            {#if hours != 0}
                <div class="hour">{hours}:</div>
            {/if}
            <div class="minute">{minutes}</div>
            <div class="minute" id="colon">:</div>
            <div class="second">{seconds}</div>
            <div class="centisecond">.{centiseconds}</div>
        </div>
    </div>
    <div class="controls">
        {#if !running}
        <button class="controlBtn" id="Play" onclick={play} aria-label="Play"> <!--- wrote this with ai bc I had no idea what was standard for this sorta thing --->
            <img src="icons/play-icon.svg" alt="Play">
        </button>
        {:else}
        <button class="controlBtn" onclick={pause} aria-label="Pause">
            <img src="icons/pause-icon.svg" alt="Pause">
        </button>
        {/if}
        <button class="controlBtn" onclick={restart} aria-label="Restart">
            <img src="icons/restart-icon.svg" alt="Restart">
        </button>
        <button class="controlBtn" onclick={lap} aria-label="Lap">
            <img src="icons/lap2-icon.svg" alt="Lap">
        </button>
       </div>
    <div class="laps"></div>
    
</main>

<style>
    main{
        font-family: 'Roboto Mono', monospace;
        width: 100%;
        height: 100;
        color: rgb(157, 155, 150);
    }
    .clockDisplay, .controls, .laps{
        max-width: fit-content;
        margin-right: auto;
        margin-left: auto;
        margin-top: 20px;
    }
    .numbers{
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        padding: 20px;
        font-size: clamp(80px, 15vw, 120px);
        color: rgb(136, 132, 126);
        align-items: baseline;
    }
    .hour{
        color: rgb(80, 77, 77);
    }  
    .centisecond{
        font-size: 50px;
        color: rgb(138, 107, 27);
    }
    button{
        background-color: rgb(54, 109, 156);
        border-radius: 50%;
        border-color: black;
        padding: 3px;
        aspect-ratio: 1/1;        
    }

    .laps{
        display: flex;
        flex-direction: column;
        gap: 8px;
    }
    .controls{
        display: flex;
        justify-content: center;
        gap: 16px;
        flex-wrap: wrap;
    }

    @media (max-width: 350px) {
        .centisecond{
            display: none;
        }
    }
    @media (max-width: 260px) {
        #colon{
            display: none;
        }
        .minute, .second{
            font-size: 100px;
            margin-right: auto;
            margin-left: auto;
        }
        .second{
            margin-top: -30px;
        }
    }
</style>

<svelte:window on:keydown|preventDefault={onKeyDown} />