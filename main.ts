namespace SpriteKind {
    export const Assistant = SpriteKind.create()
    export const Health = SpriteKind.create()
    export const Assistant2 = SpriteKind.create()
    export const Assistant3 = SpriteKind.create()
    export const Boost = SpriteKind.create()
    export const Parent = SpriteKind.create()
    export const Ally = SpriteKind.create()
    export const Yes = SpriteKind.create()
    export const No = SpriteKind.create()
}
sprites.onOverlap(SpriteKind.Enemy, SpriteKind.Assistant2, function (sprite, otherSprite) {
    Y += 1
    Obstacle.destroy()
    Poweruptwo_2.destroy()
    Poweruptwo_3 = sprites.create(img`
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
        `, SpriteKind.Assistant3)
    Poweruptwo_3.setPosition(MySpriteX, MySpriteY)
})
controller.up.onEvent(ControllerButtonEvent.Pressed, function () {
    mySpriteUp.setImage(img`
        . . . . . f f 4 4 f f . . . . . 
        . . . . f 5 4 5 5 4 5 f . . . . 
        . . . f e 3 3 3 3 3 3 e f . . . 
        . . f b 3 3 3 3 3 3 3 3 b f . . 
        . . f 3 3 3 3 3 3 3 3 3 3 f . . 
        . f 3 3 3 3 3 3 3 3 3 3 3 3 f . 
        . f b 3 3 3 3 3 3 3 3 3 3 b f . 
        . f b b 3 3 3 3 3 3 3 3 b b f . 
        . f b b b b b b b b b b b b f . 
        f c b b b b b b b b b b b b c f 
        f b b b b b b b b b b b b b b f 
        . f c c b b b b b b b b c c f . 
        . . e 4 c f f f f f f c 4 e . . 
        . . e f b d b d b d b b f e . . 
        . . . f f 1 d 1 d 1 d f f . . . 
        . . . . . f f b b f f . . . . . 
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
    if (PowerupType == 5) {
        mySpriteUp.setImage(img`
            . . . . . f f 4 4 f f . . . . . 
            . . . . f 5 4 5 5 4 5 f . . . . 
            . . . f e 3 3 3 3 3 3 e f . . . 
            . . f b 3 3 3 3 3 3 3 3 b f . . 
            . . f 3 3 3 3 3 3 3 3 3 3 f . . 
            . f 3 3 3 3 3 3 3 3 3 3 3 3 f . 
            . f b 3 3 3 3 3 3 3 3 3 3 b f . 
            . f b b 3 3 3 3 3 3 3 3 b b f . 
            . f b b b b b b b b b b b b f . 
            f c b b b b b b b b b b b b c f 
            f b b b b b b b b b b b b b b f 
            . f c c b b b b b b b b c c f . 
            . . e 4 c f f f f f f c 4 e . . 
            . . e f b d b d b d b b f e . . 
            . . . f f 1 d 1 d 1 d f f . . . 
            . . . . . f f b b f f . . . . . 
            `)
        animation.runImageAnimation(
        mySpriteUp,
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
        200,
        false
        )
    }
})
function Enemies () {
    Obstacle = sprites.create(img`
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
        `, SpriteKind.Enemy)
    Obstacle.setPosition(randint(140, 20), 10)
    Obstacle.setVelocity(0, VY)
    animation.runImageAnimation(
    Obstacle,
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
    100,
    true
    )
}
sprites.onOverlap(SpriteKind.Yes, SpriteKind.Player, function (sprite, otherSprite) {
    sprite.destroy()
    otherSprite.destroy()
    No.destroy()
    StarterFunction()
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    if (Limit < 10) {
        projectile = sprites.createProjectileFromSprite(img`
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
            `, mySpriteUp, 0, -50)
        Limit += 1
    }
})
controller.left.onEvent(ControllerButtonEvent.Pressed, function () {
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
    200,
    false
    )
    if (PowerupType == 5) {
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
    }
})
scene.onOverlapTile(SpriteKind.Enemy, sprites.dungeon.floorLight0, function (sprite, location) {
    sprite.destroy()
})
function StarterFunction () {
    tiles.setTilemap(tilemap`level1`)
    game.showLongText("Bubs and the Babes Brought to you by Virtue Games", DialogLayout.Top)
    game.showLongText("Based on a true story. ", DialogLayout.Bottom)
    MySpriteX = 95
    mySpriteUp = sprites.create(img`
        . . . . . f f 4 4 f f . . . . . 
        . . . . f 5 4 5 5 4 5 f . . . . 
        . . . f e 3 3 3 3 3 3 e f . . . 
        . . f b 3 3 3 3 3 3 3 3 b f . . 
        . . f 3 3 3 3 3 3 3 3 3 3 f . . 
        . f 3 3 3 3 3 3 3 3 3 3 3 3 f . 
        . f b 3 3 3 3 3 3 3 3 3 3 b f . 
        . f b b 3 3 3 3 3 3 3 3 b b f . 
        . f b b b b b b b b b b b b f . 
        f c b b b b b b b b b b b b c f 
        f b b b b b b b b b b b b b b f 
        . f c c b b b b b b b b c c f . 
        . . e 4 c f f f f f f c 4 e . . 
        . . e f b d b d b d b b f e . . 
        . . . f f 1 d 1 d 1 d f f . . . 
        . . . . . f f b b f f . . . . . 
        `, SpriteKind.Player)
    controller.moveSprite(mySpriteUp, 100, 100)
    mySpriteUp.setPosition(MySpriteX, 80)
    mySpriteUp.setStayInScreen(true)
    Shield = 0
    VY = 25
    Time = 2000
    VX = 25
    Limit = 0
    Life = 3
    info.setLife(Life)
    info.setScore(0)
    info.startCountdown(30)
}
info.onCountdownEnd(function () {
    Powerup = sprites.create(img`
        . . . . . f f 4 4 f f . . . . . 
        . . . . f 5 4 5 5 4 5 f . . . . 
        . . . f e 3 3 3 3 3 3 e f . . . 
        . . f b 3 3 3 3 3 3 3 3 b f . . 
        . . f 3 3 3 3 3 3 3 3 3 3 f . . 
        . f 3 3 3 3 3 3 3 3 3 3 3 3 f . 
        . f b 3 3 3 3 3 3 3 3 3 3 b f . 
        . f b b 3 3 3 3 3 3 3 3 b b f . 
        . f b b b b b b b b b b b b f . 
        f c b b b b b b b b b b b b c f 
        f b b b b b b b b b b b b b b f 
        . f c c b b b b b b b b c c f . 
        . . e 4 c f f f f f f c 4 e . . 
        . . e f b d b d b d b b f e . . 
        . . . f f 1 d 1 d 1 d f f . . . 
        . . . . . f f b b f f . . . . . 
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
    Y = 0
})
sprites.onOverlap(SpriteKind.No, SpriteKind.Player, function (sprite, otherSprite) {
    sprite.destroy()
    game.showLongText("What would you be doing anyway, loser?", DialogLayout.Center)
    otherSprite.destroy()
    Yes.destroy()
    StarterFunction()
})
scene.onHitWall(SpriteKind.Ally, function (sprite, location) {
    sprite.destroy()
})
sprites.onOverlap(SpriteKind.Boost, SpriteKind.Player, function (sprite, otherSprite) {
    Powerup.destroy()
    PowerupType = randint(1, 5)
    if (PowerupType == 1 && Shield == 0) {
        Y = 1
        PowerUp1 = sprites.create(img`
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
            `, SpriteKind.Assistant)
        PowerUp1.setPosition(MySpriteX, MySpriteY)
        controller.moveSprite(PowerUp1, 100, 100)
        Shield += 1
    } else if (PowerupType == 2) {
        if (Life == 2) {
            info.changeLifeBy(1)
        } else if (Life == 1) {
            info.changeLifeBy(2)
        }
    } else if (PowerupType == 3) {
        game.showLongText("MRS. BEATTY!!", DialogLayout.Bottom)
        Mrs_Beatty = sprites.create(img`
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
            `, SpriteKind.Parent)
        pause(1000)
        for (let index = 0; index < 10; index++) {
            pause(500)
            Obstacle.setVelocity(0, 0)
            Obstacle.startEffect(effects.fire)
            Obstacle.destroy()
            info.changeScoreBy(1)
        }
        pause(1000)
        Mrs_Beatty.destroy()
    } else if (PowerupType == 4) {
        game.showLongText("Here comes the Boys!", DialogLayout.Bottom)
        for (let index = 0; index < 15; index++) {
            pause(500)
            TheBoys = sprites.create(img`
                . . . . . f f 4 4 f f . . . . . 
                . . . . f 5 4 5 5 4 5 f . . . . 
                . . . f e 3 3 3 3 3 3 e f . . . 
                . . f b 3 3 3 3 3 3 3 3 b f . . 
                . . f 3 3 3 3 3 3 3 3 3 3 f . . 
                . f 3 3 3 3 3 3 3 3 3 3 3 3 f . 
                . f b 3 3 3 3 3 3 3 3 3 3 b f . 
                . f b b 3 3 3 3 3 3 3 3 b b f . 
                . f b b b b b b b b b b b b f . 
                f c b b b b b b b b b b b b c f 
                f b b b b b b b b b b b b b b f 
                . f c c b b b b b b b b c c f . 
                . . e 4 c f f f f f f c 4 e . . 
                . . e f b d b d b d b b f e . . 
                . . . f f 1 d 1 d 1 d f f . . . 
                . . . . . f f b b f f . . . . . 
                `, SpriteKind.Ally)
            TheBoys.setPosition(randint(10, 150), 120)
            TheBoys.setVelocity(0, -50)
            animation.runImageAnimation(
            TheBoys,
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
        }
    } else if (PowerupType == 5) {
        mySpriteUp.destroy()
        mySpriteUp = sprites.create(img`
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
            `, SpriteKind.Player)
        controller.moveSprite(mySpriteUp)
        for (let index = 0; index < 5; index++) {
            pause(1000)
            Obstacle.setVelocity(0, 0)
        }
        pause(5000)
        mySpriteUp.destroy()
        mySpriteUp = sprites.create(img`
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
            `, SpriteKind.Player)
        controller.moveSprite(mySpriteUp)
        PowerupType = 0
    }
})
sprites.onOverlap(SpriteKind.Ally, SpriteKind.Enemy, function (sprite, otherSprite) {
    otherSprite.setVelocity(0, -50)
    otherSprite.startEffect(effects.fountain, 1000)
    pause(1000)
    otherSprite.destroy()
    info.changeScoreBy(1)
})
controller.right.onEvent(ControllerButtonEvent.Pressed, function () {
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
    if (PowerupType == 5) {
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
        200,
        false
        )
    }
})
sprites.onOverlap(SpriteKind.Enemy, SpriteKind.Player, function (sprite, otherSprite) {
    info.changeLifeBy(-1)
    sprite.destroy()
})
sprites.onOverlap(SpriteKind.Enemy, SpriteKind.Assistant, function (sprite, otherSprite) {
    Obstacle.destroy()
    Y += 1
    PowerUp1.destroy()
    Poweruptwo_2 = sprites.create(img`
        . . . . . f f 4 4 f f . . . . . 
        . . . . f 5 4 5 5 4 5 f . . . . 
        . . . f e 3 3 3 3 3 3 e f . . . 
        . . f b 3 3 3 3 3 3 3 3 b f . . 
        . . f 3 3 3 3 3 3 3 3 3 3 f . . 
        . f 3 3 3 3 3 3 3 3 3 3 3 3 f . 
        . f b 3 3 3 3 3 3 3 3 3 3 b f . 
        . f b b 3 3 3 3 3 3 3 3 b b f . 
        . f b b b b b b b b b b b b f . 
        f c b b b b b b b b b b b b c f 
        f b b b b b b b b b b b b b b f 
        . f c c b b b b b b b b c c f . 
        . . e 4 c f f f f f f c 4 e . . 
        . . e f b d b d b d b b f e . . 
        . . . f f 1 d 1 d 1 d f f . . . 
        . . . . . f f b b f f . . . . . 
        `, SpriteKind.Assistant2)
    Poweruptwo_2.setPosition(MySpriteX, MySpriteY)
    controller.moveSprite(Poweruptwo_2, 100, 100)
})
controller.down.onEvent(ControllerButtonEvent.Pressed, function () {
    mySpriteUp.setImage(img`
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
        `)
    animation.runImageAnimation(
    mySpriteUp,
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
    200,
    false
    )
    if (PowerupType == 5) {
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
    }
})
info.onLifeZero(function () {
    info.stopCountdown()
    X = 1
    tiles.setTilemap(tilemap`level5`)
    game.showLongText("Thanks for playing Bubs and the Babes", DialogLayout.Center)
    game.showLongText("Brought to you by Virtue Games", DialogLayout.Center)
    game.showLongText("Special thanks to TJ: Lead Developer     Antone: Creative and Art Design      Harvey: Developer and Lead Playtester       Bubs: Inspiration and Comic Relief       Mr. Ruma: Sensei        ", DialogLayout.Center)
    Yes = sprites.create(img`
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
        `, SpriteKind.Yes)
    No = sprites.create(img`
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
        `, SpriteKind.No)
    Yes.setPosition(30, 60)
    No.setPosition(90, 60)
    game.showLongText("Play Again?", DialogLayout.Bottom)
})
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.Enemy, function (sprite, otherSprite) {
    sprite.destroy()
    info.changeScoreBy(50)
    otherSprite.setVelocity(0, -50)
    Obstacle.setImage(img`
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
    otherSprite.startEffect(effects.fountain, 1000)
    pause(1000)
    otherSprite.destroy()
    animation.runImageAnimation(
    otherSprite,
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
    100,
    true
    )
})
let X = 0
let TheBoys: Sprite = null
let Mrs_Beatty: Sprite = null
let PowerUp1: Sprite = null
let Yes: Sprite = null
let Powerup: Sprite = null
let Life = 0
let VX = 0
let Time = 0
let Shield = 0
let projectile: Sprite = null
let Limit = 0
let No: Sprite = null
let VY = 0
let PowerupType = 0
let mySpriteUp: Sprite = null
let MySpriteY = 0
let MySpriteX = 0
let Poweruptwo_3: Sprite = null
let Poweruptwo_2: Sprite = null
let Obstacle: Sprite = null
let Y = 0
StarterFunction()
game.onUpdateInterval(25, function () {
    MySpriteX = mySpriteUp.x
    MySpriteY = mySpriteUp.y
})
game.onUpdateInterval(1000, function () {
    VY += 1
    Time += -1
    VX += 1
})
game.onUpdateInterval(10, function () {
    if (Y == 1) {
        PowerUp1.setPosition(mySpriteUp.x, mySpriteUp.y - 5)
    } else if (Y == 2) {
        Poweruptwo_2.setPosition(mySpriteUp.x, mySpriteUp.y - 5)
    } else if (Y == 3) {
        Poweruptwo_3.setPosition(mySpriteUp.x, mySpriteUp.y - 5)
    }
})
game.onUpdateInterval(1500, function () {
    Limit += -1
})
game.onUpdateInterval(Time, function () {
    Enemies()
})
game.onUpdateInterval(Time, function () {
    if (X == 1) {
        Obstacle.destroy()
    }
})
