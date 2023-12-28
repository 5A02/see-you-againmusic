basic.forever(function () {
    music.play(music.stringPlayable("E G A - G A - - ", 130), music.PlaybackMode.UntilDone)
    music.play(music.stringPlayable("E C D D C E - - ", 130), music.PlaybackMode.UntilDone)
    music.play(music.stringPlayable("E G A C5 A G E D ", 120), music.PlaybackMode.UntilDone)
    music.play(music.stringPlayable("D C D D E C - - ", 120), music.PlaybackMode.UntilDone)
})
