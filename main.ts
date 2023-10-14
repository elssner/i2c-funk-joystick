/**
 * Lade die Erweiterungen
 * 
 * radio
 * 
 * calliope-net/motor
 */
input.onButtonEvent(Button.B, input.buttonEventClick(), function () {
    basic.showNumber(qwiicmotor.readRegister_joy(qwiicmotor.qwiicmotor_eADDR_joy(qwiicmotor.eADDR_joy.Joystick_x20), qwiicmotor.eRegister_joy.STATUS))
})
radio.setGroup(10)
qwiicmotor.beimStart_joy(qwiicmotor.qwiicmotor_eADDR_joy(qwiicmotor.eADDR_joy.Joystick_x20))
loops.everyInterval(400, function () {
    radio.sendNumber(qwiicmotor.qwiicmotor_readJoystick(qwiicmotor.qwiicmotor_eADDR_joy(qwiicmotor.eADDR_joy.Joystick_x20)))
})
