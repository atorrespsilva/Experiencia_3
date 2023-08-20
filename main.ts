let Valor_Potenciometro = 0
basic.forever(function () {
    Valor_Potenciometro = pins.analogReadPin(AnalogPin.P2)
    pins.analogWritePin(AnalogPin.P0, Valor_Potenciometro)
})
