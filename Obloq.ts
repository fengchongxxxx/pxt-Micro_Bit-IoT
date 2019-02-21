/*！
* @file Obloq/Obloq.ts
* @brief DFRobot's obloq makecode library.
* @n [Get the module here](http://www.dfrobot.com.cn/goods-1577.html)
* @n Obloq is a serial port of WIFI connection module, Obloq can connect 
*    to Microsoft Azure IoT and other standard MQTT protocol IoT.
*
* @copyright	[DFRobot](http://www.dfrobot.com), 2016
* @copyright	GNU Lesser General Public License
*
* @author [email](xin.li@dfrobot.com)
* @version  V1.0
* @date  2018-03-20
*/

let ascii_8_16 = [
/*" "*/[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
/*"!"*/[0, 0, 24, 60, 60, 60, 24, 24, 24, 0, 24, 24, 0, 0, 0, 0],
/*"\"*/[0, 99, 99, 99, 34, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
/*"#"*/[0, 0, 0, 54, 54, 127, 54, 54, 54, 127, 54, 54, 0, 0, 0, 0],
/*"$"*/[12, 12, 62, 99, 97, 96, 62, 3, 3, 67, 99, 62, 12, 12, 0, 0],
/*"%"*/[0, 0, 0, 0, 0, 97, 99, 6, 12, 24, 51, 99, 0, 0, 0, 0],
/*"&"*/[0, 0, 0, 28, 54, 54, 28, 59, 110, 102, 102, 59, 0, 0, 0, 0],
/*"'"*/[0, 48, 48, 48, 96, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
/*"("*/[0, 0, 12, 24, 24, 48, 48, 48, 48, 24, 24, 12, 0, 0, 0, 0],
/*")"*/[0, 0, 24, 12, 12, 6, 6, 6, 6, 12, 12, 24, 0, 0, 0, 0],
/*"*"*/[0, 0, 0, 0, 66, 102, 60, 255, 60, 102, 66, 0, 0, 0, 0, 0],
/*"+"*/[0, 0, 0, 0, 24, 24, 24, 255, 24, 24, 24, 0, 0, 0, 0, 0],
/*","*/[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 24, 24, 24, 48, 0, 0],
/*"-"*/[0, 0, 0, 0, 0, 0, 0, 255, 0, 0, 0, 0, 0, 0, 0, 0],
/*"."*/[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 24, 24, 0, 0, 0, 0],
/*"/"*/[0, 0, 1, 3, 7, 14, 28, 56, 112, 224, 192, 128, 0, 0, 0, 0],
/*"0"*/[0, 0, 62, 99, 99, 99, 107, 107, 99, 99, 99, 62, 0, 0, 0, 0],
/*"1"*/[0, 0, 12, 28, 60, 12, 12, 12, 12, 12, 12, 63, 0, 0, 0, 0],
/*"2"*/[0, 0, 62, 99, 3, 6, 12, 24, 48, 97, 99, 127, 0, 0, 0, 0],
/*"3"*/[0, 0, 62, 99, 3, 3, 30, 3, 3, 3, 99, 62, 0, 0, 0, 0],
/*"4"*/[0, 0, 6, 14, 30, 54, 102, 102, 127, 6, 6, 15, 0, 0, 0, 0],
/*"5"*/[0, 0, 127, 96, 96, 96, 126, 3, 3, 99, 115, 62, 0, 0, 0, 0],
/*"6"*/[0, 0, 28, 48, 96, 96, 126, 99, 99, 99, 99, 62, 0, 0, 0, 0],
/*"7"*/[0, 0, 127, 99, 3, 6, 6, 12, 12, 24, 24, 24, 0, 0, 0, 0],
/*"8"*/[0, 0, 62, 99, 99, 99, 62, 99, 99, 99, 99, 62, 0, 0, 0, 0],
/*"9"*/[0, 0, 62, 99, 99, 99, 99, 63, 3, 3, 6, 60, 0, 0, 0, 0],
/*":"*/[0, 0, 0, 0, 0, 24, 24, 0, 0, 0, 24, 24, 0, 0, 0, 0],
/*";"*/[0, 0, 0, 0, 0, 24, 24, 0, 0, 0, 24, 24, 24, 48, 0, 0],
/*"<"*/[0, 0, 0, 6, 12, 24, 48, 96, 48, 24, 12, 6, 0, 0, 0, 0],
/*"="*/[0, 0, 0, 0, 0, 0, 126, 0, 0, 126, 0, 0, 0, 0, 0, 0],
/*">"*/[0, 0, 0, 96, 48, 24, 12, 6, 12, 24, 48, 96, 0, 0, 0, 0],
/*"?"*/[0, 0, 62, 99, 99, 6, 12, 12, 12, 0, 12, 12, 0, 0, 0, 0],
/*"@"*/[0, 0, 62, 99, 99, 111, 107, 107, 110, 96, 96, 62, 0, 0, 0, 0],
/*"A"*/[0, 0, 8, 28, 54, 99, 99, 99, 127, 99, 99, 99, 0, 0, 0, 0],
/*"B"*/[0, 0, 126, 51, 51, 51, 62, 51, 51, 51, 51, 126, 0, 0, 0, 0],
/*"C"*/[0, 0, 30, 51, 97, 96, 96, 96, 96, 97, 51, 30, 0, 0, 0, 0],
/*"D"*/[0, 0, 124, 54, 51, 51, 51, 51, 51, 51, 54, 124, 0, 0, 0, 0],
/*"E"*/[0, 0, 127, 51, 49, 52, 60, 52, 48, 49, 51, 127, 0, 0, 0, 0],
/*"F"*/[0, 0, 127, 51, 49, 52, 60, 52, 48, 48, 48, 120, 0, 0, 0, 0],
/*"G"*/[0, 0, 30, 51, 97, 96, 96, 111, 99, 99, 55, 29, 0, 0, 0, 0],
/*"H"*/[0, 0, 99, 99, 99, 99, 127, 99, 99, 99, 99, 99, 0, 0, 0, 0],
/*"I"*/[0, 0, 60, 24, 24, 24, 24, 24, 24, 24, 24, 60, 0, 0, 0, 0],
/*"J"*/[0, 0, 15, 6, 6, 6, 6, 6, 6, 102, 102, 60, 0, 0, 0, 0],
/*"K"*/[0, 0, 115, 51, 54, 54, 60, 54, 54, 51, 51, 115, 0, 0, 0, 0],
/*"L"*/[0, 0, 120, 48, 48, 48, 48, 48, 48, 49, 51, 127, 0, 0, 0, 0],
/*"M"*/[0, 0, 99, 119, 127, 107, 99, 99, 99, 99, 99, 99, 0, 0, 0, 0],
/*"N"*/[0, 0, 99, 99, 115, 123, 127, 111, 103, 99, 99, 99, 0, 0, 0, 0],
/*"O"*/[0, 0, 28, 54, 99, 99, 99, 99, 99, 99, 54, 28, 0, 0, 0, 0],
/*"P"*/[0, 0, 126, 51, 51, 51, 62, 48, 48, 48, 48, 120, 0, 0, 0, 0],
/*"Q"*/[0, 0, 62, 99, 99, 99, 99, 99, 99, 107, 111, 62, 6, 7, 0, 0],
/*"R"*/[0, 0, 126, 51, 51, 51, 62, 54, 54, 51, 51, 115, 0, 0, 0, 0],
/*"S"*/[0, 0, 62, 99, 99, 48, 28, 6, 3, 99, 99, 62, 0, 0, 0, 0],
/*"T"*/[0, 0, 255, 219, 153, 24, 24, 24, 24, 24, 24, 60, 0, 0, 0, 0],
/*"U"*/[0, 0, 99, 99, 99, 99, 99, 99, 99, 99, 99, 62, 0, 0, 0, 0],
/*"V"*/[0, 0, 99, 99, 99, 99, 99, 99, 99, 54, 28, 8, 0, 0, 0, 0],
/*"W"*/[0, 0, 99, 99, 99, 99, 99, 107, 107, 127, 54, 54, 0, 0, 0, 0],
/*"X"*/[0, 0, 195, 195, 102, 60, 24, 24, 60, 102, 195, 195, 0, 0, 0, 0],
/*"Y"*/[0, 0, 195, 195, 195, 102, 60, 24, 24, 24, 24, 60, 0, 0, 0, 0],
/*"Z"*/[0, 0, 127, 99, 67, 6, 12, 24, 48, 97, 99, 127, 0, 0, 0, 0],
/*"["*/[0, 0, 60, 48, 48, 48, 48, 48, 48, 48, 48, 60, 0, 0, 0, 0],
/*"\\"*/[0, 0, 128, 192, 224, 112, 56, 28, 14, 7, 3, 1, 0, 0, 0, 0],
/*"}"*/[0, 0, 60, 12, 12, 12, 12, 12, 12, 12, 12, 60, 0, 0, 0, 0],
/*"^"*/[8, 28, 54, 99, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
/*"_"*/[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 255, 0, 0, 0],
/*"'"*/[24, 24, 12, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
/*"a"*/[0, 0, 0, 0, 0, 60, 70, 6, 62, 102, 102, 59, 0, 0, 0, 0],
/*"b"*/[0, 0, 112, 48, 48, 60, 54, 51, 51, 51, 51, 110, 0, 0, 0, 0],
/*"c"*/[0, 0, 0, 0, 0, 62, 99, 96, 96, 96, 99, 62, 0, 0, 0, 0],
/*"d"*/[0, 0, 14, 6, 6, 30, 54, 102, 102, 102, 102, 59, 0, 0, 0, 0],
/*"e"*/[0, 0, 0, 0, 0, 62, 99, 99, 126, 96, 99, 62, 0, 0, 0, 0],
/*"f"*/[0, 0, 28, 54, 50, 48, 124, 48, 48, 48, 48, 120, 0, 0, 0, 0],
/*"g"*/[0, 0, 0, 0, 0, 59, 102, 102, 102, 102, 62, 6, 102, 60, 0, 0],
/*"h"*/[0, 0, 112, 48, 48, 54, 59, 51, 51, 51, 51, 115, 0, 0, 0, 0],
/*"i"*/[0, 0, 12, 12, 0, 28, 12, 12, 12, 12, 12, 30, 0, 0, 0, 0],
/*"j"*/[0, 0, 6, 6, 0, 14, 6, 6, 6, 6, 6, 102, 102, 60, 0, 0],
/*"k"*/[0, 0, 112, 48, 48, 51, 51, 54, 60, 54, 51, 115, 0, 0, 0, 0],
/*"l"*/[0, 0, 28, 12, 12, 12, 12, 12, 12, 12, 12, 30, 0, 0, 0, 0],
/*"m"*/[0, 0, 0, 0, 0, 110, 127, 107, 107, 107, 107, 107, 0, 0, 0, 0],
/*"n"*/[0, 0, 0, 0, 0, 110, 51, 51, 51, 51, 51, 51, 0, 0, 0, 0],
/*"o"*/[0, 0, 0, 0, 0, 62, 99, 99, 99, 99, 99, 62, 0, 0, 0, 0],
/*"p"*/[0, 0, 0, 0, 0, 110, 51, 51, 51, 51, 62, 48, 48, 120, 0, 0],
/*"q"*/[0, 0, 0, 0, 0, 59, 102, 102, 102, 102, 62, 6, 6, 15, 0, 0],
/*"r"*/[0, 0, 0, 0, 0, 110, 59, 51, 48, 48, 48, 120, 0, 0, 0, 0],
/*"s"*/[0, 0, 0, 0, 0, 62, 99, 56, 14, 3, 99, 62, 0, 0, 0, 0],
/*"t"*/[0, 0, 8, 24, 24, 126, 24, 24, 24, 24, 27, 14, 0, 0, 0, 0],
/*"u"*/[0, 0, 0, 0, 0, 102, 102, 102, 102, 102, 102, 59, 0, 0, 0, 0],
/*"v"*/[0, 0, 0, 0, 0, 99, 99, 54, 54, 28, 28, 8, 0, 0, 0, 0],
/*"w"*/[0, 0, 0, 0, 0, 99, 99, 99, 107, 107, 127, 54, 0, 0, 0, 0],
/*"x"*/[0, 0, 0, 0, 0, 99, 54, 28, 28, 28, 54, 99, 0, 0, 0, 0],
/*"y"*/[0, 0, 0, 0, 0, 99, 99, 99, 99, 99, 63, 3, 6, 60, 0, 0],
/*"z"*/[0, 0, 0, 0, 0, 127, 102, 12, 24, 48, 99, 127, 0, 0, 0, 0],
/*"{"*/[0, 0, 14, 24, 24, 24, 112, 24, 24, 24, 24, 14, 0, 0, 0, 0],
/*"|"*/[0, 0, 24, 24, 24, 24, 24, 0, 24, 24, 24, 24, 24, 0, 0, 0],
/*"}"*/[0, 0, 112, 24, 24, 24, 14, 24, 24, 24, 24, 112, 0, 0, 0, 0],
/*"~"*/[0, 0, 59, 110, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
];





//debug
const OBLOQ_DEBUG = false
const OBLOQ_MQTT_DEFAULT_SERVER = true
//DFRobot easy iot
const OBLOQ_MQTT_EASY_IOT_SERVER_CHINA = "iot.dfrobot.com.cn"
const OBLOQ_MQTT_EASY_IOT_SERVER_GLOBAL = "iot.dfrobot.com"
const OBLOQ_MQTT_EASY_IOT_PORT = 1883
//other iot
const OBLOQ_MQTT_USER_IOT_SERVER = "---.-----.---"
const OBLOQ_MQTT_USER_IOT_PORT = 0
//topic max number
const OBLOQ_MQTT_TOPIC_NUM_MAX = 5
//wrong type
const OBLOQ_ERROR_TYPE_IS_SUCCE = 0
const OBLOQ_ERROR_TYPE_IS_ERR = 1
const OBLOQ_ERROR_TYPE_IS_WIFI_CONNECT_TIMEOUT = -1
const OBLOQ_ERROR_TYPE_IS_WIFI_CONNECT_FAILURE = -2
const OBLOQ_ERROR_TYPE_IS_MQTT_SUBTOPIC_TIMEOUT = -3
const OBLOQ_ERROR_TYPE_IS_MQTT_CONNECT_TIMEOUT = -4
const OBLOQ_ERROR_TYPE_IS_MQTT_CONNECT_FAILURE = -5
const OBLOQ_ERROR_TYPE_IS_MQTT_SUBTOPIC_FAILURE = -6
//data type
const OBLOQ_STR_TYPE_IS_NONE = ""
const OBLOQ_BOOL_TYPE_IS_TRUE = true
const OBLOQ_BOOL_TYPE_IS_FALSE = false
//topics name
enum TOPIC {
    topic_1 = 1,
    topic_2 = 2,
    topic_3 = 3,
    topic_4 = 4
}

//Line name
enum LINE {
    line_1 = 1,
    line_2 = 2,
    line_3 = 3,
    line_4 = 4
}


/**
 *Obloq implementation method.
 */
//% weight=10 color=#008B00 icon="\uf1eb" block="Obloq"
namespace Obloq {

    let textColor = 1;
    let printfX = 0;
    let printfY = 0;
    //OLED i2caddress
    const ssd1306_i2c_address = 0x3c;
    //OLED screen
    let SSD1306_JUMPTABLE_BYTES = 4
    let SSD1306_JUMPTABLE_LSB = 1
    let SSD1306_JUMPTABLE_SIZE = 2
    let SSD1306_JUMPTABLE_WIDTH = 3
    let SSD1306_JUMPTABLE_START = 4
    let SSD1306_WIDTH_POS = 0
    let SSD1306_HEIGHT_POS = 1
    let SSD1306_FIRST_CHAR_POS = 2
    let SSD1306_CHAR_NUM_POS = 3
    //OLED Display commands
    let SSD1306_CHARGEPUMP = 0x8D
    let SSD1306_COLUMNADDR = 0x21
    let SSD1306_COMSCANDEC = 0xC8
    let SSD1306_COMSCANINC = 0xC0
    let SSD1306_DISPLAYALLON = 0xA5
    let SSD1306_DISPLAYALLON_RESUME = 0xA4
    let SSD1306_DISPLAYOFF = 0xAE
    let SSD1306_DISPLAYON = 0xAF
    let SSD1306_EXTERNALVCC = 0x1
    let SSD1306_INVERTDISPLAY = 0xA7
    let SSD1306_MEMORYMODE = 0x20
    let SSD1306_NORMALDISPLAY = 0xA6
    let SSD1306_PAGEADDR = 0x22
    let SSD1306_SEGREMAP = 0xA0
    let SSD1306_SETCOMPINS = 0xDA
    let SSD1306_SETCONTRAST = 0x81
    let SSD1306_SETDISPLAYCLOCKDIV = 0xD5
    let SSD1306_SETDISPLAYOFFSET = 0xD3
    let SSD1306_SETHIGHCOLUMN = 0x10
    let SSD1306_SETLOWCOLUMN = 0x00
    let SSD1306_SETMULTIPLEX = 0xA8
    let SSD1306_SETPRECHARGE = 0xD9
    let SSD1306_SETSEGMENTREMAP = 0xA1
    let SSD1306_SETSTARTLINE = 0x40
    let SSD1306_SETVCOMDETECT = 0xDB
    let SSD1306_SWITCHCAPVCC = 0x2
    let BEGIN_ERR_OK = 0
    let BEGIN_ERR_ERR = -1
    let BEGIN_WAR_NOTEST = 1
    let DISPLAY_ERR_OK = 0
    let DISPLAY_ERR = -1
    let DISPLAY_ERR_PARAM = -2
    let DISPLAY_ERR_NOTSUPPORT = -3
    let DISPLAY_ERR_MEMOVER = -4


    //Motor IIC address
    const address = 0x10

    /**
     * The user selects the 2-way dc motor.
    */
    export enum Motors {
        M1 = 0x00,
        M2 = 0x01
    }

    /**
     * The user defines the motor rotation direction.
    */
    export enum Dir {
        //% blockId="CW" block="CW"
        CW = 0x01,
        //% blockId="CCW" block="CCW"
        CCW = 0x00
    }

    /**
     * Execute a motor
     * M1~M2.
     * speed(0~255).
    */
    //% weight=90
    //% blockId=motor_motorRun block="Motor|%index|dir|%Dir|speed|%speed"
    //% speed.min=0 speed.max=255
    //% index.fieldEditor="gridpicker" index.fieldOptions.columns=1
    //% direction.fieldEditor="gridpicker" direction.fieldOptions.columns=1
    export function motorRun(index: Motors, direction: Dir, speed: number): void {
        let buf = pins.createBuffer(3);
        if (index == 0) {
            buf[0] = 0x00;
        }
        if (index == 1) {
            buf[0] = 0x02;
        }
        buf[1] = direction;
        buf[2] = speed;
        pins.i2cWriteBuffer(address, buf);
    }

    /**
	 * Stop the dc motor.
    */
    //% weight=20
    //% blockId=motor_motorStop block="Motor stop|%index"
    //% index.fieldEditor="gridpicker" index.fieldOptions.columns=1
    export function motorStop(index: Motors) {
        let buf = pins.createBuffer(3);
        if (index == 0) {
            buf[0] = 0x00;
        }
        if (index == 1) {
            buf[0] = 0x02;
        }
        buf[1] = 0;
        buf[2] = 0;
        pins.i2cWriteBuffer(address, buf);
    }

    /**
	 * Stop all motors
    */
    //% weight=10
    //% blockId=motor_motorStopAll block="Motor Stop All"
    export function motorStopAll(): void {
        let buf = pins.createBuffer(3);
        buf[0] = 0x00;
        buf[1] = 0;
        buf[2] = 0;
        pins.i2cWriteBuffer(address, buf);
        buf[0] = 0x02;
        pins.i2cWriteBuffer(address, buf);
    }


    //serial
    let OBLOQ_SERIAL_INIT = OBLOQ_BOOL_TYPE_IS_FALSE
    let OBLOQ_SERIAL_TX = SerialPin.P14
    let OBLOQ_SERIAL_RX = SerialPin.P13
    //wifi
    let OBLOQ_WIFI_SSID = OBLOQ_STR_TYPE_IS_NONE
    let OBLOQ_WIFI_PASSWORD = OBLOQ_STR_TYPE_IS_NONE
    let OBLOQ_WIFI_IP = "0.0.0.0"
    //mqtt
    let OBLOQ_MQTT_PORT = 0
    let OBLOQ_MQTT_SERVER = OBLOQ_STR_TYPE_IS_NONE
    let OBLOQ_MQTT_PWD = OBLOQ_STR_TYPE_IS_NONE
    let OBLOQ_MQTT_ID = OBLOQ_STR_TYPE_IS_NONE
    let OBLOQ_MQTT_TOPIC = [["x", "false"], ["x", "false"], ["x", "false"], ["x", "false"], ["x", "false"]]
    //http
    let OBLOQ_HTTP_IP = OBLOQ_STR_TYPE_IS_NONE
    let OBLOQ_HTTP_PORT = 8080
    let OBLOQ_HTTP_BUSY = OBLOQ_BOOL_TYPE_IS_FALSE
    //state
    let OBLOQ_WIFI_CONNECTED = OBLOQ_BOOL_TYPE_IS_FALSE
    let OBLOQ_WIFI_CONNECT_FIRST = OBLOQ_BOOL_TYPE_IS_TRUE
    let OBLOQ_MQTT_INIT = OBLOQ_BOOL_TYPE_IS_FALSE
    let OBLOQ_HTTP_INIT = OBLOQ_BOOL_TYPE_IS_FALSE
    //callback
    let OBLOQ_MQTT_CB: Action[] = [null, null, null, null, null]
    //commands
    let OBLOQ_ANSWER_CMD = OBLOQ_STR_TYPE_IS_NONE
    let OBLOQ_ANSWER_CONTENT = OBLOQ_STR_TYPE_IS_NONE
    let OBLOQ_WRONG_TYPE = OBLOQ_STR_TYPE_IS_NONE
    //animation
    let OBLOQ_WIFI_ICON = 1
    let OBLOQ_MQTT_ICON = 1
    //event
    let OBLOQ_MQTT_EVENT = OBLOQ_BOOL_TYPE_IS_FALSE
    //mode
    let OBLOQ_WORKING_MODE_IS_MQTT = OBLOQ_BOOL_TYPE_IS_FALSE
    let OBLOQ_WORKING_MODE_IS_HTTP = OBLOQ_BOOL_TYPE_IS_FALSE
    let OBLOQ_WORKING_MODE_IS_STOP = OBLOQ_BOOL_TYPE_IS_TRUE


    export enum SERVERS {
        //% blockId=SERVERS_China block="China"
        China,
        //% blockId=SERVERS_Global block="Global"
        Global
    }

    export class PacketaMqtt {
        /**
         * Obloq receives the message content.
         */
        public message: string;
    }


    //% advanced=true shim=Obloq::obloqSetTxBufferSize
    function obloqSetTxBufferSize(size: number): void {
        return
    }

    //% advanced=true shim=Obloq::obloqSetRxBufferSize
    function obloqSetRxBufferSize(size: number): void {
        return
    }

    //% advanced=true shim=Obloq::obloqEventOn
    function obloqEventOn(): void {
        return
    }

    //% advanced=true shim=Obloq::obloqClearRxBuffer
    function obloqClearRxBuffer(): void {
        return
    }

    //% advanced=true shim=Obloq::obloqClearTxBuffer
    function obloqClearTxBuffer(): void {
        return
    }

    //% advanced=true shim=Obloq::obloqforevers
    function obloqforevers(a: Action): void {
        return
    }

    function obloqWriteString(text: string): void {
        serial.writeString(text)
    }

    function Obloq_wifi_icon_display(): void {
        switch (OBLOQ_WIFI_ICON) {
            case 1: {
                basic.clearScreen()
                led.plot(0, 4)
                OBLOQ_WIFI_ICON += 1
            } break;
            case 2: {
                led.plot(0, 2)
                led.plot(1, 2)
                led.plot(2, 3)
                led.plot(2, 4)
                OBLOQ_WIFI_ICON += 1
            } break;
            case 3: {
                led.plot(0, 0)
                led.plot(1, 0)
                led.plot(2, 0)
                led.plot(3, 1)
                led.plot(4, 2)
                led.plot(4, 3)
                led.plot(4, 4)
                OBLOQ_WIFI_ICON = 1
            } break;
        }
    }

    function Obloq_mqtt_icon_display(): void {
        switch (OBLOQ_MQTT_ICON) {
            case 1: {
                basic.clearScreen()
                led.plot(4, 0)
                OBLOQ_MQTT_ICON += 1
            } break;
            case 2: {
                led.plot(2, 0)
                led.plot(2, 1)
                led.plot(3, 2)
                led.plot(4, 2)
                OBLOQ_MQTT_ICON += 1
            } break;
            case 3: {
                led.plot(0, 0)
                led.plot(0, 1)
                led.plot(0, 2)
                led.plot(1, 3)
                led.plot(2, 4)
                led.plot(3, 4)
                led.plot(4, 4)
                OBLOQ_MQTT_ICON = 1
            } break;
        }
    }

    function Obloq_mark_reset(type: string): void {
        if (type == "wifi") {
            OBLOQ_WIFI_IP = "0.0.0.0"
            OBLOQ_WIFI_CONNECT_FIRST = OBLOQ_BOOL_TYPE_IS_TRUE
            OBLOQ_WIFI_CONNECTED = OBLOQ_BOOL_TYPE_IS_FALSE
        }
        OBLOQ_MQTT_INIT = OBLOQ_BOOL_TYPE_IS_FALSE
        OBLOQ_HTTP_INIT = OBLOQ_BOOL_TYPE_IS_FALSE
        OBLOQ_WIFI_ICON = 1
        OBLOQ_WIFI_ICON = 1
        for (let i = 0; i < OBLOQ_MQTT_TOPIC_NUM_MAX; i++) {
            OBLOQ_MQTT_TOPIC[i][1] = "false";
        }
        led.stopAnimation()
        basic.clearScreen()
    }

    function Obloq_serial_init(): void {
        let item = OBLOQ_STR_TYPE_IS_NONE
        //First send data through usb, avoid the first data scrambled.
        obloqWriteString("123")
        item = serial.readString()
        item = serial.readString()
        item = serial.readString()
        serial.redirect(
            OBLOQ_SERIAL_TX,
            OBLOQ_SERIAL_RX,
            BaudRate.BaudRate9600
        )
        obloqSetTxBufferSize(300)
        obloqSetRxBufferSize(300)
        obloqWriteString("\r")
        item = serial.readString()
        OBLOQ_SERIAL_INIT = OBLOQ_BOOL_TYPE_IS_TRUE
        obloqClearRxBuffer()
        obloqClearTxBuffer()
        onEvent()
    }

    function Obloq_start_connect_http(): void {
        OBLOQ_WORKING_MODE_IS_HTTP = OBLOQ_BOOL_TYPE_IS_TRUE
        let ret = Obloq_connect_wifi()
        if (OBLOQ_DEBUG) { basic.showNumber(ret) }
        switch (ret) {
            case OBLOQ_ERROR_TYPE_IS_SUCCE: {
                basic.showIcon(IconNames.Yes)
                basic.pause(500)
                basic.clearScreen()
                OBLOQ_WIFI_CONNECTED = OBLOQ_BOOL_TYPE_IS_TRUE
            } break
            case OBLOQ_ERROR_TYPE_IS_WIFI_CONNECT_TIMEOUT: {
                basic.showIcon(IconNames.No)
                basic.pause(500)
                OBLOQ_WRONG_TYPE = "wifi connect timeout"
                return
            } break
            case OBLOQ_ERROR_TYPE_IS_WIFI_CONNECT_FAILURE: {
                basic.showIcon(IconNames.No)
                basic.pause(500)
                OBLOQ_WRONG_TYPE = "wifi connect failure"
                return
            } break
            case OBLOQ_ERROR_TYPE_IS_ERR: {
                basic.showNumber(ret)
                basic.showIcon(IconNames.No)
                while (OBLOQ_BOOL_TYPE_IS_TRUE) { basic.pause(10000) }
            } break
        }
        OBLOQ_HTTP_INIT = OBLOQ_BOOL_TYPE_IS_TRUE
        OBLOQ_WORKING_MODE_IS_STOP = OBLOQ_BOOL_TYPE_IS_FALSE
    }

    function Obloq_start_connect_mqtt(SERVER: SERVERS, connectStart: string): void {
        OBLOQ_WORKING_MODE_IS_MQTT = OBLOQ_BOOL_TYPE_IS_TRUE
        if (OBLOQ_MQTT_DEFAULT_SERVER) {
            if (SERVER == SERVERS.China) {
                OBLOQ_MQTT_SERVER = OBLOQ_MQTT_EASY_IOT_SERVER_CHINA
            } else if (SERVER == SERVERS.Global) {
                OBLOQ_MQTT_SERVER = OBLOQ_MQTT_EASY_IOT_SERVER_GLOBAL
            }
            OBLOQ_MQTT_PORT = OBLOQ_MQTT_EASY_IOT_PORT
        } else {
            OBLOQ_MQTT_SERVER = OBLOQ_MQTT_USER_IOT_SERVER
            OBLOQ_MQTT_PORT = OBLOQ_MQTT_USER_IOT_PORT
        }

        let ret = 0
        if (connectStart == "connect wifi") {
            ret = Obloq_connect_wifi()
            if (OBLOQ_DEBUG) { basic.showNumber(ret) }
            switch (ret) {
                case OBLOQ_ERROR_TYPE_IS_SUCCE: {
                    basic.showIcon(IconNames.Yes)
                    basic.pause(500)
                    basic.clearScreen()
                    OBLOQ_WIFI_CONNECTED = OBLOQ_BOOL_TYPE_IS_TRUE
                } break
                case OBLOQ_ERROR_TYPE_IS_WIFI_CONNECT_TIMEOUT: {
                    basic.showIcon(IconNames.No)
                    basic.pause(500)
                    OBLOQ_WRONG_TYPE = "wifi connect timeout"
                    return
                } break
                case OBLOQ_ERROR_TYPE_IS_WIFI_CONNECT_FAILURE: {
                    basic.showIcon(IconNames.No)
                    basic.pause(500)
                    OBLOQ_WRONG_TYPE = "wifi connect failure"
                    return
                } break
                case OBLOQ_ERROR_TYPE_IS_ERR: {
                    basic.showNumber(ret)
                    basic.showIcon(IconNames.No)
                    while (OBLOQ_BOOL_TYPE_IS_TRUE) { basic.pause(10000) }
                } break
            }
        }
        if (connectStart == "connect wifi" || connectStart == "connect mqtt") {
            ret = Obloq_connect_iot();
            switch (ret) {
                case OBLOQ_ERROR_TYPE_IS_SUCCE: {
                    basic.showIcon(IconNames.Yes)
                    basic.pause(500)
                    basic.clearScreen()
                } break
                case OBLOQ_ERROR_TYPE_IS_MQTT_SUBTOPIC_TIMEOUT: {
                    basic.showIcon(IconNames.No)
                    basic.pause(500)
                    OBLOQ_WRONG_TYPE = "mqtt subtopic timeout"
                    return
                } break
                case OBLOQ_ERROR_TYPE_IS_MQTT_SUBTOPIC_FAILURE: {
                    basic.showIcon(IconNames.No)
                    basic.pause(500)
                    OBLOQ_WRONG_TYPE = "mqtt subtopic failure"
                    return
                } break
                case OBLOQ_ERROR_TYPE_IS_MQTT_CONNECT_TIMEOUT: {
                    basic.showIcon(IconNames.No)
                    basic.pause(500)
                    OBLOQ_WRONG_TYPE = "mqtt connect timeout"
                    return
                } break
                case OBLOQ_ERROR_TYPE_IS_MQTT_CONNECT_FAILURE: {
                    basic.showIcon(IconNames.No)
                    basic.pause(500)
                    OBLOQ_WRONG_TYPE = "mqtt connect failure"
                    return
                } break
                case OBLOQ_ERROR_TYPE_IS_ERR: {
                    basic.showNumber(ret)
                    basic.showIcon(IconNames.No)
                    while (OBLOQ_BOOL_TYPE_IS_TRUE) { basic.pause(10000) }
                } break
            }
        }
        OBLOQ_MQTT_INIT = OBLOQ_BOOL_TYPE_IS_TRUE
        OBLOQ_WORKING_MODE_IS_STOP = OBLOQ_BOOL_TYPE_IS_FALSE
    }

    basic.forever(() => {
        if (OBLOQ_DEBUG) { led.plot(0, 0) }
        basic.pause(150)
        if ((OBLOQ_WRONG_TYPE == "wifi disconnect") ||
            (OBLOQ_WRONG_TYPE == "wifi connect timeout") ||
            (OBLOQ_WRONG_TYPE == "wifi connect failure") ||
            (OBLOQ_WRONG_TYPE == "mqtt pulish failure") ||
            (OBLOQ_WRONG_TYPE == "mqtt subtopic timeout") ||
            (OBLOQ_WRONG_TYPE == "mqtt subtopic failure") ||
            (OBLOQ_WRONG_TYPE == "mqtt connect timeout") ||
            (OBLOQ_WRONG_TYPE == "mqtt connect failure")) {
            OBLOQ_WORKING_MODE_IS_STOP = OBLOQ_BOOL_TYPE_IS_TRUE
            let type = "wifi"//OBLOQ_WRONG_TYPE.substr(0,4)
            Obloq_mark_reset(type)
            if (OBLOQ_DEBUG) { basic.showString(OBLOQ_WRONG_TYPE) }
            if (OBLOQ_WORKING_MODE_IS_MQTT) {
                if (OBLOQ_MQTT_SERVER = OBLOQ_MQTT_EASY_IOT_SERVER_CHINA) {
                    Obloq_start_connect_mqtt(SERVERS.China, "connect " + type)
                } else if (OBLOQ_MQTT_SERVER = OBLOQ_MQTT_EASY_IOT_SERVER_GLOBAL) {
                    Obloq_start_connect_mqtt(SERVERS.Global, "connect " + type)
                } else {
                    //do nothing
                }
                if (OBLOQ_MQTT_INIT) {
                    OBLOQ_WRONG_TYPE = OBLOQ_STR_TYPE_IS_NONE
                    OBLOQ_WORKING_MODE_IS_STOP = OBLOQ_BOOL_TYPE_IS_FALSE
                }
            }
            if (OBLOQ_WORKING_MODE_IS_HTTP) {
                Obloq_start_connect_http()
                if (OBLOQ_HTTP_INIT) {
                    OBLOQ_WRONG_TYPE = OBLOQ_STR_TYPE_IS_NONE
                    OBLOQ_WORKING_MODE_IS_STOP = OBLOQ_BOOL_TYPE_IS_FALSE
                }
            }

        }
        if (OBLOQ_DEBUG) { led.unplot(0, 0) }
        basic.pause(150)
    })

    /**
     * Two parallel stepper motors are executed simultaneously(DegreeDual).
     * @param SSID to SSID ,eg: "yourSSID"
     * @param PASSWORD to PASSWORD ,eg: "yourPASSWORD"
     * @param IP to IP ,eg: "0.0.0.0"
     * @param PORT to PORT ,eg: 80
     * @param receive to receive ,eg: SerialPin.P1
     * @param send to send ,eg: SerialPin.P2
    */
    //% weight=99
    //% receive.fieldEditor="gridpicker" receive.fieldOptions.columns=3
    //% send.fieldEditor="gridpicker" send.fieldOptions.columns=3
    //% blockId=Obloq_http_setup
    //% block="Obloq setup http | Wi-Fi: | name: %SSID| password: %PASSWORD| http config: | ip: %IP| port: %PORT | start connection"
    export function Obloq_http_setup(/*wifi*/SSID: string, PASSWORD: string,
                                     /*mqtt*/IP: string, PORT: number):
        void {
        OBLOQ_WIFI_SSID = SSID
        OBLOQ_WIFI_PASSWORD = PASSWORD
        OBLOQ_HTTP_IP = IP
        OBLOQ_HTTP_PORT = PORT
        OBLOQ_SERIAL_TX = SerialPin.P14
        OBLOQ_SERIAL_RX = SerialPin.P13
        Obloq_serial_init()
        Obloq_start_connect_http()
    }

    /**
     * Two parallel stepper motors are executed simultaneously(DegreeDual).
     * @param SSID to SSID ,eg: "yourSSID"
     * @param PASSWORD to PASSWORD ,eg: "yourPASSWORD"
     * @param IOT_ID to IOT_ID ,eg: "yourIotId"
     * @param IOT_PWD to IOT_PWD ,eg: "yourIotPwd"
     * @param IOT_TOPIC to IOT_TOPIC ,eg: "yourIotTopic"
     * @param receive to receive ,eg: SerialPin.P1
     * @param send to send ,eg: SerialPin.P2
    */
    //% weight=102
    //% receive.fieldEditor="gridpicker" receive.fieldOptions.columns=3
    //% send.fieldEditor="gridpicker" send.fieldOptions.columns=3
    //% SERVER.fieldEditor="gridpicker" SERVER.fieldOptions.columns=2
    //% blockId=Obloq_mqtt_setup
    //% block="Obloq setup mqtt | Wi-Fi: | name: %SSID| password: %PASSWORD| IoT service: | Iot_id: %IOT_ID| Iot_pwd: %IOT_PWD| (default topic_0) Topic: %IOT_TOPIC | start connection: | Servers: %SERVER"
    export function Obloq_mqtt_setup(/*wifi*/SSID: string, PASSWORD: string,
                                     /*mqtt*/IOT_ID: string, IOT_PWD: string, IOT_TOPIC: string,
                                     /*connect*/SERVER: SERVERS):
        void {
        OBLOQ_WIFI_SSID = SSID
        OBLOQ_WIFI_PASSWORD = PASSWORD
        OBLOQ_MQTT_PWD = IOT_PWD
        OBLOQ_MQTT_ID = IOT_ID
        OBLOQ_MQTT_TOPIC[0][0] = IOT_TOPIC
        OBLOQ_SERIAL_TX = SerialPin.P14
        OBLOQ_SERIAL_RX = SerialPin.P13
        Obloq_serial_init()
        Obloq_start_connect_mqtt(SERVER, "connect wifi")
    }

    /**
     * Disconnect the serial port.
    */
    //% weight=200
    //% blockId=Obloq_mqtt_add_topic
    //% block="subscribe additional %top |: %IOT_TOPIC"
    //% top.fieldEditor="gridpicker" top.fieldOptions.columns=2
    //% advanced=true
    export function Obloq_mqtt_add_topic(top: TOPIC, IOT_TOPIC: string): void {
        OBLOQ_MQTT_TOPIC[top][0] = IOT_TOPIC
        if (!OBLOQ_MQTT_INIT || OBLOQ_WORKING_MODE_IS_STOP) return

        let _timeout = 0
        if (OBLOQ_MQTT_TOPIC[top][0] != "x" && OBLOQ_MQTT_TOPIC[top][1] == "false") {
            Obloq_subTopic(<string>OBLOQ_MQTT_TOPIC[top][0])
        } else {
            return
        }

        while (_timeout < 1000) {
            if (OBLOQ_ANSWER_CMD == "SubOk") {
                OBLOQ_ANSWER_CMD = OBLOQ_STR_TYPE_IS_NONE
                OBLOQ_MQTT_TOPIC[top][1] = "true"
                break
            } else if (OBLOQ_ANSWER_CMD == "SubFailure") {
                OBLOQ_WRONG_TYPE = "mqtt subtopic failure"
                return
            }
            basic.pause(1)
            _timeout += 1
        }
        if (_timeout >= 1000 && OBLOQ_ANSWER_CMD != "SubOk") {
            OBLOQ_WRONG_TYPE = "mqtt subtopic timeout"
        } else {
            OBLOQ_MQTT_TOPIC[top][1] = "true"
        }
    }

    /**
     * Disconnect the serial port.
    */
    /* 
    export function Obloq_serial_quit(): void { 
        obloqWriteString("quit!\r")
    }*/

    /**
     * Send the ping.time(ms): private long maxWait
     * @param time to timeout, eg: 10000
    */
    //% weight=49
    //% blockId=Obloq_send_ping
    //% block="sendPing"
    //% advanced=true
    export function Obloq_send_ping(): boolean {
        while (OBLOQ_WORKING_MODE_IS_STOP) { basic.pause(20) }
        let time = 5000
        if (time < 100) {
            time = 100
        }
        let timeout = time / 100
        let _timeout = 0
        if (!OBLOQ_SERIAL_INIT) {
            Obloq_serial_init()
        }
        obloqWriteString("|1|1|\r")

        while (OBLOQ_BOOL_TYPE_IS_TRUE) {
            if (OBLOQ_ANSWER_CMD == "PingOk") {
                return OBLOQ_BOOL_TYPE_IS_TRUE
            } else if (OBLOQ_ANSWER_CMD == "timeout") {
                return OBLOQ_BOOL_TYPE_IS_FALSE
            }
            basic.pause(100)
            _timeout += 1
            if (_timeout > timeout) {
                if (OBLOQ_ANSWER_CMD != "PingOk") {
                    return OBLOQ_BOOL_TYPE_IS_FALSE
                }
                else {
                    return OBLOQ_BOOL_TYPE_IS_TRUE
                }
            }
        }
        return OBLOQ_BOOL_TYPE_IS_FALSE
    }


    /**
     * Get the software version.time(ms): private long maxWait
     * @param time to timeout, eg: 10000
    */
    //% weight=50
    //% blockId=Obloq_get_version
    //% block="get version"
    //% advanced=true
    export function Obloq_get_version(): string {
        while (OBLOQ_WORKING_MODE_IS_STOP) { basic.pause(20) }
        let time = 5000
        if (time < 100) {
            time = 100
        }
        let timeout = time / 100
        let _timeout = 0
        if (!OBLOQ_SERIAL_INIT) {
            Obloq_serial_init()
        }
        obloqWriteString("|1|2|\r")

        while (OBLOQ_BOOL_TYPE_IS_TRUE) {
            if (OBLOQ_ANSWER_CMD == "GetVersion") {
                return OBLOQ_ANSWER_CONTENT
            } else if (OBLOQ_ANSWER_CMD == "timeout") {
                return "timeout"
            }
            basic.pause(100)
            _timeout += 1
            if (_timeout > timeout) {
                if (OBLOQ_ANSWER_CMD != "GetVersion") {
                    return "timeout"
                }
                else {
                    return OBLOQ_ANSWER_CONTENT
                }
            }
        }
        return OBLOQ_STR_TYPE_IS_NONE
    }


    /**
     * Heartbeat request.time(ms): private long maxWait
     * @param time to timeout, eg: 10000
    */
    //% weight=48
    //% blockId=Obloq_get_heartbeat
    //% block="get heartbeat"
    //% advanced=true
    export function Obloq_get_heartbeat(): boolean {
        while (OBLOQ_WORKING_MODE_IS_STOP) { basic.pause(20) }
        let time = 5000
        if (time < 100) {
            time = 100
        }
        let timeout = time / 100
        let _timeout = 0
        if (!OBLOQ_SERIAL_INIT) {
            Obloq_serial_init()
        }
        obloqWriteString("|1|3|" + time + "|\r")

        while (OBLOQ_BOOL_TYPE_IS_TRUE) {
            if (OBLOQ_ANSWER_CMD == "Heartbeat") {
                return OBLOQ_BOOL_TYPE_IS_TRUE
            } else if (OBLOQ_ANSWER_CMD == "timeout") {
                return OBLOQ_BOOL_TYPE_IS_FALSE
            }
            basic.pause(100)
            _timeout += 1
            if (_timeout > timeout) {
                if (OBLOQ_ANSWER_CMD != "Heartbeat") {
                    return OBLOQ_BOOL_TYPE_IS_FALSE
                }
                else {
                    return OBLOQ_BOOL_TYPE_IS_TRUE
                }
            }
        }
        return OBLOQ_BOOL_TYPE_IS_FALSE
    }

    /**
     * Stop the heartbeat request.
    */
    //% weight=47
    //% blockId=Obloq_stop_heartbeat
    //% block="stop heartbeat"
    //% advanced=true
    export function Obloq_stop_heartbeat(): boolean {
        while (OBLOQ_WORKING_MODE_IS_STOP) { basic.pause(20) }
        let time = 5000
        if (time < 100) {
            time = 100
        }
        let timeout = time / 100
        let _timeout = 0
        if (!OBLOQ_SERIAL_INIT) {
            Obloq_serial_init()
        }
        obloqWriteString("|1|3|-2|\r")

        while (OBLOQ_BOOL_TYPE_IS_TRUE) {
            if (OBLOQ_ANSWER_CMD == "Heartbeat") {
                return OBLOQ_BOOL_TYPE_IS_TRUE
            } else if (OBLOQ_ANSWER_CMD == "timeout") {
                return OBLOQ_BOOL_TYPE_IS_FALSE
            }
            basic.pause(100)
            _timeout += 1
            if (_timeout > timeout) {
                if (OBLOQ_ANSWER_CMD != "Heartbeat") {
                    return OBLOQ_BOOL_TYPE_IS_FALSE
                }
                else {
                    return OBLOQ_BOOL_TYPE_IS_TRUE
                }
            }
        }
        return OBLOQ_BOOL_TYPE_IS_FALSE
    }


    function Obloq_disconnect_wifi(): boolean {
        while (OBLOQ_WORKING_MODE_IS_STOP) { basic.pause(20) }
        let time = 5000
        if (time < 100) {
            time = 100
        }
        let timeout = time / 100
        let _timeout = 0
        if (!OBLOQ_SERIAL_INIT) {
            Obloq_serial_init()
        }
        obloqWriteString("|2|2|\r")

        while (OBLOQ_BOOL_TYPE_IS_TRUE) {
            if (OBLOQ_ANSWER_CMD == "WifiDisconnect") {
                Obloq_mark_reset("wifi")
                return OBLOQ_BOOL_TYPE_IS_TRUE
            } else if (OBLOQ_ANSWER_CMD == "timeout") {
                return OBLOQ_BOOL_TYPE_IS_FALSE
            }
            basic.pause(100)
            _timeout += 1
            if (_timeout > timeout) {
                if (OBLOQ_ANSWER_CMD != "WifiDisconnect") {
                    return OBLOQ_BOOL_TYPE_IS_FALSE
                }
                else {
                    return OBLOQ_BOOL_TYPE_IS_TRUE
                }
            }
        }
        return OBLOQ_BOOL_TYPE_IS_FALSE
    }


    /**
     * Reconnect WiFi.time(ms): private long maxWait
     * @param time to timeout, eg: 10000
    */
    /* 
    export function Obloq_wifi_reconnect(): boolean {
        while (OBLOQ_WORKING_MODE_IS_STOP) { basic.pause(20) }
        let time = 10000
        if (time < 100) { 
            time = 100
        }
        let timeout = time / 100
        let _timeout = 0
        if (!OBLOQ_SERIAL_INIT) { 
            Obloq_serial_init()
        }
        obloqWriteString("|2|3|\r")

        while (OBLOQ_BOOL_TYPE_IS_TRUE) {
            if (OBLOQ_ANSWER_CMD == "WifiConnected") { 
                OBLOQ_WIFI_IP = OBLOQ_ANSWER_CONTENT
                OBLOQ_WIFI_CONNECT_FIRST = OBLOQ_BOOL_TYPE_IS_FALSE
                OBLOQ_WIFI_CONNECTED = OBLOQ_BOOL_TYPE_IS_TRUE
                return OBLOQ_BOOL_TYPE_IS_TRUE
            }
            basic.pause(100)
            _timeout += 1
            if (_timeout > timeout) {
                if (OBLOQ_ANSWER_CMD != "WifiConnected") { 
                    return OBLOQ_BOOL_TYPE_IS_FALSE
                }
                else { 
                    OBLOQ_WIFI_IP = OBLOQ_ANSWER_CONTENT
                    OBLOQ_WIFI_CONNECT_FIRST = OBLOQ_BOOL_TYPE_IS_FALSE
                    OBLOQ_WIFI_CONNECTED = OBLOQ_BOOL_TYPE_IS_TRUE
                    return OBLOQ_BOOL_TYPE_IS_TRUE
                }
            }
        }
        return OBLOQ_BOOL_TYPE_IS_FALSE
    }*/

    /**
     * pin set
     * @param receive to receive ,eg: SerialPin.P1
     * @param send to send ,eg: SerialPin.P2
    */
    /* 
    export function Obloq_serial_pin_set(receive: SerialPin, send: SerialPin): void { 
        while (OBLOQ_WORKING_MODE_IS_STOP) { basic.pause(20) }
        OBLOQ_SERIAL_TX = send
        OBLOQ_SERIAL_RX = receive
        Obloq_serial_init()
    }*/

    /**
     * connect Wifi.SSID(string):account; PWD(string):password;
     * @param SSID to SSID ,eg: "yourSSID"
     * @param PASSWORD to PASSWORD ,eg: "yourPASSWORD"
    */
    /* 
    //% weight=100
    //% blockId=Obloq_wifi_connect_export
    //% block="wifi connect to| SSID %SSID| PASSWORD %PASSWORD"
    //% advanced=true
    export function Obloq_wifi_connect_export(SSID: string, PASSWORD: string): void { 
        while (OBLOQ_WORKING_MODE_IS_STOP) { basic.pause(20) }
        OBLOQ_WIFI_SSID = SSID
        OBLOQ_WIFI_PASSWORD = PASSWORD
        Obloq_connect_wifi()
    }*/

    function Obloq_connect_wifi(): number {
        if (OBLOQ_WIFI_CONNECTED == OBLOQ_BOOL_TYPE_IS_TRUE) {
            return OBLOQ_ERROR_TYPE_IS_SUCCE
        }

        OBLOQ_WIFI_ICON = 1
        let timeout = 10000  //Set the default timeout period 10s.
        timeout = timeout < 100 ? 100 : timeout //Timeout minimum resolution 100ms

        let timeout_count_max = timeout / 100
        let timeout_count_now = 0
        if (OBLOQ_WIFI_CONNECT_FIRST) {
            //serial init
            if (!OBLOQ_SERIAL_INIT) {
                Obloq_serial_init()
            }
            //show icon
            Obloq_wifi_icon_display()
            for (let i = 0; i < 3; i++) {
                obloqWriteString("|1|1|\r")
                basic.pause(100)
            }
            obloqWriteString("|2|1|" + OBLOQ_WIFI_SSID + "," + OBLOQ_WIFI_PASSWORD + "|\r") //Send wifi account and password instructions
            OBLOQ_WIFI_CONNECT_FIRST = OBLOQ_BOOL_TYPE_IS_FALSE
        }

        while (OBLOQ_BOOL_TYPE_IS_TRUE) {
            if ((timeout_count_now + 1) % 3 == 0) {
                Obloq_wifi_icon_display()
            }
            if (OBLOQ_ANSWER_CMD == "WifiConnected") {
                OBLOQ_WIFI_IP = OBLOQ_ANSWER_CONTENT
                return OBLOQ_ERROR_TYPE_IS_SUCCE
            } else if (OBLOQ_ANSWER_CMD == "WifiConnectFailure") {
                return OBLOQ_ERROR_TYPE_IS_WIFI_CONNECT_FAILURE
            }
            basic.pause(100)
            timeout_count_now += 1
            if (timeout_count_now > timeout_count_max) {
                //basic.showIcon(IconNames.No)
                return OBLOQ_ERROR_TYPE_IS_WIFI_CONNECT_TIMEOUT
            }
        }
        return OBLOQ_ERROR_TYPE_IS_ERR
    }

    /**
     * Get IP address.
    */
    //% weight=98
    //% blockId=Obloq_Obloq_ifconfig
    //% block="ipconfig"
    //% advanced=true
    export function Obloq_wifi_ipconfig(): string {
        while (OBLOQ_WORKING_MODE_IS_STOP) { basic.pause(20) }
        return OBLOQ_WIFI_IP
    }


    function Obloq_http_wait_request(time: number): string {
        if (time < 100) {
            time = 100
        }
        let timeout = time / 100
        let _timeout = 0

        while (OBLOQ_BOOL_TYPE_IS_TRUE) {
            basic.pause(100)
            if (OBLOQ_ANSWER_CMD == "200") {//http请求成功
                return OBLOQ_ANSWER_CONTENT //返回消息
            } else if (OBLOQ_ANSWER_CMD == "-1") {//获取数据失败
                Obloq_http_wrong_animation("requestFailed")
                return OBLOQ_STR_TYPE_IS_NONE
            } else if (OBLOQ_ANSWER_CMD == "1") {//http请求字段错误
                Obloq_http_wrong_animation("requestFailed")
                return OBLOQ_STR_TYPE_IS_NONE
            }

            _timeout += 1
            if (_timeout > timeout) {
                Obloq_http_wrong_animation("timeOut")
                return OBLOQ_STR_TYPE_IS_NONE
            }
        }

        return OBLOQ_STR_TYPE_IS_NONE
    }

    function Obloq_http_wrong_animation(wrongType: string): void {
        if (wrongType == "requestFailed") {  //http 请求失败或者字段错误动画
            basic.showIcon(IconNames.No, 10)
            basic.pause(500)
            for (let i = 0; i < 3; i++) {
                basic.clearScreen()
                basic.pause(100)
                basic.showIcon(IconNames.No, 10)
                basic.pause(50)
            }
        } else if (wrongType == "timeOut") { //http 请求超时动画
            basic.showLeds(`
                . . # . .
                . . # . .
                . . # . .
                . . . . .
                . . # . .
                `, 10)
            basic.pause(500)
            for (let i = 0; i < 3; i++) {
                basic.clearScreen()
                basic.pause(100)
                basic.showLeds(`
                    . . # . .
                    . . # . .
                    . . # . .
                    . . . . .
                    . . # . .
                    `, 10)
                basic.pause(50)
            }
        }
        basic.pause(150)
        basic.clearScreen()
    }

    /**
     * The HTTP get request.url(string):URL:time(ms): private long maxWait
     * @param time set timeout, eg: 10000
    */
    //% weight=79
    //% blockId=Obloq_http_get
    //% block="http(get) | url %url| timeout(ms) %time"
    //% advanced=false
    export function Obloq_http_get(url: string, time: number): string {
        while (OBLOQ_WORKING_MODE_IS_STOP) { basic.pause(20) }
        if (!OBLOQ_HTTP_INIT)
            return OBLOQ_STR_TYPE_IS_NONE

        if (!OBLOQ_SERIAL_INIT) {
            Obloq_serial_init()
        }
        obloqWriteString("|3|1|http://" + OBLOQ_HTTP_IP + ":" + OBLOQ_HTTP_PORT + "/" + url + "|\r")

        return Obloq_http_wait_request(time)
    }

    /**
     * The HTTP post request.url(string): URL; content(string):content
     * time(ms): private long maxWait
     * @param time set timeout, eg: 10000
    */
    //% weight=78
    //% blockId=Obloq_http_post
    //% block="http(post) | url %url| content %content| timeout(ms) %time"
    export function Obloq_http_post(url: string, content: string, time: number): string {
        while (OBLOQ_WORKING_MODE_IS_STOP) { basic.pause(20) }
        if (!OBLOQ_HTTP_INIT)
            return OBLOQ_STR_TYPE_IS_NONE

        if (!OBLOQ_SERIAL_INIT) {
            Obloq_serial_init()
        }
        obloqWriteString("|3|2|http://" + OBLOQ_HTTP_IP + ":" + OBLOQ_HTTP_PORT + "/" + url + "," + content + "|\r")

        return Obloq_http_wait_request(time)
    }


    /**
     * The HTTP put request,Obloq.put() can only be used for http protocol!
     * url(string): URL; content(string):content; time(ms): private long maxWait
     * @param time set timeout, eg: 10000
    */
    //% weight=77
    //% blockId=Obloq_http_put
    //% block="http(put) | url %url| content %content| timeout(ms) %time"
    export function Obloq_http_put(url: string, content: string, time: number): string {
        while (OBLOQ_WORKING_MODE_IS_STOP) { basic.pause(20) }
        if (!OBLOQ_HTTP_INIT)
            return OBLOQ_STR_TYPE_IS_NONE

        if (!OBLOQ_SERIAL_INIT) {
            Obloq_serial_init()
        }
        obloqWriteString("|3|3|http://" + OBLOQ_HTTP_IP + ":" + OBLOQ_HTTP_PORT + "/" + url + "," + content + "|\r")

        return Obloq_http_wait_request(time)
    }




    /**
     * Delete an HTTP connection.url(string): URL; content(string):content
     * time(ms): private long maxWait
     * @param time set timeout, eg: 10000
    */
    /* 
    export function Obloq_httpDelete(url: string, content: string, time: number): string[] {
        if (time < 100) { 
            time = 100
        }
        let timeout = time / 100
        let _timeout = 0
        if (!OBLOQ_SERIAL_INIT) { 
            Obloq_serial_init()
        }
        obloqWriteString("|3|4|http://"+myip+":"+myport+"/"+url+","+content+"|\r")
        let item = OBLOQ_STR_TYPE_IS_NONE
        let num = 0
        let j = 0
        while (OBLOQ_BOOL_TYPE_IS_TRUE) {
            if (e == "200") {
                let list = ["200", param]
                return list
            } else if (e == "err") {
                let list = ["err", param]
                return list
            } else if (e == "|2|1|") {
                let list = ["999", "disconnet wifi"]
                return list
            }
            basic.pause(100)
            _timeout += 1
            if (_timeout > timeout) { 
                let list = ["408", "time out"]
                return list
            }
        }
        let list = ["408", "time out"]
        return list
    }*/

    function Obloq_connect_mqtt(): void {
        if (!OBLOQ_SERIAL_INIT) {
            Obloq_serial_init()
        }
        obloqWriteString("|4|1|1|" + OBLOQ_MQTT_SERVER + "|" + OBLOQ_MQTT_PORT + "|" + OBLOQ_MQTT_ID + "|" + OBLOQ_MQTT_PWD + "|\r")
    }


    function Obloq_connect_iot(): number {
        OBLOQ_MQTT_ICON = 1
        let iconnum = 0
        let _timeout = 0
        let __timeout = 0

        Obloq_connect_mqtt()

        while (_timeout < 1000) {
            if (_timeout % 50 == 0) {
                Obloq_mqtt_icon_display()
                iconnum += 1;
            }
            if (OBLOQ_ANSWER_CMD == "MqttConneted") {
                break
            } else if (OBLOQ_ANSWER_CMD == "MqttConnectFailure") {
                return OBLOQ_ERROR_TYPE_IS_MQTT_CONNECT_FAILURE
            }
            basic.pause(1)
            _timeout += 1

        }
        if (_timeout >= 1000 && OBLOQ_ANSWER_CMD != "MqttConneted") {
            return OBLOQ_ERROR_TYPE_IS_MQTT_CONNECT_TIMEOUT
        }
        for (let i = 0; i < OBLOQ_MQTT_TOPIC_NUM_MAX; i++) {
            if (OBLOQ_MQTT_TOPIC[i][0] != "x" && OBLOQ_MQTT_TOPIC[i][1] == "false") {
                Obloq_subTopic(<string>OBLOQ_MQTT_TOPIC[i][0])
            } else {
                continue
            }
            __timeout = _timeout + 2000
            while (_timeout < __timeout) {
                if (_timeout % 50 == 0) {
                    Obloq_mqtt_icon_display()
                    iconnum += 1
                }
                if (iconnum > 3) {//动画一次以上
                    if (OBLOQ_ANSWER_CMD == "SubOk") {
                        OBLOQ_MQTT_TOPIC[i][1] = "true";
                        OBLOQ_ANSWER_CMD = OBLOQ_STR_TYPE_IS_NONE
                        break
                    } else if (OBLOQ_ANSWER_CMD == "SubFailure") {
                        return OBLOQ_ERROR_TYPE_IS_MQTT_SUBTOPIC_FAILURE
                    }
                }
                basic.pause(1)
                _timeout += 1
            }
            if (_timeout >= __timeout) {
                if (OBLOQ_ANSWER_CMD != "SubOk") {
                    OBLOQ_ANSWER_CMD = OBLOQ_STR_TYPE_IS_NONE
                    return OBLOQ_ERROR_TYPE_IS_MQTT_SUBTOPIC_TIMEOUT
                } else {
                    OBLOQ_MQTT_TOPIC[i][1] = "true";
                    OBLOQ_ANSWER_CMD = OBLOQ_STR_TYPE_IS_NONE
                }
            }
        }
        return OBLOQ_ERROR_TYPE_IS_SUCCE
        //basic.showString("ok")
    }

    /**
     * Reconnect the MQTT.
    */
    /* 
    export function Obloq_mqtt_reconnect(): boolean {
        while (OBLOQ_WORKING_MODE_IS_STOP) { basic.pause(20) }
        let time = 10000
        if (time < 100) { 
            time = 100
        }
        let timeout = time / 100
        let _timeout = 0
        if (!OBLOQ_SERIAL_INIT) { 
            Obloq_serial_init()
        }
        obloqWriteString("|4|1|5|\r")

        while (OBLOQ_BOOL_TYPE_IS_TRUE) {
            if (OBLOQ_ANSWER_CMD == "MqttConneted") {
                OBLOQ_MQTT_INIT = OBLOQ_BOOL_TYPE_IS_TRUE
                return OBLOQ_BOOL_TYPE_IS_TRUE
            } else if (OBLOQ_ANSWER_CMD == "MqttConnectFailure") { 
                return OBLOQ_BOOL_TYPE_IS_FALSE
            }
            basic.pause(100)
            _timeout += 1
            if (_timeout > timeout) {
                if (OBLOQ_ANSWER_CMD != "MqttConneted") { 
                    return OBLOQ_BOOL_TYPE_IS_FALSE
                }
                else { 
                    OBLOQ_MQTT_INIT = OBLOQ_BOOL_TYPE_IS_TRUE
                    return OBLOQ_BOOL_TYPE_IS_TRUE
                }
            }
        }
        return OBLOQ_BOOL_TYPE_IS_FALSE
    }  */

    /**
     * Disconnect the MQTT connection.
    */
    /* 
    export function Obloq_mqtt_disconnect(): boolean { 
        while (OBLOQ_WORKING_MODE_IS_STOP) { basic.pause(20) }
        let time = 10000
        if (time < 100) { 
            time = 100
        }
        let timeout = time / 100
        let _timeout = 0
        if (!OBLOQ_SERIAL_INIT) { 
            Obloq_serial_init()
        }
        obloqWriteString("|4|1|4|\r")

        while (OBLOQ_BOOL_TYPE_IS_TRUE) {
            if (OBLOQ_ANSWER_CMD == "MqttDisconnected") {
                OBLOQ_MQTT_INIT = OBLOQ_BOOL_TYPE_IS_FALSE
                return OBLOQ_BOOL_TYPE_IS_TRUE
            } else if (OBLOQ_ANSWER_CMD == "MqttDisconnectFailure") { 
                return OBLOQ_BOOL_TYPE_IS_FALSE
            }
            basic.pause(100)
            _timeout += 1
            if (_timeout > timeout) {
                if (OBLOQ_ANSWER_CMD != "MqttDisconnected") { 
                    return OBLOQ_BOOL_TYPE_IS_FALSE
                }
                else { 
                    OBLOQ_MQTT_INIT = OBLOQ_BOOL_TYPE_IS_FALSE
                    return OBLOQ_BOOL_TYPE_IS_TRUE
                }
            }
        }
        return OBLOQ_BOOL_TYPE_IS_FALSE
    }   */

    /**
     * Send a message.
     * @param top set top, eg: top
     * @param mess set mess, eg: mess
    */
    //% weight=101
    //% blockId=Obloq_mqtt_send_message
    //% block="pubLish %mess |to topic_0"
    export function Obloq_mqtt_send_message(mess: string): void {
        while (OBLOQ_WORKING_MODE_IS_STOP) { basic.pause(20) }
        if (!OBLOQ_MQTT_INIT) {
            return
        }
        if (!OBLOQ_SERIAL_INIT) {
            Obloq_serial_init()
        }
        obloqWriteString("|4|1|3|" + OBLOQ_MQTT_TOPIC[0][0] + "|" + mess + "|\r")
    }

    /**
     * Send a message.
     * @param top set top, eg: top
     * @param mess set mess, eg: mess
    */
    //% weight=190
    //% blockId=Obloq_mqtt_send_message_more
    //% block="pubLish %mess |to %top"
    //% top.fieldEditor="gridpicker" top.fieldOptions.columns=2
    //% advanced=true
    export function Obloq_mqtt_send_message_more(mess: string, top: TOPIC): void {
        while (OBLOQ_WORKING_MODE_IS_STOP) { basic.pause(20) }
        if (!OBLOQ_MQTT_INIT) {
            return
        }
        if (!OBLOQ_SERIAL_INIT) {
            Obloq_serial_init()
        }
        switch (top) {
            case TOPIC.topic_1: obloqWriteString("|4|1|3|" + OBLOQ_MQTT_TOPIC[1][0] + "|" + mess + "|\r"); break;
            case TOPIC.topic_2: obloqWriteString("|4|1|3|" + OBLOQ_MQTT_TOPIC[2][0] + "|" + mess + "|\r"); break;
            case TOPIC.topic_3: obloqWriteString("|4|1|3|" + OBLOQ_MQTT_TOPIC[3][0] + "|" + mess + "|\r"); break;
            case TOPIC.topic_4: obloqWriteString("|4|1|3|" + OBLOQ_MQTT_TOPIC[4][0] + "|" + mess + "|\r"); break;
        }
    }

    /**
     * Subscribe to a Topic
     * @param top set top, eg: top
    */
    //% weight=67
    //% blockId=Obloq_subTopic
    //% advanced=true
    function Obloq_subTopic(topic: string): void {
        if (!OBLOQ_SERIAL_INIT) {
            Obloq_serial_init()
        }
        obloqWriteString("|4|1|2|" + topic + "|\r")
    }

    function Obloq_mqtt_callback_more(top: TOPIC, a: Action): void {
        switch (top) {
            case TOPIC.topic_1: OBLOQ_MQTT_CB[1] = a; break;
            case TOPIC.topic_2: OBLOQ_MQTT_CB[2] = a; break;
            case TOPIC.topic_3: OBLOQ_MQTT_CB[3] = a; break;
            case TOPIC.topic_4: OBLOQ_MQTT_CB[4] = a; break;
        }
    }

    function Obloq_mqtt_callback(a: Action): void {
        OBLOQ_MQTT_CB[0] = a
    }


    /**
     * This is an MQTT listener callback function, which is very important.
     * The specific use method can refer to "example/ObloqMqtt.ts"
    */
    //% weight=100
    //% blockGap=50
    //% blockId=obloq_mqtt_callback_user block="on topic_0 received"
    //% useLoc="Obloq.Obloq_mqtt_callback_user"
    export function Obloq_mqtt_callback_user(cb: (message: string) => void): void {
        Obloq_mqtt_callback(() => {
            const packet = new PacketaMqtt()
            packet.message = OBLOQ_ANSWER_CONTENT
            cb(packet.message)
        });
    }

    /**
     * This is an MQTT listener callback function, which is very important.
     * The specific use method can refer to "example/ObloqMqtt.ts"
    */
    //% weight=180
    //% blockGap=60
    //% blockId=obloq_mqtt_callback_user_more block="on %top |received"
    //% top.fieldEditor="gridpicker" top.fieldOptions.columns=2
    //% useLoc="Obloq.Obloq_mqtt_callback_user_more"
    //% advanced=true
    export function Obloq_mqtt_callback_user_more(top: TOPIC, cb: (message: string) => void) {
        Obloq_mqtt_callback_more(top, () => {
            const packet = new PacketaMqtt()
            packet.message = OBLOQ_ANSWER_CONTENT
            cb(packet.message)
        });
    }


    function Obloq_serial_recevice(): void {

        let Obloq_message_str = serial.readString()
        let size = Obloq_message_str.length
        let item = Obloq_message_str

        if (item.indexOf("|4|1|1|1|", 0) != -1) {
            OBLOQ_ANSWER_CMD = "MqttConneted"
            OBLOQ_ANSWER_CONTENT = OBLOQ_STR_TYPE_IS_NONE
            return
        } else if (item.indexOf("|4|1|1|2|", 0) != -1) {
            OBLOQ_ANSWER_CMD = "MqttConnectFailure"
            OBLOQ_ANSWER_CONTENT = item.substr(9, size - 2 - 9)
            return
        } else if (item.indexOf("|4|1|2|1|", 0) != -1) {
            OBLOQ_ANSWER_CMD = "SubOk"
            OBLOQ_ANSWER_CONTENT = OBLOQ_STR_TYPE_IS_NONE
            return
        } else if (item.indexOf("|4|1|2|2|1|", 0) != -1) {
            OBLOQ_ANSWER_CMD = "SubCeiling"
            OBLOQ_ANSWER_CONTENT = OBLOQ_STR_TYPE_IS_NONE
            return
        } else if (item.indexOf("|4|1|2|2|2|", 0) != -1) {
            OBLOQ_ANSWER_CMD = "SubFailure"
            OBLOQ_ANSWER_CONTENT = OBLOQ_STR_TYPE_IS_NONE
            return
        } else if (item.indexOf("|4|1|3|1|", 0) != -1) {
            OBLOQ_ANSWER_CMD = "PulishOk"
            OBLOQ_ANSWER_CONTENT = OBLOQ_STR_TYPE_IS_NONE
            return
        } else if (item.indexOf("|4|1|3|2|", 0) != -1) {
            OBLOQ_ANSWER_CMD = "PulishFailure"
            OBLOQ_ANSWER_CONTENT = OBLOQ_STR_TYPE_IS_NONE
            OBLOQ_WRONG_TYPE = "mqtt pulish failure"
            return
        } else if (item.indexOf("|4|1|4|1|", 0) != -1) {
            OBLOQ_ANSWER_CMD = "MqttDisconnected"
            OBLOQ_ANSWER_CONTENT = OBLOQ_STR_TYPE_IS_NONE
            return
        } else if (item.indexOf("|4|1|4|2|", 0) != -1) {
            OBLOQ_ANSWER_CMD = "MqttDisconnectFailure"
            OBLOQ_ANSWER_CONTENT = OBLOQ_STR_TYPE_IS_NONE
            return
        } else if (item.indexOf("|4|1|5|") != -1) {//|4|1|5|topic|message|
            let str = item.substr(7, size - 2 - 7)
            let num = str.indexOf("|")
            OBLOQ_ANSWER_CMD = str.substr(0, num)
            OBLOQ_ANSWER_CONTENT = str.substr(num + 1, str.length - OBLOQ_ANSWER_CMD.length - 1)
            switch (OBLOQ_ANSWER_CMD) {
                case OBLOQ_MQTT_TOPIC[0][0]: { if (OBLOQ_MQTT_CB[0] != null) obloqforevers(OBLOQ_MQTT_CB[0]); } break;
                case OBLOQ_MQTT_TOPIC[1][0]: { if (OBLOQ_MQTT_CB[1] != null) obloqforevers(OBLOQ_MQTT_CB[1]); } break;
                case OBLOQ_MQTT_TOPIC[2][0]: { if (OBLOQ_MQTT_CB[2] != null) obloqforevers(OBLOQ_MQTT_CB[2]); } break;
                case OBLOQ_MQTT_TOPIC[3][0]: { if (OBLOQ_MQTT_CB[3] != null) obloqforevers(OBLOQ_MQTT_CB[3]); } break;
                case OBLOQ_MQTT_TOPIC[4][0]: { if (OBLOQ_MQTT_CB[4] != null) obloqforevers(OBLOQ_MQTT_CB[4]); } break;
            }
            return
        } else if (item.indexOf("|4|1|6|1|", 0) != -1) {
            OBLOQ_ANSWER_CMD = "UnSubOk"
            OBLOQ_ANSWER_CONTENT = OBLOQ_STR_TYPE_IS_NONE
            return
        } else if (item.indexOf("|4|1|6|2|1|", 0) != -1) {
            OBLOQ_ANSWER_CMD = "UnSubFailure"
            OBLOQ_ANSWER_CONTENT = OBLOQ_STR_TYPE_IS_NONE
            return
        } else if (item.indexOf("|4|1|6|2|2|", 0) != -1) {
            OBLOQ_ANSWER_CMD = "UnSubFailure"
            OBLOQ_ANSWER_CONTENT = OBLOQ_STR_TYPE_IS_NONE
            return
        } else if (item.indexOf("|1|1|", 0) != -1) {
            OBLOQ_ANSWER_CMD = "PingOk"
            OBLOQ_ANSWER_CONTENT = OBLOQ_STR_TYPE_IS_NONE
            return
        } else if (item.indexOf("|1|2|", 0) != -1) {
            OBLOQ_ANSWER_CMD = "GetVersion"
            OBLOQ_ANSWER_CONTENT = item.substr(5, size - 2 - 5)//version
            return
        } else if (item.indexOf("|1|3|", 0) != -1) {
            if (OBLOQ_MQTT_INIT) {
                OBLOQ_ANSWER_CMD = "Heartbeat"
                OBLOQ_ANSWER_CONTENT = "OK"
            }
            return
        } else if (item.indexOf("|2|1|", 0) != -1) {
            OBLOQ_ANSWER_CMD = "WifiDisconnect"
            OBLOQ_ANSWER_CONTENT = OBLOQ_STR_TYPE_IS_NONE
            if (OBLOQ_MQTT_INIT || OBLOQ_HTTP_INIT || OBLOQ_WIFI_CONNECTED) {
                OBLOQ_WRONG_TYPE = "wifi disconnect"
            }
            return
        } else if (item.indexOf("|2|2|", 0) != -1) {
            OBLOQ_ANSWER_CMD = "WifiConnecting"
            OBLOQ_ANSWER_CONTENT = OBLOQ_STR_TYPE_IS_NONE
            return
        } else if (item.indexOf("|2|3|", 0) != -1) {
            OBLOQ_ANSWER_CMD = "WifiConnected"
            OBLOQ_ANSWER_CONTENT = item.substr(5, size - 2 - 5)//IP addr
            return
        } else if (item.indexOf("|2|4|", 0) != -1) {
            OBLOQ_ANSWER_CMD = "WifiConnectFailure"
            OBLOQ_ANSWER_CONTENT = OBLOQ_STR_TYPE_IS_NONE
            return
        } else if (item.indexOf("|3|", 0) != -1) {//|3|errcode|message|
            let str = item.substr(3, size - 2 - 3)
            let num = str.indexOf("|")
            OBLOQ_ANSWER_CMD = str.substr(0, num)
            OBLOQ_ANSWER_CONTENT = str.substr(num + 1, str.length - OBLOQ_ANSWER_CMD.length - 1)
            return
        } else {
            return
        }
    }

    function onEvent() {
        if (!OBLOQ_SERIAL_INIT) {
            Obloq_serial_init()
        }
        OBLOQ_MQTT_EVENT = OBLOQ_BOOL_TYPE_IS_TRUE
        obloqEventOn()
        control.onEvent(<number>32, <number>1, Obloq_serial_recevice); // register handler
    }

    //IIC function
    function writeCmd(cmd: number): void {
        let buff = pins.createBuffer(2);
        buff[0] = 0;
        buff[1] = cmd;
        pins.i2cWriteBuffer(ssd1306_i2c_address, buff);
    }

    //IIC function
    function writeDatBytes(address: number, buf: Buffer, count: number): void {
        let j = 1;
        let _buff = pins.createBuffer(count + 1);
        _buff[0] = 0x40; // Data Mode
        for (let i = 0; i < count;) {
            _buff[j] = buf[i];
            i += 1;
            j += 1;
        }
        pins.i2cWriteBuffer(ssd1306_i2c_address, _buff);
    }

    function writeDatBytes_matrixBuffer(address: number, pBuf: Buffer, offset: number, writeWidth: number): void {
        let _buff = pins.createBuffer(writeWidth + 1);
        _buff[0] = 0x40; // Data Mode
        for (let i = 0; i < writeWidth; i++) {
            _buff[i + 1] = pBuf[offset + i]
        }
        pins.i2cWriteBuffer(ssd1306_i2c_address, _buff);
    }


    function showMatrix(x: number, y: number, width: number, height: number, pBuf: Buffer): void {

        if (!pBuf) return;
        if (x > 127 || y > 63) return;
        if (height % 8 != 0) return;
        let i = 0, j = 0, k = 0;
        let _x = 0;
        let _y = 0;
        let widthSize = width / 8;
        let heightSize = height / 8;
        let writeWidth = width;
        let matrixSize = width * height / 8;
        let matrixBuffer = pins.createBuffer(matrixSize);

        matrixBuffer.fill(0);
        //memset(matrixBuffer, 0, matrixSize);

        let bufferAddr = 0;
        let z = 0;
        for (i = 0; i < height; i++) {
            if (_y > 63) break;
            for (j = 0; j < widthSize; j++) {
                let data = pBuf[z];
                for (k = 0; k < 8; k++) {

                    if (_x > 127) break;
                    bufferAddr = _x + Math.floor((_y / 8)) * width;
                    let dataBuffer = matrixBuffer[bufferAddr]
                    if (data & 0x80) {
                        dataBuffer |= (0x01 << (_y % 8));
                    }
                    else {
                        dataBuffer &= ~(0x01 << (_y % 8));
                    }
                    matrixBuffer[bufferAddr] = dataBuffer;
                    data <<= 1;
                    _x++;
                }
            }
            z++;
            _x = 0;
            _y++;
        }
        _x = x, _y = y;

        for (i = 0; i < heightSize; i++) {
            writeCmd(SSD1306_COLUMNADDR);
            writeCmd(_x);
            writeCmd(_x + width - 1);
            writeCmd(SSD1306_PAGEADDR);
            writeCmd((_y + i * 8) / 8);
            writeCmd((_y + i * 8 + 8) / 8);
            writeDatBytes_matrixBuffer(ssd1306_i2c_address, matrixBuffer, i * width, writeWidth);
        }

    }




    function fillScreen(color: number): void {
        let i = 0;
        let buf = pins.createBuffer(16);
        if (color) {
            color = 0xff;
            for (i = 0; i < 16; i++) {
                buf[i] = 0xff;
            }
        }
        writeCmd(SSD1306_COLUMNADDR);
        writeCmd(0x0);
        writeCmd(0x7f);
        writeCmd(SSD1306_PAGEADDR);
        writeCmd(0x0);
        writeCmd(0x7);
        for (i = 0; i < 128 * 64 / 8 / 16; i++) {
            writeDatBytes(ssd1306_i2c_address, buf, 16);
        }
    }

    function OLED_begin() {
        //config
        writeCmd(SSD1306_DISPLAYOFF);
        writeCmd(SSD1306_SETDISPLAYCLOCKDIV);
        writeCmd(0xF0);//Increase speed of the display max ~96Hz
        writeCmd(SSD1306_SETMULTIPLEX);
        writeCmd(0x3F);
        writeCmd(SSD1306_SETDISPLAYOFFSET);
        writeCmd(0x00);
        writeCmd(SSD1306_SETSTARTLINE);
        writeCmd(SSD1306_CHARGEPUMP);
        writeCmd(0x14);
        writeCmd(SSD1306_MEMORYMODE);
        writeCmd(0x00);
        writeCmd(SSD1306_SEGREMAP);
        writeCmd(SSD1306_COMSCANINC);
        writeCmd(SSD1306_SETCOMPINS);
        writeCmd(0x12);
        writeCmd(SSD1306_SETCONTRAST);
        writeCmd(0xCF);
        writeCmd(SSD1306_SETPRECHARGE);
        writeCmd(0xF1);
        writeCmd(SSD1306_DISPLAYALLON_RESUME);
        writeCmd(SSD1306_NORMALDISPLAY);
        writeCmd(0x2e);// stop scroll
        writeCmd(SSD1306_DISPLAYON);
        //setRotaion(eROTATION_180);
        writeCmd(0xa1);
        writeCmd(0xc8);

        fillScreen(0);
        return BEGIN_WAR_NOTEST;
    }

    function setTextColor(color: number): void {
        textColor = color;
    }

    function setCursorXY(x: number, y: number): void {
        if (x > 127) {
            printfX = 127;
        } else {
            printfX = x;
        }
        if (y > 63) {
            printfY = 63;
        } else {
            printfY = y;
        }
    }

    function print(text: string): void {
        let _count = 0;
        while (text[_count]) {
            serial.writeLine(text[_count])
            let ascii = text.charCodeAt(_count) - 32
            let date = pins.createBuffer(16);

            if (printfX >= 128) {
                printfY += 16;
                printfX = 0;
            }

            if (printfY > 64)
                return;

            let i = 0
            for (; i < 16; i++) {
                date[i] = ascii_8_16[ascii][i];
            }
            showMatrix(printfX, printfY, 8, 16, date);
            printfX += 8;
            let c = (128 - printfX) % 8;
            let t = (128 - printfX) / 8;
            if (t == 0 && c != 0) {
                printfX += c;
            }
            _count++;
        }
    }

    function setCursor(x: number, y: number) {
        if (x > 127) {
            printfX = 127;
        } else {
            printfX = x;
        }
        y = 16 * y;
        if (y >= 0 && y < 16)
            printfY = 0;
        else if (y >= 16 && y < 32)
            printfY = 16;
        else if (y >= 32 && y < 48)
            printfY = 32;
        else if (y >= 48 && y < 64)
            printfY = 48;
        else if (y >= 64)
            printfY = 48;
        else
            printfY = 0;
    }



    /**
     * clears the screen.
    */
    //% weight=20
    //% blockId=OLED_init
    //% block="init OLED Screen"
    //% async
    export function OLED_init(): void {
        OLED_begin();
    }

    /**
     * clears the screen.
     */
    //% weight=20
    //% blockId=OLED_clear
    //% block="clear OLED display"
    //% async
    export function OLED_clear(): void {
        fillScreen(0);
    }

    /**
     * line prints a string on the OLED display
     */
    //% weight=92 blockGap=8
    //% block="show by line| %line | string | %text"
    //% line.fieldEditor="gridpicker" line.fieldOptions.columns=2
    //% blockId=showByLine
    //% async
    export function showByLine(line: LINE, text: string): void {
        setTextColor(1);
        printfX = 0;
        setCursor(0, line);
        print(text);
    }

    /**
     * Coordinate printing a string on the OLED display
     */
    //% weight=95 blockGap=8
    //% block="show By x| %x | y| %y | string | %text"
    //% x.min=0 x.max=120
    //% y.min=0 y.max=48
    //% blockId=showByXY
    //% async
    export function showByXY(x: number, y: number, text: string): void {
        //change text->buf
        setTextColor(1);
        setCursorXY(x, y);
        print(text);
    }

} 