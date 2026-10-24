controller.right.onEvent(ControllerButtonEvent.Pressed, function () {
    mySprite.x += 1
})
let mySprite: Sprite = null
scene.setBackgroundColor(15)
info.setScore(0)
mySprite = sprites.create(assets.image`Player1`, SpriteKind.Player)
forever(function () {
    music.play(music.createSong(assets.song`MainTheme`), music.PlaybackMode.UntilDone)
})
