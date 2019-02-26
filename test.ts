MicroIOT.Obloq_mqtt_callback_user(function (message) {
    basic.showString(message)
})
MicroIOT.Obloq_mqtt_setup(
    "yourSSID",
    "yourPASSWORD",
    "yourIotId",
    "yourIotPwd",
    "yourIotTopic",
    MicroIOT.SERVERS.China
)
basic.forever(() => {
    MicroIOT.Obloq_mqtt_send_message("hello")
    basic.pause(5000)
})
