<script>
    let hours = 0;
    let minutes = 12;
    let seconds = 30;
    let centiseconds = 0;

    const now = Date();

    function stopwatch (){
        let start = new Date();

        setInterval(updateElapsed, 10)

        function updateElapsed () {
            const current = new Date();
            let elapsed = current - start;
            updateDisplay(elapsed);
            
            function updateDisplay (total) {
                let remainder = total;
                hours = Math.floor(total/(3.6 * 1000000)).toLocaleString('en-US', {minimumIntegerDigits: 2, useGrouping:false});
                minutes = Math.floor((total%(3.6 * 1000000))/60000).toLocaleString('en-US', {minimumIntegerDigits: 2, useGrouping:false});
                seconds = Math.floor(((total%(3.6 * 1000000))%60000)/1000).toLocaleString('en-US', {minimumIntegerDigits: 2, useGrouping:false});
                centiseconds = Math.floor((((total%(3.6 * 1000000))%60000)%1000)/10);
            }
        }
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
        <button on:click={stopwatch}>start</button>
    </div>
    
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
        font-size: 150px;
        color: rgb(17, 13, 8);
    }
</style>