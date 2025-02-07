<script>
    import { updated } from "$app/state";

    let milliseconds = $state(0);
    let hours = $derived(Math.floor(milliseconds/(3.6 * 1000000)).toLocaleString('en-US', {minimumIntegerDigits: 2, useGrouping:false}));
    let minutes = $derived(Math.floor((milliseconds%(3.6 * 1000000))/60000).toLocaleString('en-US', {minimumIntegerDigits: 2, useGrouping:false}));
    let seconds = $derived(Math.floor(((milliseconds%(3.6 * 1000000))%60000)/1000).toLocaleString('en-US', {minimumIntegerDigits: 2, useGrouping:false}));
    let centiseconds = $derived(Math.floor((((milliseconds%(3.6 * 1000000))%60000)%1000)/10).toLocaleString('en-US', {minimumIntegerDigits: 2, useGrouping:false}));

    const now = Date.now();
    let paused = 0;
    let timerID = null;

    function stopwatch(startTime, ms){
        milliseconds = ms;
        let start = startTime;

        timerID = setInterval(update, 100);

        function update(){
            milliseconds = Date.now() - startTime;
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
        clearInterval(timerID);
        paused = milliseconds;
    }
    
    function stop(){
        clearInterval(timerID);
        milliseconds = 0;
    }

    
</script>
<main>
    <div class = "header">
        <div> {now} </div>
    </div>
    <div class="clockDisplay">
        <div class="numbers">
            {hours}:{minutes}:{seconds}.{centiseconds}
        </div>
    </div>
    <div class="controls">
        <button onclick={play}>play</button>
        <button onclick={pause}>pause</button>
        <button onclick={stop}>stop</button>
    </div>
    <div>"Hello there"</div>
    
</main>

<style>
    main{
        background-color: grey;
        font-family: 'Roboto Mono', monospace;
        margin: 0;
        width: 100%;
        height: 100;
    }
    .clockDisplay{
        display:flex;
        align-items: center;
        justify-content: center;
    }
    .numbers{
        font-size: 100px;
        color: rgb(17, 13, 8);
        width: 50px;
    }
</style>

