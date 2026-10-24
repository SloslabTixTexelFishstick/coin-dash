scene.setBackgroundColor(15)
info.setScore(0)
let mySprite = sprites.create(assets.image`Player1`, SpriteKind.Player)
forever(function () {
    music.play(music.createSong(assets.song`MainTheme`), music.PlaybackMode.UntilDone)
})
