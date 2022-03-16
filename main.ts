function girar90gradosderecha () {
    maqueen.motorStop(maqueen.Motors.All)
    basic.pause(260)
    maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CCW, 20)
    maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CW, 20)
    basic.pause(1000)
    maqueen.motorRun(maqueen.Motors.All, maqueen.Dir.CW, 20)
}
function girar90gradosizquierda () {
    maqueen.motorStop(maqueen.Motors.All)
    basic.pause(260)
    maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CW, 20)
    maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CCW, 20)
    basic.pause(1000)
    maqueen.motorRun(maqueen.Motors.All, maqueen.Dir.CW, 20)
}
basic.forever(function () {
    if (maqueen.Ultrasonic(PingUnit.Centimeters) < 4) {
        maqueen.motorStop(maqueen.Motors.All)
        girar90gradosizquierda()
        if (maqueen.Ultrasonic(PingUnit.Centimeters) < 4) {
            maqueen.motorStop(maqueen.Motors.All)
            girar90gradosderecha()
            if (maqueen.Ultrasonic(PingUnit.Centimeters) < 4) {
                maqueen.motorStop(maqueen.Motors.All)
                girar90gradosderecha()
            }
        }
    } else {
        maqueen.motorRun(maqueen.Motors.All, maqueen.Dir.CW, 20)
    }
})
