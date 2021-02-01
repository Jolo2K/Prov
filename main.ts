basic.forever(function () {
    basic.showString("Emelie")
    basic.clearScreen()
    basic.pause(500)
    basic.showIcon(IconNames.Heart)
    basic.pause(300)
    basic.clearScreen()
    basic.pause(300)
    for (let index = 0; index < 3; index++) {
        basic.showLeds(`
            . # # # .
            # # . # #
            # . # . #
            # # . # #
            . # # # .
            `)
        basic.pause(300)
        basic.clearScreen()
        basic.pause(300)
    }
    led.setBrightness(100)
    basic.showString("Hello!")
    basic.clearScreen()
    led.setBrightness(255)
    basic.showNumber(input.temperature())
    basic.pause(1000)
})
