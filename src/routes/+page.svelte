<script>
    import { updated } from "$app/state";

    let milliseconds = $state(0);
    let hours = $derived(Math.floor(milliseconds/(3.6 * 1000000)));
    let minutes = $derived(Math.floor((milliseconds%(3.6 * 1000000))/60000).toLocaleString('en-US', {minimumIntegerDigits: 2, useGrouping:false}));
    let seconds = $derived(Math.floor(((milliseconds%(3.6 * 1000000))%60000)/1000).toLocaleString('en-US', {minimumIntegerDigits: 2, useGrouping:false}));
    let centiseconds = $derived(Math.floor((((milliseconds%(3.6 * 1000000))%60000)%1000)/10).toLocaleString('en-US', {minimumIntegerDigits: 2, useGrouping:false}));

    const now = Date.now();
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
        <button onclick={play}>play</button>
        <button onclick={pause}>pause</button>
        <button onclick={stop}>stop</button>
    </div>
    <div>current ms: {milliseconds}</div>
    <div>"current paused: {paused}</div>
    
</main>

<style>
    main{
        background-color: grey;
        font-family: 'Roboto Mono', monospace;
        width: 100%;
        height: 100;
    }
    .clockDisplay{
        max-width: fit-content;
        margin-right: auto;
        margin-left: auto;
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

