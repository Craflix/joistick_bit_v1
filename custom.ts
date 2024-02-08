
/**
* Use this file to define custom functions and blocks.
* Read more at https://makecode.microbit.org/blocks/custom
*/

enum button {
    //% block="A"
    A,
    //% block="B"
    B,
    //% block="C"
    C,
    //% block="D"
    D,
    //% block="E"
    E,
    //% block="F"
    F
}
//% weight=200 color=#1f7a7a icon="\uf11b" block="Joystickbit"
namespace joistickbit {
    /**
     * Get button state
     */
    //% blockId=buttons_get_state
    //% block="button %button is pressed"
    export function getbuttonval(button: button): boolean {
        let value = false
        if (pins.analogReadPin(AnalogPin.P2) < 256) {
            if (button == 0) {
                value = true
            }
        } else if (pins.analogReadPin(AnalogPin.P2) < 597) {
            if (button == 1) {
                value = true
            }
        } else if (pins.analogReadPin(AnalogPin.P2) < 725) {
            if (button == 2) {
                value = true
            }
        } else if (pins.analogReadPin(AnalogPin.P2) < 793) {
            if (button == 3) {
                value = true
            }
        } else if (pins.analogReadPin(AnalogPin.P2) < 836) {
            if (button == 5) {
                value = true
            }
        } else if (pins.analogReadPin(AnalogPin.P2) < 938) {
            if (button == 4) {
                value = true
            }
        } else {
            value = false
        }
        return value;
    }
}