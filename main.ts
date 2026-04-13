IR_Receiver.onIrButton(IrButton.Left, IrButtonAction.Pressed, function () {
    mbit_Robot.CarCtrlSpeed(mbit_Robot.CarState.Car_Left, 50)
})
IR_Receiver.onIrButton(IrButton.Up, IrButtonAction.Pressed, function () {
    mbit_Robot.CarCtrlSpeed(mbit_Robot.CarState.Car_Run, 50)
})
IR_Receiver.onIrButton(IrButton.Down, IrButtonAction.Pressed, function () {
    mbit_Robot.CarCtrlSpeed(mbit_Robot.CarState.Car_Back, 50)
})
IR_Receiver.onIrButton(IrButton.Pwr, IrButtonAction.Pressed, function () {
    mbit_Robot.CarCtrl(mbit_Robot.CarState.Car_Stop)
    mbit_Robot.RGB_Car_Big2(mbit_Robot.enColor.OFF)
})
IR_Receiver.onIrButton(IrButton.Right, IrButtonAction.Pressed, function () {
    mbit_Robot.CarCtrlSpeed(mbit_Robot.CarState.Car_Right, 50)
})
IR_Receiver.onIrButton(IrButton.SpinL, IrButtonAction.Pressed, function () {
    mbit_Robot.CarCtrlSpeed(mbit_Robot.CarState.Car_SpinLeft, 50)
})
IR_Receiver.onIrButton(IrButton.Light, IrButtonAction.Pressed, function () {
    mbit_Robot.RGB_Car_Big2(mbit_Robot.enColor.White)
})
IR_Receiver.onIrButton(IrButton.Beep, IrButtonAction.Pressed, function () {
    music.play(music.tonePlayable(262, music.beat(BeatFraction.Whole)), music.PlaybackMode.UntilDone)
})
IR_Receiver.onIrButton(IrButton.SpinR, IrButtonAction.Pressed, function () {
    mbit_Robot.CarCtrlSpeed(mbit_Robot.CarState.Car_SpinRight, 50)
})
IR_Receiver.connectIrReceiver(DigitalPin.P8)
basic.forever(function () {
	
})
