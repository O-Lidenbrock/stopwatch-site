<script>
    let hour = 0;
    let min1 = 0;
    let min2 = 0;
    let sec1 = 0;
    let sec2 = 0;
    let cs1 = 0;
    let cs2 = 0;

    const now = Date();

    function stopwatch (){
        const start = new Date();

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
        <div class="number">{hour}</div>
        <div class="number">:</div>
        <div class="number">{min1}</div>
        <div class="number">{min2}</div>
        <div class="number">:</div>
        <div class="number">{sec1}</div>
        <div class="number">{sec2}</div>
        <div class="number">:</div>
        <div class="number">{cs1}</div>
        <div class="number">{cs2}</div>
    </div>
    <div class="controls">
        <button>start</button>
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
    .number{
        font-size: 400%;
        color: rgb(17, 13, 8);
        width: 400%;
    }
</style>