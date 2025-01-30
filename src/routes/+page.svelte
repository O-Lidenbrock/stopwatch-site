<script>
    let minutes = 12;
    let seconds = 30;

</script>
<main>
    <div class="clockDisplay">
        <div class="numbers">
            {minutes}:{seconds}
        </div>
    </div>
    <div class="controls">
        
    </div>
    
</main>

<style>
    body{
        padding: 0;
        margin: 0;
    }
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