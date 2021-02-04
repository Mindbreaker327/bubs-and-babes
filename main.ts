namespace SpriteKind {
    export const Assistant = SpriteKind.create()
    export const Health = SpriteKind.create()
    export const Assistant2 = SpriteKind.create()
    export const Assistant3 = SpriteKind.create()
    export const Boost = SpriteKind.create()
}
sprites.onOverlap(SpriteKind.Enemy, SpriteKind.Assistant2, function (sprite, otherSprite) {
    Obstacle.destroy()
    Poweruptwo_2.destroy()
    Poweruptwo_3 = sprites.create(img`
        .....88888888888.....
        ....88.........88....
        ...88...........88...
        ..88.............88..
        .88...............88.
        88.................88
        8...................8
        8...................8
        8...................8
        8...................8
        8...................8
        8...................8
        8...................8
        8...................8
        8...................8
        8...................8
        8...................8
        88.................88
        .88...............88.
        ..88.............88..
        ...88...........88...
        ....88.........88....
        .....88888888888.....
        `, SpriteKind.Assistant3)
    Poweruptwo_3.setPosition(MySpriteX, MySpriteY)
    controller.moveSprite(Poweruptwo_3, 100, 100)
})
controller.up.onEvent(ControllerButtonEvent.Pressed, function () {
    mySpriteUp.setImage(img`
        . . . . . . f f f f . . . . . . 
        . . . . f f 5 5 5 5 f f . . . . 
        . . . f 5 5 5 f f 5 5 5 f . . . 
        . . f f f f f 2 2 f f f f f . . 
        . . f f 5 2 5 2 2 5 2 5 f f . . 
        . . f 5 2 f 2 f f 2 f 2 5 f . . 
        . . f f f 2 2 5 5 2 2 f f f . . 
        . f f 5 f 2 f 5 5 f 2 f 5 f f . 
        . f 5 5 f f 5 5 5 5 f 5 5 5 f . 
        . . f 5 5 5 5 5 5 5 5 5 5 f . . 
        . . . f 5 5 5 5 5 5 5 5 f . . . 
        . . e 4 f f f f f f f f 4 e . . 
        . . 4 d f 2 2 2 2 2 2 f d 4 . . 
        . . 4 4 f 4 4 4 4 4 4 f 4 4 . . 
        . . . . . f f f f f f . . . . . 
        . . . . . f f . . f f . . . . . 
        `)
    animation.runImageAnimation(
    mySpriteUp,
    [img`
        . . . . . . f f f f . . . . . . 
        . . . . f f 5 5 5 5 f f . . . . 
        . . . f 5 5 5 f f 5 5 5 f . . . 
        . . f f f f f 2 2 f f f f f . . 
        . . f f 5 2 5 2 2 5 2 5 f f . . 
        . . f 5 2 f 2 f f 2 f 2 5 f . . 
        . . f f f 2 2 5 5 2 2 f f f . . 
        . f f 5 f 2 f 5 5 f 2 f 5 f f . 
        . f 5 5 f f 5 5 5 5 f 5 5 5 f . 
        . . f 5 5 5 5 5 5 5 5 5 5 f . . 
        . . . f 5 5 5 5 5 5 5 5 f . . . 
        . . e 4 f f f f f f f f 4 e . . 
        . . 4 d f 2 2 2 2 2 2 f d 4 . . 
        . . 4 4 f 4 4 4 4 4 4 f 4 4 . . 
        . . . . . f f f f f f . . . . . 
        . . . . . f f . . f f . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . f f f f . . . . . . 
        . . . . f f 5 5 5 5 f f . . . . 
        . . . f 5 5 5 f f 5 5 5 f . . . 
        . . . f f f f 2 2 f f f f . . . 
        . . f f 5 2 5 2 2 5 2 5 f f . . 
        . . f 5 2 f 2 f f f 2 f 5 f . . 
        . . f f f 2 f 5 5 2 2 f f f . . 
        . . f 5 2 f f 5 5 2 f 5 5 f . . 
        . f f 5 f f 5 5 5 f 5 5 5 f f . 
        . f f 5 5 5 5 5 5 5 5 5 5 f f . 
        . . . f 5 5 5 5 5 5 5 5 f . . . 
        . . . e f f f f f f f f 4 e . . 
        . . . 4 f 2 2 2 2 2 e d d 4 . . 
        . . . e f f f f f f e e 4 . . . 
        . . . . f f f . . . . . . . . . 
        `,img`
        . . . . . . f f f f . . . . . . 
        . . . . f f 5 5 5 5 f f . . . . 
        . . . f 5 5 5 f f 5 5 5 f . . . 
        . . f f f f f 2 2 f f f f f . . 
        . . f f 5 2 5 2 2 5 2 5 f f . . 
        . . f 5 2 f 2 f f 2 f 2 5 f . . 
        . . f f f 2 2 5 5 2 2 f f f . . 
        . f f 5 f 2 f 5 5 f 2 f 5 f f . 
        . f 5 5 f f 5 5 5 5 f 5 5 5 f . 
        . . f 5 5 5 5 5 5 5 5 5 5 f . . 
        . . . f 5 5 5 5 5 5 5 5 f . . . 
        . . e 4 f f f f f f f f 4 e . . 
        . . 4 d f 2 2 2 2 2 2 f d 4 . . 
        . . 4 4 f 4 4 4 4 4 4 f 4 4 . . 
        . . . . . f f f f f f . . . . . 
        . . . . . f f . . f f . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . f f f f . . . . . . 
        . . . . f f 5 5 5 5 f f . . . . 
        . . . f 5 5 5 f f 5 5 5 f . . . 
        . . . f f f f 2 2 f f f f . . . 
        . . f f 5 2 5 2 2 5 2 5 f f . . 
        . . f 5 f 2 f f f 2 f 2 5 f . . 
        . . f f f 2 2 5 5 f 2 f f f . . 
        . . f 5 5 f 2 5 5 f f 2 5 f . . 
        . f f 5 5 5 f 5 5 5 f f 5 f f . 
        . f f 5 5 5 5 5 5 5 5 5 5 f f . 
        . . . f 5 5 5 5 5 5 5 5 f . . . 
        . . e 4 f f f f f f f f e . . . 
        . . 4 d d e 2 2 2 2 2 f 4 . . . 
        . . . 4 e e f f f f f f e . . . 
        . . . . . . . . . f f f . . . . 
        `],
    200,
    false
    )
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    if (Limit < 10) {
        projectile = sprites.createProjectileFromSprite(img`
            ..........................
            ..........................
            ..........................
            11111111111111111111111111
            12221222122221222122212221
            12121211111211211121111211
            12221222111211222121111211
            12211211121211211121111211
            12121222122211222122211211
            11111111111111111111111111
            ..........................
            ..........................
            ..........................
            ..........................
            ..........................
            ..........................
            `, mySpriteUp, 0, -50)
        Limit += 1
    }
})
controller.left.onEvent(ControllerButtonEvent.Pressed, function () {
    mySpriteUp.setImage(img`
        . . . . f f f f f f . . . . . . 
        . . . f 2 f 5 5 5 5 f f . . . . 
        . . f 2 2 2 f 5 5 5 5 f f . . . 
        . . f 5 5 5 5 f f 5 5 5 f . . . 
        . f 5 2 2 2 2 5 5 f f f f . . . 
        . f 2 5 f f f f 2 2 2 5 f . . . 
        . f f f 5 5 5 f f f f f f f . . 
        . f 5 5 4 4 f b 5 4 4 5 f f . . 
        . . f 5 d d f 1 4 d 4 5 5 f . . 
        . . . f d d d d 4 5 5 5 f . . . 
        . . . f e 4 4 4 5 5 f f . . . . 
        . . . f 2 2 2 e d d 4 . . . . . 
        . . . f 2 2 2 e d d e . . . . . 
        . . . f 5 5 4 f e e f . . . . . 
        . . . . f f f f f f . . . . . . 
        . . . . . . f f f . . . . . . . 
        `)
    animation.runImageAnimation(
    mySpriteUp,
    [img`
        . . . . f f f f f f . . . . . . 
        . . . f 2 f 5 5 5 5 f f . . . . 
        . . f 2 2 2 f 5 5 5 5 f f . . . 
        . . f 5 5 5 5 f f 5 5 5 f . . . 
        . f 5 2 2 2 2 5 5 f f f f . . . 
        . f 2 5 f f f f 2 2 2 5 f . . . 
        . f f f 5 5 5 f f f f f f f . . 
        . f 5 5 4 4 f b e 4 4 5 f f . . 
        . . f 5 d d f 1 4 d 4 5 5 f . . 
        . . . f d d d d 4 5 5 5 f . . . 
        . . . f e 4 4 4 5 5 f f . . . . 
        . . . f 2 2 2 e d d 4 . . . . . 
        . . . f 2 2 2 e d d e . . . . . 
        . . . f 5 5 4 f e e f . . . . . 
        . . . . f f f f f f . . . . . . 
        . . . . . . f f f . . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . f f f f f f . . . . . . 
        . . . f 2 f 5 5 5 5 f f . . . . 
        . . f 2 2 2 f 5 5 5 5 f f . . . 
        . . f 5 5 5 5 f f 5 5 5 f . . . 
        . f 5 2 2 2 2 5 5 f f f f . . . 
        . f 2 5 f f f f 2 2 2 5 f . . . 
        . f f f 5 5 5 f f f f f f f . . 
        . f 5 5 4 4 f b 5 4 4 5 f f . . 
        . . f 5 d d f 1 4 d 4 5 5 f . . 
        . . . f d d d 5 5 5 5 5 f . . . 
        . . . f e 4 e d d 4 f . . . . . 
        . . . f 2 2 e d d e f . . . . . 
        . . f f 5 5 f e e f f f . . . . 
        . . f f f f f f f f f f . . . . 
        . . . f f f . . . f f . . . . . 
        `,img`
        . . . . f f f f f f . . . . . . 
        . . . f 2 f 5 5 5 5 f f . . . . 
        . . f 2 2 2 f 5 5 5 5 f f . . . 
        . . f 5 5 5 5 f f 5 5 5 f . . . 
        . f 5 2 2 2 2 5 5 f f f f . . . 
        . f 2 5 f f f f 2 2 2 5 f . . . 
        . f f f 5 5 5 f f f f f f f . . 
        . f 5 5 4 4 f b 5 4 4 5 f f . . 
        . . f 5 d d f 1 4 d 4 5 5 f . . 
        . . . f d d d d 4 5 5 5 f . . . 
        . . . f e 4 4 4 5 5 f f . . . . 
        . . . f 2 2 2 e d d 4 . . . . . 
        . . . f 2 2 2 e d d e . . . . . 
        . . . f 5 5 4 f e e f . . . . . 
        . . . . f f f f f f . . . . . . 
        . . . . . . f f f . . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . f f f f f f . . . . . . 
        . . . f 2 f 5 5 5 5 f f . . . . 
        . . f 2 2 2 f 5 5 5 5 f f . . . 
        . . f 5 5 5 5 f f 5 5 5 f . . . 
        . f 5 2 2 2 2 5 5 f f f f . . . 
        . f 2 5 f f f f 2 2 2 5 f . . . 
        . f f f 5 5 5 f f f f f f f . . 
        . f 5 5 4 4 f b 5 4 4 5 f f . . 
        . . f 5 d d f 1 4 d 4 5 5 f . . 
        . . . f d d d d 4 5 5 5 f . . . 
        . . . f e 4 4 4 e d d 4 . . . . 
        . . . f 2 2 2 2 e d d e . . . . 
        . . f f 5 5 4 4 f e e f . . . . 
        . . f f f f f f f f f f . . . . 
        . . . f f f . . . f f . . . . . 
        `],
    200,
    false
    )
})
scene.onOverlapTile(SpriteKind.Enemy, sprites.dungeon.floorLight0, function (sprite, location) {
    sprite.destroy()
})
info.onCountdownEnd(function () {
    Powerup = sprites.create(img`
        . 4 4 4 4 4 4 4 4 4 4 4 4 4 4 . 
        4 5 5 5 5 5 5 5 5 5 5 5 5 5 5 f 
        4 5 c 5 5 5 5 5 5 5 5 5 5 c 5 f 
        4 5 5 5 5 1 1 1 1 1 5 5 5 5 5 f 
        4 5 5 5 1 1 f f f 1 1 5 5 5 5 f 
        4 5 5 5 1 1 f 5 5 1 1 f 5 5 5 f 
        4 5 5 5 1 1 f 5 5 1 1 f 5 5 5 f 
        4 5 5 5 5 f f 5 1 1 1 f 5 5 5 f 
        4 5 5 5 5 5 5 1 1 f f f 5 5 5 f 
        4 5 5 5 5 5 5 1 1 f 5 5 5 5 5 f 
        4 5 5 5 5 5 5 5 f f 5 5 5 5 5 f 
        4 5 5 5 5 5 5 1 1 5 5 5 5 5 5 f 
        4 5 5 5 5 5 5 1 1 f 5 5 5 5 5 f 
        4 5 c 5 5 5 5 5 f f 5 5 5 c 5 f 
        4 5 5 5 5 5 5 5 5 5 5 5 5 5 5 f 
        . f f f f f f f f f f f f f f . 
        `, SpriteKind.Boost)
    Powerup.setVelocity(0, 50)
    Powerup.setPosition(randint(160, 0), 0)
    info.changeScoreBy(15)
    info.startCountdown(30)
})
sprites.onOverlap(SpriteKind.Enemy, SpriteKind.Assistant3, function (sprite, otherSprite) {
    sprite.destroy()
    Poweruptwo_3.destroy()
    Shield += -1
})
sprites.onOverlap(SpriteKind.Boost, SpriteKind.Player, function (sprite, otherSprite) {
    Powerups()
})
controller.right.onEvent(ControllerButtonEvent.Pressed, function () {
    mySpriteUp.setImage(img`
        . . . . . . f f f f f f . . . . 
        . . . . f f 5 5 5 5 f 2 f . . . 
        . . . f f 5 5 5 5 f 2 2 2 f . . 
        . . . f 5 5 5 f f 5 5 5 5 f . . 
        . . . f f f f 5 5 2 2 2 2 5 f . 
        . . . f 5 2 2 2 f f f f 5 2 f . 
        . . f f f f f f f 5 5 5 f f f . 
        . . f f 5 4 4 5 b f 4 4 5 5 f . 
        . . f 5 5 4 d 4 1 f d d 5 f . . 
        . . . f 5 5 5 4 d d d d f . . . 
        . . . . f f 5 5 4 4 4 e f . . . 
        . . . . . 4 d d e 2 2 2 f . . . 
        . . . . . e d d e 2 2 2 f . . . 
        . . . . . f e e f 4 5 5 f . . . 
        . . . . . . f f f f f f . . . . 
        . . . . . . . f f f . . . . . . 
        `)
    animation.runImageAnimation(
    mySpriteUp,
    [img`
        . . . . . . f f f f f f . . . . 
        . . . . f f 5 5 5 5 f 2 f . . . 
        . . . f f 5 5 5 5 f 2 2 2 f . . 
        . . . f 5 5 5 f f 5 5 5 5 f . . 
        . . . f f f f 5 5 2 2 2 2 5 f . 
        . . . f 5 2 2 2 f f f f 5 2 f . 
        . . f f f f f f f 5 5 5 f f f . 
        . . f f 5 4 4 5 b f 4 4 5 5 f . 
        . . f 5 5 4 d 4 1 f d d 5 f . . 
        . . . f 5 5 5 4 d d d d f . . . 
        . . . . f f 5 5 4 4 4 e f . . . 
        . . . . . 4 d d e 2 2 2 f . . . 
        . . . . . e d d e 2 2 2 f . . . 
        . . . . . f e e f 4 5 5 f . . . 
        . . . . . . f f f f f f . . . . 
        . . . . . . . f f f . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . f f f f f f . . . . 
        . . . . f f 5 5 5 5 f 2 f . . . 
        . . . f f 5 5 5 5 f 2 2 2 f . . 
        . . . f 5 5 5 f f 5 5 5 5 f . . 
        . . . f f f f 5 5 2 2 2 2 5 f . 
        . . . f 5 2 2 2 f f f f 5 2 f . 
        . . f f f f f f f 5 5 5 f f f . 
        . . f f 5 4 4 5 b f 4 4 5 5 f . 
        . . f 5 5 4 d 4 1 f d d 5 f . . 
        . . . f 5 5 5 5 5 d d d f . . . 
        . . . . . f 4 d d e 4 e f . . . 
        . . . . . f e d d e 2 2 f . . . 
        . . . . f f f e e f 5 5 f f . . 
        . . . . f f f f f f f f f f . . 
        . . . . . f f . . . f f f . . . 
        `,img`
        . . . . . . f f f f f f . . . . 
        . . . . f f 5 5 5 5 f 2 f . . . 
        . . . f f 5 5 5 5 f 2 2 2 f . . 
        . . . f 5 5 5 f f 5 5 5 5 f . . 
        . . . f f f f 5 5 2 2 2 2 5 f . 
        . . . f 5 2 2 2 f f f f 5 2 f . 
        . . f f f f f f f 5 5 5 f f f . 
        . . f f 5 4 4 5 b f 4 4 5 5 f . 
        . . f 5 5 4 d 4 1 f d d 5 f . . 
        . . . f 5 5 5 4 d d d d f . . . 
        . . . . f f 5 5 4 4 4 e f . . . 
        . . . . . 4 d d e 2 2 2 f . . . 
        . . . . . e d d e 2 2 2 f . . . 
        . . . . . f e e f 4 5 5 f . . . 
        . . . . . . f f f f f f . . . . 
        . . . . . . . f f f . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . f f f f f f . . . . 
        . . . . f f 5 5 5 5 f 2 f . . . 
        . . . f f 5 5 5 5 f 2 2 2 f . . 
        . . . f 5 5 5 f f 5 5 5 5 f . . 
        . . . f f f f 5 5 2 2 2 2 5 f . 
        . . . f 5 2 2 2 f f f f 5 2 f . 
        . . f f f f f f f 5 5 5 f f f . 
        . . f f 5 4 4 5 b f 4 4 5 5 f . 
        . . f 5 5 4 d 4 1 f d d 5 f . . 
        . . . f 5 5 5 4 d d d d f . . . 
        . . . . 4 d d e 4 4 4 e f . . . 
        . . . . e d d e 2 2 2 2 f . . . 
        . . . . f e e f 4 4 5 5 f f . . 
        . . . . f f f f f f f f f f . . 
        . . . . . f f . . . f f f . . . 
        `],
    200,
    false
    )
})
sprites.onOverlap(SpriteKind.Enemy, SpriteKind.Player, function (sprite, otherSprite) {
    info.changeLifeBy(-1)
    sprite.destroy()
})
sprites.onOverlap(SpriteKind.Enemy, SpriteKind.Assistant, function (sprite, otherSprite) {
    Obstacle.destroy()
    PowerUp1.destroy()
    Poweruptwo_2 = sprites.create(img`
        .....888888888888.....
        ....88888888888888....
        ...888..........888...
        ..888............888..
        .888..............888.
        888................888
        88..................88
        88..................88
        88..................88
        88..................88
        88..................88
        88..................88
        88..................88
        88..................88
        88..................88
        88..................88
        88..................88
        88..................88
        888................888
        .888..............888.
        ..888............888..
        ...888..........888...
        ....888........888....
        .....888888888888.....
        `, SpriteKind.Assistant2)
    Poweruptwo_2.setPosition(MySpriteX, MySpriteY)
    controller.moveSprite(Poweruptwo_2, 100, 100)
})
controller.down.onEvent(ControllerButtonEvent.Pressed, function () {
    mySpriteUp.setImage(img`
        . . . . . . f f f f . . . . . . 
        . . . . f f f 2 2 f f f . . . . 
        . . . f f f 2 2 2 2 f f f . . . 
        . . f f f 5 5 5 5 5 5 f f f . . 
        . . f f 5 2 2 2 2 2 2 5 5 f . . 
        . . f 5 2 f f f f f f 2 5 f . . 
        . . f f f f 5 5 5 5 f f f f . . 
        . f f f f b f 4 4 f b f f f f . 
        . f f f 4 1 f d d f 1 4 f f f . 
        . . f f d d d d d d d d f f . . 
        . . . f d d 4 4 4 4 d d f . . . 
        . . e 4 f 2 2 2 2 2 2 f 4 e . . 
        . . 4 d f 2 2 2 2 2 2 f d 4 . . 
        . . 4 4 f 4 4 5 5 4 4 f 4 4 . . 
        . . . . . f f f f f f . . . . . 
        . . . . . f f . . f f . . . . . 
        `)
    animation.runImageAnimation(
    mySpriteUp,
    [img`
        . . . . . . f f f f . . . . . . 
        . . . . f f f 2 2 f f f . . . . 
        . . . f f f 2 2 2 2 f f f . . . 
        . . f f f 5 5 5 5 5 5 f f f . . 
        . . f f 5 2 2 2 2 2 2 5 5 f . . 
        . . f 5 2 f f f f f f 2 5 f . . 
        . . f f f f 5 5 5 5 f f f f . . 
        . f f f f b f 4 4 f b f f f f . 
        . f f f 4 1 f d d f 1 4 f f f . 
        . . f f d d d d d d d d f f . . 
        . . . f d d 4 4 4 4 d d f . . . 
        . . e 4 f 2 2 2 2 2 2 f 4 e . . 
        . . 4 d f 2 2 2 2 2 2 f d 4 . . 
        . . 4 4 f 4 4 5 5 4 4 f 4 4 . . 
        . . . . . f f f f f f . . . . . 
        . . . . . f f . . f f . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . f f f f . . . . . . 
        . . . . f f f 2 2 f f f . . . . 
        . . . f f f 2 2 2 2 f f f . . . 
        . . f f f 5 5 5 5 5 5 f f f . . 
        . . f f 5 2 2 2 2 2 2 5 5 f . . 
        . f f 5 2 f f f f f f 2 5 f f . 
        . f f f f f 5 5 5 5 f f f f f . 
        . . f 5 f b f 4 4 f b f 5 f . . 
        . . f 5 4 1 f d d f 1 4 5 f . . 
        . . . f e 4 d d d d 4 e f e . . 
        . . f e f 2 2 2 2 e d d 4 e . . 
        . . e 4 f 2 2 2 2 e d d e . . . 
        . . . . f 4 4 5 5 f e e . . . . 
        . . . . f f f f f f f . . . . . 
        . . . . f f f . . . . . . . . . 
        `,img`
        . . . . . . f f f f . . . . . . 
        . . . . f f f 2 2 f f f . . . . 
        . . . f f f 2 2 2 2 f f f . . . 
        . . f f f 5 5 5 5 5 5 f f f . . 
        . . f f 5 2 2 2 2 2 2 5 5 f . . 
        . . f 5 2 f f f f f f 2 5 f . . 
        . . f f f f 5 5 5 5 f f f f . . 
        . f f f f b f 4 4 f b f f f f . 
        . f f f 4 1 f d d f 1 4 f f f . 
        . . f f d d d d d d d d f f . . 
        . . . f d d 4 4 4 4 d d f . . . 
        . . e 4 f 2 2 2 2 2 2 f 4 e . . 
        . . 4 d f 2 2 2 2 2 2 f d 4 . . 
        . . 4 4 f 4 4 5 5 4 4 f 4 4 . . 
        . . . . . f f f f f f . . . . . 
        . . . . . f f . . f f . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . f f f f . . . . . . 
        . . . . f f f 2 2 f f f . . . . 
        . . . f f f 2 2 2 2 f f f . . . 
        . . f f f 5 5 5 5 5 5 f f f . . 
        . . f 5 5 2 2 2 2 2 2 5 f f . . 
        . f f 5 2 f f f f f f 2 5 f f . 
        . f f f f f 5 5 5 5 f f f f f . 
        . . f 5 f b f 4 4 f b f 5 f . . 
        . . f 5 4 1 f d d f 1 4 5 f . . 
        . . e f e 4 d d d d 4 e f . . . 
        . . e 4 d d e 2 2 2 2 f e f . . 
        . . . e d d e 2 2 2 2 f 4 e . . 
        . . . . e e f 5 5 4 4 f . . . . 
        . . . . . f f f f f f f . . . . 
        . . . . . . . . . f f f . . . . 
        `],
    200,
    false
    )
})
function Powerups () {
    Powerup.destroy()
    PowerupType = randint(1, 2)
    if (PowerupType == 1 && Shield == 0) {
        PowerUp1 = sprites.create(img`
            .....8888888888888.....
            ....888888888888888....
            ...88888888888888888...
            ..8888............888..
            .8888..............888.
            8888................888
            888.................888
            888.................888
            888.................888
            888.................888
            888.................888
            888.................888
            888.................888
            888.................888
            888.................888
            888.................888
            888.................888
            888.................888
            888.................888
            8888...............8888
            .8888.............8888.
            ..8888...........8888..
            ...88888888888888888...
            ....888888888888888....
            .....8888888888888.....
            `, SpriteKind.Assistant)
        PowerUp1.setPosition(MySpriteX, MySpriteY)
        controller.moveSprite(PowerUp1, 100, 100)
        Shield += 1
    } else if (PowerupType == 2) {
        if (Life == 2) {
            info.changeLifeBy(1)
        } else if (Life == 1) {
            info.changeLifeBy(2)
        } else if (Life == 3) {
            Powerups()
        }
    }
}
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.Enemy, function (sprite, otherSprite) {
    sprite.destroy()
    info.changeScoreBy(1)
    otherSprite.setVelocity(0, -50)
    otherSprite.startEffect(effects.fountain, 1000)
    pause(1000)
    otherSprite.destroy()
})
let PowerupType = 0
let PowerUp1: Sprite = null
let Powerup: Sprite = null
let projectile: Sprite = null
let MySpriteY = 0
let Poweruptwo_3: Sprite = null
let Poweruptwo_2: Sprite = null
let Obstacle: Sprite = null
let Life = 0
let Limit = 0
let Shield = 0
let mySpriteUp: Sprite = null
let MySpriteX = 0
MySpriteX = 95
mySpriteUp = sprites.create(img`
    . . . . . . f f f f . . . . . . 
    . . . . f f f 2 2 f f f . . . . 
    . . . f f f 2 2 2 2 f f f . . . 
    . . f f f 5 5 5 5 5 5 f f f . . 
    . . f f 5 2 2 2 2 2 2 5 5 f . . 
    . . f 5 2 f f f f f f 2 5 f . . 
    . . f f f f 5 5 5 5 f f f f . . 
    . f f f f b f 4 4 f b f f f f . 
    . f f f 4 1 f d d f 1 4 f f f . 
    . . f f d d d d d d d d f f . . 
    . . . f d d 4 4 4 4 d d f . . . 
    . . e 4 f 2 2 2 2 2 2 f 4 e . . 
    . . 4 d f 2 2 2 2 2 2 f d 4 . . 
    . . 4 4 f 4 4 5 5 4 4 f 4 4 . . 
    . . . . . f f f f f f . . . . . 
    . . . . . f f . . f f . . . . . 
    `, SpriteKind.Player)
controller.moveSprite(mySpriteUp, 100, 100)
mySpriteUp.setPosition(MySpriteX, 80)
mySpriteUp.setStayInScreen(true)
tiles.setTilemap(tilemap`level1`)
Shield = 0
let VY = 25
let Time = 2000
let VX = 25
Limit = 0
Life = 3
info.setLife(Life)
info.setScore(0)
info.startCountdown(30)
game.onUpdateInterval(25, function () {
    MySpriteX = mySpriteUp.x
    MySpriteY = mySpriteUp.y
})
game.onUpdateInterval(1000, function () {
    VY += 1
    Time += -1
    VX += 1
})
game.onUpdateInterval(1500, function () {
    Limit += -1
})
game.onUpdateInterval(Time, function () {
    Obstacle = sprites.create(img`
        . . . . . f f 8 8 f f . . . . . 
        . . . . f 8 8 8 8 8 8 f . . . . 
        . . . f 8 8 8 8 8 8 8 8 f . . . 
        . . f a 8 8 8 8 8 8 8 8 a f . . 
        . . f 8 8 8 8 8 8 8 8 8 8 f . . 
        . f 8 8 d b 3 d d 3 b d 8 8 f . 
        . f 8 8 f f d d d d f f 8 8 f . 
        . f a a f b f d d f b f a a f . 
        . f a a d 1 f 4 4 f 1 d a a f . 
        f f a a f 4 4 4 4 4 4 f a a f f 
        f a a f f f d d d d f f f a a f 
        . f d d f b 7 7 7 7 b f d d f . 
        . . d 4 c 7 7 7 7 7 7 c 4 d . . 
        . . d f b 7 b 7 b 7 b b f d . . 
        . . . f f 1 d 1 d 1 d f f . . . 
        . . . . . f f b b f f . . . . . 
        `, SpriteKind.Enemy)
    Obstacle.setPosition(randint(140, 20), 10)
    Obstacle.setVelocity(0, VY)
    animation.runImageAnimation(
    Obstacle,
    [img`
        . . . . . f f 8 8 f f . . . . . 
        . . . . f 8 8 8 8 8 8 f . . . . 
        . . . f 8 8 8 8 8 8 8 8 f . . . 
        . . f 8 8 8 8 8 8 8 8 8 8 f . . 
        . . f 8 8 8 8 8 8 8 8 8 8 f . . 
        . f 8 8 d b 8 d d 8 b d 8 8 f . 
        . f 8 8 f f d d d d f f 8 8 f . 
        . f a a f b f d d f b f a a f . 
        . f a a d 1 f 4 4 f 1 d a a f . 
        f f a a f 4 4 4 4 4 4 f a a f f 
        f a a f f f 7 7 7 7 f f f a a f 
        . f d d f b d d d d b f d d f . 
        . . d 4 c d d d d d d c 4 d . . 
        . . d f b d b d b d b b f d . . 
        . . . f f 1 d 1 d 1 d f f . . . 
        . . . . . f f b b f f . . . . . 
        `,img`
        . . . . . . . f f . . . . . . . 
        . . . . . f f 8 8 f f . . . . . 
        . . . . f 8 8 8 8 8 8 f . . . . 
        . . . f 8 8 8 8 8 8 8 8 f . . . 
        . . f 8 8 8 8 8 8 8 8 8 8 f . . 
        . f 8 8 8 8 8 8 8 8 8 8 8 8 f . 
        . f 8 8 d b 8 d d 8 b d 8 8 f . 
        . f a 8 f f d d d d f f 8 a f . 
        f f a a f b f d d f b f a a f f 
        f a a a d 1 f 4 4 f 1 d a a a f 
        . f a a d d 4 4 4 4 4 f a a f . 
        . . f 4 4 4 d d d d b f d f . . 
        . . f d 4 4 d d d d d c 4 d . . 
        . . . f d d d d b d b b f d . . 
        . . . f f 1 d 1 d 1 1 f f . . . 
        . . . . . f f f b b f . . . . . 
        `,img`
        . . . . . f f 8 8 f f . . . . . 
        . . . . f 8 8 8 8 8 8 f . . . . 
        . . . f 8 8 8 8 8 8 8 8 f . . . 
        . . f 8 8 8 8 8 8 8 8 8 8 f . . 
        . . f 8 8 8 8 8 8 8 8 8 8 f . . 
        . f 8 8 d b 8 d d 8 b d 8 8 f . 
        . f 8 8 f f d d d d f f 8 8 f . 
        . f a a f b f d d f b f a a f . 
        . f a a d 1 f 4 4 f 1 d a a f . 
        f f a a f 4 4 4 4 4 4 f a a f f 
        f a a f f f 7 7 7 7 f f f a a f 
        . f d d f b d d d d b f d d f . 
        . . d 4 c d d d d d d c 4 d . . 
        . . d f b d b d b d b b f d . . 
        . . . f f 1 d 1 d 1 d f f . . . 
        . . . . . f f b b f f . . . . . 
        `,img`
        . . . . . . . f f . . . . . . . 
        . . . . . f f 8 8 f f . . . . . 
        . . . . f 8 8 8 8 8 8 f . . . . 
        . . . f 8 8 8 8 8 8 8 8 f . . . 
        . . f 8 8 8 8 8 8 8 8 8 8 f . . 
        . f 8 8 8 8 8 8 8 8 8 8 8 8 f . 
        . f 8 8 d b 8 d d 8 b d 8 8 f . 
        . f a 8 f f d d d d f f 8 a f . 
        f f a a f b f d d f b f a a f f 
        f a a a d 1 f 4 4 f 1 d a a a f 
        . f a a f 4 4 4 4 4 d d a a f . 
        . . f d f b d d d d 4 4 4 f . . 
        . . d 4 c d d d d d 4 4 d f . . 
        . . d f b b d b d d d d f . . . 
        . . . f f 1 1 d 1 d 1 f f . . . 
        . . . . . f b b f f f . . . . . 
        `],
    100,
    true
    )
})
