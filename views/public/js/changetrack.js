function changetrack(direct) {
    let d = direct
    // S - SHIT CODE
    $("audio").remove()
    $("#audio").append("<audio controls>" + 
    `<source class="track" src="${d}" type="audio/ogg">` +
    "Your browser dose not Support the audio Tag" +
    "</audio>")
}