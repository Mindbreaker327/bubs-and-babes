namespace SpriteKind {
    export const Assistant = SpriteKind.create()
    export const Health = SpriteKind.create()
    export const Assistant2 = SpriteKind.create()
    export const Assistant3 = SpriteKind.create()
}
sprites.onOverlap(SpriteKind.Enemy, SpriteKind.Assistant2, function (sprite, otherSprite) {
    Obstacle.destroy()
    Poweruptwo_2.destroy()
    Poweruptwo_3 = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . c c c . . . . . . 
        . . . . . . a b a a . . . . . . 
        . . . . . c b a f c a c . . . . 
        . . . . c b b b f f a c c . . . 
        . . . . b b f a b b a a c . . . 
        . . . . c b f f b a f c a . . . 
        . . . . . c a a c b b a . . . . 
        . . . . . . c c c c . . . . . . 
        . . . . . . . c . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.Assistant3)
    Poweruptwo_3.setPosition(MySpriteX, 100)
    controller.moveSprite(Poweruptwo_3, 100, 0)
})
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.Player, function (sprite, otherSprite) {
    sprite.destroy()
    PowerupType = randint(1, 2)
    if (PowerupType == 1) {
        PowerUp1 = sprites.create(img`
            2222222222222222222222
            2222222222222222222222
            2222222222222222222222
            222................222
            222................222
            222................222
            222................222
            222................222
            222................222
            222................222
            222................222
            222................222
            222................222
            222................222
            222................222
            222................222
            222................222
            222................222
            222................222
            222................222
            222................222
            2222222222222222222222
            2222222222222222222222
            2222222222222222222222
            `, SpriteKind.Assistant)
        PowerUp1.setPosition(MySpriteX, MySpriteY)
        controller.moveSprite(PowerUp1, 100, 100)
    } else if (PowerupType == 2) {
        info.changeLifeBy(3)
    }
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Assistant3, function (sprite, otherSprite) {
    Obstacle.destroy()
    Poweruptwo_3.destroy()
})
info.onCountdownEnd(function () {
    Powerup = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . b 5 5 b . . . 
        . . . . . . b b b b b b . . . . 
        . . . . . b b 5 5 5 5 5 b . . . 
        . b b b b b 5 5 5 5 5 5 5 b . . 
        . b d 5 b 5 5 5 5 5 5 5 5 b . . 
        . . b 5 5 b 5 d 1 f 5 d 4 f . . 
        . . b d 5 5 b 1 f f 5 4 4 c . . 
        b b d b 5 5 5 d f b 4 4 4 4 b . 
        b d d c d 5 5 b 5 4 4 4 4 4 4 b 
        c d d d c c b 5 5 5 5 5 5 5 b . 
        c b d d d d d 5 5 5 5 5 5 5 b . 
        . c d d d d d d 5 5 5 5 5 d b . 
        . . c b d d d d d 5 5 5 b b . . 
        . . . c c c c c c c c b b . . . 
        `, SpriteKind.Projectile)
    Powerup.setVelocity(0, 50)
    Powerup.setPosition(randint(160, 0), 0)
    info.changeScoreBy(15)
    info.startCountdown(30)
})
sprites.onOverlap(SpriteKind.Enemy, SpriteKind.Player, function (sprite, otherSprite) {
    info.changeLifeBy(-1)
    sprite.destroy()
})
sprites.onOverlap(SpriteKind.Enemy, SpriteKind.Assistant, function (sprite, otherSprite) {
    Obstacle.destroy()
    PowerUp1.destroy()
    Poweruptwo_2 = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . c c c c . . 
        . c c c c c . c c c c c f c c . 
        c c a c c c c c 8 f f c f f c c 
        c a f a a c c a f f c a a f f c 
        c a 8 f a a c a c c c a a a a c 
        c b c f a a a a a c c c c c c c 
        c b b a a c f 8 a c c c 8 c c c 
        . c b b a b c f a a a 8 8 c c . 
        . . . . a a b b b a a 8 a c . . 
        . . . . c b c a a c c b . . . . 
        . . . . b b c c a b b a . . . . 
        . . . . b b a b a 6 a . . . . . 
        . . . . c b b b 6 6 c . . . . . 
        . . . . . c a 6 6 b c . . . . . 
        . . . . . . . c c c . . . . . . 
        `, SpriteKind.Assistant2)
    Poweruptwo_2.setPosition(MySpriteX, 100)
    controller.moveSprite(Poweruptwo_2, 100, 0)
})
let X = 0
let Powerup: Sprite = null
let MySpriteY = 0
let PowerUp1: Sprite = null
let PowerupType = 0
let Poweruptwo_3: Sprite = null
let Poweruptwo_2: Sprite = null
let Obstacle: Sprite = null
let MySpriteX = 0
MySpriteX = 80
let mySprite = sprites.create(img`
    . . . . . . f f f f . . . . . . 
    . . . . f f e e e e f f . . . . 
    . . . f e e e f f e e e f . . . 
    . . f f f f f 2 2 f f f f f . . 
    . . f f e 2 e 2 2 e 2 e f f . . 
    . . f e 2 f 2 f f 2 f 2 e f . . 
    . . f f f 2 2 e e 2 2 f f f . . 
    . f f e f 2 f e e f 2 f e f f . 
    . f e e f f e e e e f e e e f . 
    . . f e e e e e e e e e e f . . 
    . . . f e e e e e e e e f . . . 
    . . e 4 f f f f f f f f 4 e . . 
    . . 4 d f 2 2 2 2 2 2 f d 4 . . 
    . . 4 4 f 4 4 4 4 4 4 f 4 4 . . 
    . . . . . f f f f f f . . . . . 
    . . . . . f f . . f f . . . . . 
    `, SpriteKind.Player)
controller.moveSprite(mySprite, 100, 100)
mySprite.setPosition(MySpriteX, 100)
scene.cameraFollowSprite(mySprite)
tiles.setTilemap(tilemap`level1`)
let VY = 50
let Time = 250
let VX = 50
info.setLife(3)
info.setScore(0)
info.startCountdown(30)
game.onUpdateInterval(1000, function () {
    VY += 1
    Time += -1
    VX += 1
})
game.onUpdateInterval(Time, function () {
    X = randint(1, 4)
    if (X == 1) {
        Obstacle = sprites.create(img`
            . . . . . f f 4 4 f f . . . . . 
            . . . . f 5 4 5 5 4 5 f . . . . 
            . . . f e 4 5 5 5 5 4 e f . . . 
            . . f b 3 e 4 4 4 4 e 3 b f . . 
            . . f 3 3 3 3 3 3 3 3 3 3 f . . 
            . f 3 3 e b 3 e e 3 b e 3 3 f . 
            . f 3 3 f f e e e e f f 3 3 f . 
            . f b b f b f e e f b f b b f . 
            . f b b e 1 f 4 4 f 1 e b b f . 
            f f b b f 4 4 4 4 4 4 f b b f f 
            f b b f f f e e e e f f f b b f 
            . f e e f b d d d d b f e e f . 
            . . e 4 c d d d d d d c 4 e . . 
            . . e f b d b d b d b b f e . . 
            . . . f f 1 d 1 d 1 d f f . . . 
            . . . . . f f b b f f . . . . . 
            `, SpriteKind.Enemy)
        Obstacle.setPosition(randint(140, 20), 20)
        Obstacle.setVelocity(0, VY)
    } else if (X == 2) {
        Obstacle = sprites.create(img`
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
            `, SpriteKind.Enemy)
        Obstacle.setPosition(randint(140, 20), 130)
        Obstacle.setVelocity(0, VY * -1)
    } else if (X == 3) {
        Obstacle = sprites.create(img`
            . . . . . . . . . . . . . . . . 
            . . . f 4 4 f f f f . . . . . . 
            . . f 4 5 5 4 5 f b f f . . . . 
            . . f 5 5 5 5 4 e 3 3 b f . . . 
            . . f e 4 4 4 e 3 3 3 3 b f . . 
            . f 3 3 3 3 3 3 3 3 3 3 3 f . . 
            . f 3 3 e e 3 b e 3 3 3 3 f . . 
            . f 3 3 e e e f f 3 3 3 3 f . . 
            . . f e e e f b f b b b b f f . 
            . . . e 4 4 f 1 e b b b b b f . 
            . . . f 4 4 4 4 f b b b b b f . 
            . . . f d d d e 4 4 b b b f . . 
            . . . f d d d e 4 4 f f f . . . 
            . . f d d d b b e e b b f . . . 
            . . f b d 1 d 1 d d b f . . . . 
            . . . f f f b b f f f . . . . . 
            `, SpriteKind.Enemy)
        Obstacle.setPosition(140, randint(140, 20))
        Obstacle.setVelocity(VX * -1, 0)
    } else {
        Obstacle = sprites.create(img`
            . . . . . . f f f f 4 4 f . . . 
            . . . . f f b f 5 4 5 5 4 f . . 
            . . . f b 3 3 e 4 5 5 5 5 f . . 
            . . f b 3 3 3 3 e 4 4 4 e f . . 
            . . f 3 3 3 3 3 3 3 3 3 3 f . . 
            . . f 3 3 3 3 e b 3 e e 3 3 f . 
            . . f 3 3 3 3 f f e e e 3 3 f . 
            . . f b b b b f b f e e e 3 f . 
            . . f b b b b e 1 f 4 4 e f . . 
            . f f b b b b f 4 4 4 4 f . . . 
            . f b b b b f f f e e e f . . . 
            . . f b b f 4 4 e d d d f . . . 
            . . . f f e 4 4 e d d d f . . . 
            . . . . f b e e b d b d b f . . 
            . . . . f f d 1 d 1 d 1 f f . . 
            . . . . . . f f b b f f . . . . 
            `, SpriteKind.Enemy)
        Obstacle.setPosition(20, randint(140, 20))
        Obstacle.setVelocity(VX, 0)
    }
})
game.onUpdateInterval(100, function () {
    MySpriteX = mySprite.x
    MySpriteY = mySprite.y
})
