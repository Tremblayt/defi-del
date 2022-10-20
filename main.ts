let distance = 0
basic.forever(function () {
    distance = sonar.ping(
    DigitalPin.P0,
    DigitalPin.P1,
    PingUnit.Centimeters
    )
    if (distance < 4) {
        basic.showLeds(`
            # # # # #
            # # # # #
            # # # # #
            # # # # #
            # # # # #
            `)
    } else {
        if (distance < 8) {
            basic.showLeds(`
                # # # # .
                # # # # .
                # # # # .
                # # # # .
                # # # # .
                `)
        } else {
            if (distance < 12) {
                basic.showLeds(`
                    # # # . .
                    # # # . .
                    # # # . .
                    # # # . .
                    # # # . .
                    `)
            } else {
                if (distance < 16) {
                    basic.showLeds(`
                        # # . . .
                        # # . . .
                        # # . . .
                        # # . . .
                        # # . . .
                        `)
                } else {
                    if (distance < 20) {
                        basic.showLeds(`
                            # . . . .
                            # . . . .
                            # . . . .
                            # . . . .
                            # . . . .
                            `)
                    } else {
                        basic.showLeds(`
                            . . . . .
                            . . . . .
                            . . . . .
                            . . . . .
                            . . . . .
                            `)
                    }
                }
            }
        }
    }
})
