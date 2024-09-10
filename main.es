import * from EEmbCore

// создаём шрифты
CreateFont(fnt1, "./res/russia.ttf", 18)
CreateFont(fnt9, "./res/russia.ttf", 34)

// enum {
// 	BUTTON_LEFT = 0,
// 	BUTTON_RIGHT,
// 	BUTTON_DOWN,
// 	BUTTON_UP,
// 	BUTTON_ESC,
// 	BUTTON_ENTER
// }
enum {
	Winter = 0, Spring, Summer, Autumn
}

struct rowInfo { // a row information structure, using in settings lists
    label : c_string
    format : uint8
    minVal : int16
    maxVal : int16
    isEdit : bool // editable or not
    isVisible : bool // manual visibility property, works with isForced == true
    isForced : bool // forces visibility
}

let pages_row : rowInfo = { label : "t перехода:", format : 1, minVal : -500, maxVal : 1000, isEdit : true, isVisible : true, isForced : false }

MODBUS_ADD_LOCAL_H_REG(	SeasonThresholdTemp	,	16434	,	0	,	-30	,	120	,	1	)	//	Температурный порог смены сезона
MODBUS_ADD_LOCAL_H_REG(	SeasonHystoresTemp	,	16435	,	0	,	500	,	40	,	1	)	//	Зона нечувствительности смены сезона
// создаём картинки
/* // функции для работы с modbus
MODBUS_ADD_LOCAL_REG( addr, name, mode, min, max, default, isEEPROM )
MODBUS_ADD_REMOTE_REG( devAddr, regAddr, mode )

MODBUS_SET_LOCAL_RW_CALLBACinput( callbacinput { ( regAddr ) )
MODBUS_SET_REMOTE_RW_CALLBACinput( callbacinput )

MB_***_REGS_H_COUNT
MB_***_REGS_I_COUNT

MB_LOCAL_REGS_H_COUNT
MB_LOCAL_REGS_I_COUNT

MODBUS_SET_AUTO_READ_REMOTE( devAddr, regAddr, count, interval )

MB_READ_LOCAL_H( addr )
MB_READ_LOCAL_I( addr )

MB_READ_REMOTE_H( devAddr, regAddr )
MB_READ_REMOTE_I( devAddr, regAddr )

MB_WRITE_LOCAL_H( regAddr, value )
MB_WRITE_LOCAL_I( addr )

MB_WRITE_REMOTE( regAddr, value )

MODBUS_CFG( uart, devAddr, isMaster, timeout )

UART_CFG( uart, baudRate, parity, stopBits )
*/

var mySum = 0

var myVar: int16 = 0

func foo(a: int32) -> uint64 {
	return a+10
}

var tmpFloat = 0.5f

var tmpInt = 30

func DrawInfoScreen(ctx: &EG_userContext_t) {
	var holdings: mut &EEmb_modbus_local_h_t = SeasonThresholdTemp
	GUI_createContext() $$
	// text, backgroung
	set_color(COLOR_BLACK, COLOR_WHITE) $$ 
	layout(12, 1) $ 
	{
			label("информация", GUI_ALIGN_CENTER) $$

	}
	layout(76/2, 1) $ 
	{

		let minVal = -100.f
		input_float(tmpFloat, minVal, pages_row.maxVal, 1, GUI_ALIGN_CENTER, pages_row.isEdit) $$
		input_int(tmpInt, minVal, pages_row.maxVal, GUI_ALIGN_CENTER, pages_row.isEdit) $$
		//var minVal1: int16 = -300
		//var minVal2: int16 = minVal1
		//var minVal2: uint64 = foo(minVal1)
		//input_float(myVar, minVal2, 1000, 1, GUI_ALIGN_CENTER, pages_row.isEdit) $$

	}
	layout(12, 1) $ 
	{
			label("Driver Engineering", GUI_ALIGN_CENTER) $$

	}
}

func init() {
	GUI_setDraw(DrawInfoScreen)
}




var ao2val = 0

// тут зациклили
func loop() {
	// toggle UO3 
	RELAY_TOGGLE( RELAY_3 )
	var i = -1
	let x = 25.5
	let y = 20.1

	let a : uint32 = sum(1, 2)     // 3
	let b : float = sum(1, 2)  // 6.0
//	printName()
	mySum = b
	var numbers: uint32[5] = [5, 2, 3, 4, 5]
let nums = [6, 2, 3, 4, 5]
 
	numbers = nums

	mySum = numbers[0]
	// задержка между кругами
	Println(tmpFloat+tmpInt)
	DelayMs( 500 )
	
}

func printName(){
    //printf("Меня зовут Том")
}


   func sum(x: uint32 , y : uint32) -> uint32{
	   return x + y
	   }

	   
	

 func factorial(n: uint32) -> uint32{  
    if n == 0{ 
     return 1
    }
     return n * factorial(n-1)
}

