import * from EEmbCore


CreateFont(fnt2, "./res/russia.ttf", 16)

//import EEmbDisplay as Display
//import EEmbWatchdogs  as IWDG
import EEmbMessages as MSG
import EEmbTimers as Timer



// //------------ HOLDINGS -------------//

// MODBUS_ADD_LOCAL_H_REG(MBL_H_RESET_ALARM, 0, 0, 1, 0, 1)
// MODBUS_ADD_LOCAL_H_REG(MBL_H_RESET_SETTINGS, auto, 0, 1, 0, 1)

// MODBUS_ADD_LOCAL_H_REG(MBL_H_MODBUS_ADDR, auto, 1, 0xFF, 0, 1)
// MODBUS_ADD_LOCAL_H_REG(MBL_H_UART_BEAT_RATE, auto, 0, 3, 0, 1)
// MODBUS_ADD_LOCAL_H_REG(MBL_H_UART_PARITY, auto, 0, 1, 2, 1)
// MODBUS_ADD_LOCAL_H_REG(MBL_H_UART_STOP_BITS, auto, 0, 1, 0, 1)
// MODBUS_ADD_LOCAL_H_REG(MBL_H_MODBUS_TIMEOUT, auto, 0, 0xFF, 0, 1)

// MODBUS_ADD_LOCAL_H_REG(MBL_H_RELAYS, auto, 0, 0x0F, 0, 1) //-- 7
// MODBUS_ADD_LOCAL_H_REG(MBL_H_RELAYS_DEAFULT, auto, 0, 0x0F, 0, 1)
// MODBUS_ADD_LOCAL_H_REG(MBL_H_RELAYS_KEEP_VALUE, auto, 0, 1, 0, 1)

// MODBUS_ADD_LOCAL_H_REG(MBL_H_UI1_MODE, auto, 0, 3, 0, 1) //-- 10 0xa
// MODBUS_ADD_LOCAL_H_REG(MBL_H_UI2_MODE, auto, 0, 3, 0, 1)
// MODBUS_ADD_LOCAL_H_REG(MBL_H_UI3_MODE, auto, 0, 3, 0, 1)
// MODBUS_ADD_LOCAL_H_REG(MBL_H_UI4_MODE, auto, 0, 3, 0, 1)
// MODBUS_ADD_LOCAL_H_REG(MBL_H_UI5_MODE, auto, 0, 3, 0, 1)
// MODBUS_ADD_LOCAL_H_REG(MBL_H_UI6_MODE, auto, 0, 3, 0, 1)
// MODBUS_ADD_LOCAL_H_REG(MBL_H_UI7_MODE, auto, 0, 3, 0, 1) //-- 16 0x10

// MODBUS_ADD_LOCAL_H_REG(MBL_H_UI1_OFFSET, auto, 0, 0xFFFF, 0, 1)
// MODBUS_ADD_LOCAL_H_REG(MBL_H_UI2_OFFSET, auto, 0, 0xFFFF, 0, 1)
// MODBUS_ADD_LOCAL_H_REG(MBL_H_UI3_OFFSET, auto, 0, 0xFFFF, 0, 1)
// MODBUS_ADD_LOCAL_H_REG(MBL_H_UI4_OFFSET, auto, 0, 0xFFFF, 0, 1)
// MODBUS_ADD_LOCAL_H_REG(MBL_H_UI5_OFFSET, auto, 0, 0xFFFF, 0, 1)
// MODBUS_ADD_LOCAL_H_REG(MBL_H_UI6_OFFSET, auto, 0, 0xFFFF, 0, 1)
// MODBUS_ADD_LOCAL_H_REG(MBL_H_UI7_OFFSET, auto, 0, 0xFFFF, 0, 1) //-- 23

// MODBUS_ADD_LOCAL_H_REG(MBL_H_UI1_MIN, auto, 0, 0xFFFF, 0, 1)
// MODBUS_ADD_LOCAL_H_REG(MBL_H_UI2_MIN, auto, 0, 0xFFFF, 0, 1)
// MODBUS_ADD_LOCAL_H_REG(MBL_H_UI3_MIN, auto, 0, 0xFFFF, 0, 1)
// MODBUS_ADD_LOCAL_H_REG(MBL_H_UI4_MIN, auto, 0, 0xFFFF, 0, 1)
// MODBUS_ADD_LOCAL_H_REG(MBL_H_UI5_MIN, auto, 0, 0xFFFF, 0, 1)
// MODBUS_ADD_LOCAL_H_REG(MBL_H_UI6_MIN, auto, 0, 0xFFFF, 0, 1)
// MODBUS_ADD_LOCAL_H_REG(MBL_H_UI7_MIN, auto, 0, 0xFFFF, 0, 1) //-- 30

// MODBUS_ADD_LOCAL_H_REG(MBL_H_UI1_MAX, auto, 0, 0xFFFF, 1000, 1)
// MODBUS_ADD_LOCAL_H_REG(MBL_H_UI2_MAX, auto, 0, 0xFFFF, 1000, 1)
// MODBUS_ADD_LOCAL_H_REG(MBL_H_UI3_MAX, auto, 0, 0xFFFF, 1000, 1)
// MODBUS_ADD_LOCAL_H_REG(MBL_H_UI4_MAX, auto, 0, 0xFFFF, 1000, 1)
// MODBUS_ADD_LOCAL_H_REG(MBL_H_UI5_MAX, auto, 0, 0xFFFF, 1000, 1)
// MODBUS_ADD_LOCAL_H_REG(MBL_H_UI6_MAX, auto, 0, 0xFFFF, 1000, 1)
// MODBUS_ADD_LOCAL_H_REG(MBL_H_UI7_MAX, auto, 0, 0xFFFF, 1000, 1) //-- 37


// MODBUS_ADD_LOCAL_H_REG(MBL_H_PWM1_OUT, auto, 0, 10000, 0, 1)
// MODBUS_ADD_LOCAL_H_REG(MBL_H_PWM2_OUT, auto, 0, 10000, 0, 1)
// MODBUS_ADD_LOCAL_H_REG(MBL_H_PWM1_DEF_OUT, auto, 0, 10000, 0, 1)
// MODBUS_ADD_LOCAL_H_REG(MBL_H_PWM2_DEF_OUT, auto, 0, 10000, 0, 1)
// //--------------------------------------//






// //--------------- INPUTS -----------//
// MODBUS_ADD_LOCAL_I_REG(MBL_I_STATUS, 0, 0)
// MODBUS_ADD_LOCAL_I_REG(MBL_I_INPUTS, auto, 0)

// MODBUS_ADD_LOCAL_I_REG(MBL_I_UI1_VAL, auto, 0)
// MODBUS_ADD_LOCAL_I_REG(MBL_I_UI2_VAL, auto, 0)
// MODBUS_ADD_LOCAL_I_REG(MBL_I_UI3_VAL, auto, 0)
// MODBUS_ADD_LOCAL_I_REG(MBL_I_UI4_VAL, auto, 0)
// MODBUS_ADD_LOCAL_I_REG(MBL_I_UI5_VAL, auto, 0)
// MODBUS_ADD_LOCAL_I_REG(MBL_I_UI6_VAL, auto, 0)
// MODBUS_ADD_LOCAL_I_REG(MBL_I_UI7_VAL, auto, 0)

// MODBUS_ADD_LOCAL_I_REG(MBL_VAR_VER, auto, 0)
// MODBUS_ADD_LOCAL_I_REG(MBL_VAR_SERIAL_NUMBER, auto, 0)
// MODBUS_ADD_LOCAL_I_REG(MBL_VAR_PDATE, auto, 0)
// //-------------------------------------//



//------------ HOLDINGS -------------//

MODBUS_ADD_LOCAL_H_REG(MBL_H_RESET_ALARM, 0, 0, 1, 0, 1)
MODBUS_ADD_LOCAL_H_REG(MBL_H_RESET_SETTINGS, auto, 0, 1, 0, 1)

MODBUS_ADD_LOCAL_H_REG(MBL_H_MODBUS_ADDR, auto, 1, 0xFF, 0, 1)
MODBUS_ADD_LOCAL_H_REG(MBL_H_UART_BEAT_RATE, auto, 0, 3, 0, 1)
MODBUS_ADD_LOCAL_H_REG(MBL_H_UART_PARITY, auto, 0, 1, 2, 1)
MODBUS_ADD_LOCAL_H_REG(MBL_H_UART_STOP_BITS, auto, 0, 1, 0, 1)
MODBUS_ADD_LOCAL_H_REG(MBL_H_MODBUS_TIMEOUT, auto, 0, 0xFF, 0, 1)

MODBUS_ADD_LOCAL_H_REG(MBL_H_RELAYS, auto, 0, 0x3F, 0, 1) //-- 7
MODBUS_ADD_LOCAL_H_REG(MBL_H_RELAYS_DEAFULT, auto, 0, 0x3F, 0, 1)
MODBUS_ADD_LOCAL_H_REG(MBL_H_RELAYS_KEEP_VALUE, auto, 0, 1, 0, 1)

MODBUS_ADD_LOCAL_H_REG(MBL_H_UI1_MODE, auto, 0, 3, 2, 1) //-- 10 0xa
MODBUS_ADD_LOCAL_H_REG(MBL_H_UI2_MODE, auto, 0, 3, 2, 1)
MODBUS_ADD_LOCAL_H_REG(MBL_H_UI3_MODE, auto, 0, 3, 2, 1)
MODBUS_ADD_LOCAL_H_REG(MBL_H_UI4_MODE, auto, 0, 3, 2, 1)
MODBUS_ADD_LOCAL_H_REG(MBL_H_UI5_MODE, auto, 0, 3, 2, 1)
MODBUS_ADD_LOCAL_H_REG(MBL_H_UI6_MODE, auto, 0, 3, 2, 1)
MODBUS_ADD_LOCAL_H_REG(MBL_H_UI7_MODE, auto, 0, 3, 2, 1) //-- 16 0x10

MODBUS_ADD_LOCAL_H_REG(MBL_H_UI8_MODE, auto, 0, 3, 0, 1) //-- 16 0x10
MODBUS_ADD_LOCAL_H_REG(MBL_H_UI9_MODE, auto, 0, 3, 0, 1) //-- 16 0x10
MODBUS_ADD_LOCAL_H_REG(MBL_H_UI10_MODE, auto, 0, 3, 0, 1) //-- 16 0x10
MODBUS_ADD_LOCAL_H_REG(MBL_H_UI11_MODE, auto, 0, 3, 0, 1) //-- 16 0x10


// MODBUS_ADD_LOCAL_H_REG(MBL_H_UI1_MODE, auto, 0, 3, 0, 1) //-- 10 0xa
// MODBUS_ADD_LOCAL_H_REG(MBL_H_UI2_MODE, auto, 0, 3, 0, 1)
// MODBUS_ADD_LOCAL_H_REG(MBL_H_UI3_MODE, auto, 0, 3, 0, 1)
// MODBUS_ADD_LOCAL_H_REG(MBL_H_UI4_MODE, auto, 0, 3, 0, 1)
// MODBUS_ADD_LOCAL_H_REG(MBL_H_UI5_MODE, auto, 0, 3, 0, 1)
// MODBUS_ADD_LOCAL_H_REG(MBL_H_UI6_MODE, auto, 0, 3, 0, 1)
// MODBUS_ADD_LOCAL_H_REG(MBL_H_UI7_MODE, auto, 0, 3, 0, 1) //-- 16 0x10

// MODBUS_ADD_LOCAL_H_REG(MBL_H_UI8_MODE, auto, 0, 3, 0, 1) //-- 16 0x10
// MODBUS_ADD_LOCAL_H_REG(MBL_H_UI9_MODE, auto, 0, 3, 0, 1) //-- 16 0x10
// MODBUS_ADD_LOCAL_H_REG(MBL_H_UI10_MODE, auto, 0, 3, 0, 1) //-- 16 0x10
// MODBUS_ADD_LOCAL_H_REG(MBL_H_UI11_MODE, auto, 0, 3, 0, 1) //-- 16 0x10

MODBUS_ADD_LOCAL_H_REG(MBL_H_UI1_OFFSET, auto, 0, 0xFFFF, 0, 1)
MODBUS_ADD_LOCAL_H_REG(MBL_H_UI2_OFFSET, auto, 0, 0xFFFF, 0, 1)
MODBUS_ADD_LOCAL_H_REG(MBL_H_UI3_OFFSET, auto, 0, 0xFFFF, 0, 1)
MODBUS_ADD_LOCAL_H_REG(MBL_H_UI4_OFFSET, auto, 0, 0xFFFF, 0, 1)
MODBUS_ADD_LOCAL_H_REG(MBL_H_UI5_OFFSET, auto, 0, 0xFFFF, 0, 1)
MODBUS_ADD_LOCAL_H_REG(MBL_H_UI6_OFFSET, auto, 0, 0xFFFF, 0, 1)
MODBUS_ADD_LOCAL_H_REG(MBL_H_UI7_OFFSET, auto, 0, 0xFFFF, 0, 1) //-- 23

MODBUS_ADD_LOCAL_H_REG(MBL_H_UI8_OFFSET, auto, 0, 0xFFFF, 0, 1) //-- 23
MODBUS_ADD_LOCAL_H_REG(MBL_H_UI9_OFFSET, auto, 0, 0xFFFF, 0, 1) //-- 23
MODBUS_ADD_LOCAL_H_REG(MBL_H_UI10_OFFSET, auto, 0, 0xFFFF, 0, 1) //-- 23
MODBUS_ADD_LOCAL_H_REG(MBL_H_UI11_OFFSET, auto, 0, 0xFFFF, 0, 1) //-- 23

MODBUS_ADD_LOCAL_H_REG(MBL_H_UI1_MIN, auto, 0, 0xFFFF, 0, 1)
MODBUS_ADD_LOCAL_H_REG(MBL_H_UI2_MIN, auto, 0, 0xFFFF, 0, 1)
MODBUS_ADD_LOCAL_H_REG(MBL_H_UI3_MIN, auto, 0, 0xFFFF, 0, 1)
MODBUS_ADD_LOCAL_H_REG(MBL_H_UI4_MIN, auto, 0, 0xFFFF, 0, 1)
MODBUS_ADD_LOCAL_H_REG(MBL_H_UI5_MIN, auto, 0, 0xFFFF, 0, 1)
MODBUS_ADD_LOCAL_H_REG(MBL_H_UI6_MIN, auto, 0, 0xFFFF, 0, 1)
MODBUS_ADD_LOCAL_H_REG(MBL_H_UI7_MIN, auto, 0, 0xFFFF, 0, 1) //-- 30

MODBUS_ADD_LOCAL_H_REG(MBL_H_UI8_MIN, auto, 0, 0xFFFF, 0, 1) //-- 30
MODBUS_ADD_LOCAL_H_REG(MBL_H_UI9_MIN, auto, 0, 0xFFFF, 0, 1) //-- 30
MODBUS_ADD_LOCAL_H_REG(MBL_H_UI10_MIN, auto, 0, 0xFFFF, 0, 1) //-- 30
MODBUS_ADD_LOCAL_H_REG(MBL_H_UI11_MIN, auto, 0, 0xFFFF, 0, 1) //-- 30

MODBUS_ADD_LOCAL_H_REG(MBL_H_UI1_MAX, auto, 0, 0xFFFF, 1000, 1)
MODBUS_ADD_LOCAL_H_REG(MBL_H_UI2_MAX, auto, 0, 0xFFFF, 1000, 1)
MODBUS_ADD_LOCAL_H_REG(MBL_H_UI3_MAX, auto, 0, 0xFFFF, 1000, 1)
MODBUS_ADD_LOCAL_H_REG(MBL_H_UI4_MAX, auto, 0, 0xFFFF, 1000, 1)
MODBUS_ADD_LOCAL_H_REG(MBL_H_UI5_MAX, auto, 0, 0xFFFF, 1000, 1)
MODBUS_ADD_LOCAL_H_REG(MBL_H_UI6_MAX, auto, 0, 0xFFFF, 1000, 1)
MODBUS_ADD_LOCAL_H_REG(MBL_H_UI7_MAX, auto, 0, 0xFFFF, 1000, 1) //-- 37

MODBUS_ADD_LOCAL_H_REG(MBL_H_UI8_MAX, auto, 0, 0xFFFF, 1000, 1) //-- 37
MODBUS_ADD_LOCAL_H_REG(MBL_H_UI9_MAX, auto, 0, 0xFFFF, 1000, 1) //-- 37
MODBUS_ADD_LOCAL_H_REG(MBL_H_UI10_MAX, auto, 0, 0xFFFF, 1000, 1) //-- 37
MODBUS_ADD_LOCAL_H_REG(MBL_H_UI11_MAX, auto, 0, 0xFFFF, 1000, 1) //-- 37


MODBUS_ADD_LOCAL_H_REG(MBL_H_PWM1_OUT, auto, 0, 10000, 0, 1)
MODBUS_ADD_LOCAL_H_REG(MBL_H_PWM2_OUT, auto, 0, 10000, 0, 1)
MODBUS_ADD_LOCAL_H_REG(MBL_H_PWM3_OUT, auto, 0, 10000, 0, 1)
MODBUS_ADD_LOCAL_H_REG(MBL_H_PWM1_DEF_OUT, auto, 0, 10000, 0, 1)
MODBUS_ADD_LOCAL_H_REG(MBL_H_PWM2_DEF_OUT, auto, 0, 10000, 0, 1)
MODBUS_ADD_LOCAL_H_REG(MBL_H_PWM3_DEF_OUT, auto, 0, 10000, 0, 1)
//--------------------------------------//






//--------------- INPUTS -----------//
MODBUS_ADD_LOCAL_I_REG(MBL_I_STATUS, 0, 0)
MODBUS_ADD_LOCAL_I_REG(MBL_I_INPUTS, auto, 0)

MODBUS_ADD_LOCAL_I_REG(MBL_I_UI1_VAL, auto, 0)
MODBUS_ADD_LOCAL_I_REG(MBL_I_UI2_VAL, auto, 0)
MODBUS_ADD_LOCAL_I_REG(MBL_I_UI3_VAL, auto, 0)
MODBUS_ADD_LOCAL_I_REG(MBL_I_UI4_VAL, auto, 0)
MODBUS_ADD_LOCAL_I_REG(MBL_I_UI5_VAL, auto, 0)
MODBUS_ADD_LOCAL_I_REG(MBL_I_UI6_VAL, auto, 0)
MODBUS_ADD_LOCAL_I_REG(MBL_I_UI7_VAL, auto, 0)

MODBUS_ADD_LOCAL_I_REG(MBL_I_UI8_VAL, auto, 0)
MODBUS_ADD_LOCAL_I_REG(MBL_I_UI9_VAL, auto, 0)
MODBUS_ADD_LOCAL_I_REG(MBL_I_UI10_VAL, auto, 0)
MODBUS_ADD_LOCAL_I_REG(MBL_I_UI11_VAL, auto, 0)

MODBUS_ADD_LOCAL_I_REG(MBL_VAR_VER, auto, 0)
MODBUS_ADD_LOCAL_I_REG(MBL_VAR_SERIAL_NUMBER, auto, 0)
MODBUS_ADD_LOCAL_I_REG(MBL_VAR_PDATE, auto, 0)
//-------------------------------------//






// var relays: uint32
// var AOs: uint32[2]
// var UIs: uint32[6]


//var  prevUIs: uint16[7]


// let AOs: mut &EEmb_modbus_local_h_t[2] = [
// 	MBL_H_PWM1_OUT,
// 	MBL_H_PWM2_OUT
// ]

// let  UIs: mut &EEmb_modbus_local_h_t[7] = [
// 	MBL_H_UI1_MODE,
// 	MBL_H_UI2_MODE,
// 	MBL_H_UI3_MODE,
// 	MBL_H_UI4_MODE,
// 	MBL_H_UI5_MODE,
// 	MBL_H_UI6_MODE,
// 	MBL_H_UI7_MODE
// ]

// let  UI_vals: mut &EEmb_modbus_local_i_t[7] = [
// 	MBL_I_UI1_VAL,
// 	MBL_I_UI2_VAL,
// 	MBL_I_UI3_VAL,
// 	MBL_I_UI4_VAL,
// 	MBL_I_UI5_VAL,
// 	MBL_I_UI6_VAL,
// 	MBL_I_UI7_VAL
// ]


let AOs = [
	MBL_H_PWM1_OUT.GetPtr(),
	MBL_H_PWM2_OUT,
    MBL_H_PWM3_OUT
]

let  UIs = [
	MBL_H_UI1_MODE.GetPtr(),
	MBL_H_UI2_MODE,
	MBL_H_UI3_MODE,
	MBL_H_UI4_MODE,
	MBL_H_UI5_MODE,
	MBL_H_UI6_MODE,
	MBL_H_UI7_MODE,

    MBL_H_UI8_MODE,
    MBL_H_UI9_MODE,
    MBL_H_UI10_MODE,
    MBL_H_UI11_MODE
]

let  UI_vals = [
	MBL_I_UI1_VAL.GetPtr(),
	MBL_I_UI2_VAL,
	MBL_I_UI3_VAL,
	MBL_I_UI4_VAL,
	MBL_I_UI5_VAL,
	MBL_I_UI6_VAL,
	MBL_I_UI7_VAL,

    MBL_I_UI8_VAL,
    MBL_I_UI9_VAL,
    MBL_I_UI10_VAL,
    MBL_I_UI11_VAL

]

// struct Type1 {

// 	prop1: &Type2
// 	prop2: Type2
// 	prop3: int32

// }


// struct Type2 {

// 	prop21: &Type1
// 	prop22: Type3
// 	prop23: int32

// }


// struct Type3 {

// 	prop31: &Type1
// 	prop32: Type2
// 	prop33: int32

// }

// let dummyIdent = mk Type1{ _ }


//var testVar: uint16 = -10


export demangle var DummyVar: int32 = 12


func foo3(pD: mut &int32, count: int32) {

	if pD > count*2 {
		pD = 10
	}

}


func DrawGUI_7(ctx: &EG_userContext_t) {

	
	//var relays: mut &EEmb_modbus_local_h_t// = #MBL_H_RELAYS
	//var relays: uint32 = MBL_H_RELAYS



	GUI_createContext() $$

	//let bgColor = GET_COLOR(60, 69, 67)
	//set_color(COLOR_BLACK, bgColor) $$

	set_font(FONT_DEFAULT) $$

	layout(100, 1) $ 
	{
		list(20, true) $
		{

			var inputs = 0

			let ref0: mut &int32 = inputs

			row(false, [50, 50]) $
			{
				//label("Dummy Var", GUI_ALIGN_CENTER) $$
				//input_int(DummyVar, -999999, 999999, GUI_ALIGN_CENTER, true) $$

				button("Read All AI", COLOR_WHITE, 0, $(e) {
					if e {

						for i, reg in UIs {
							let ai = UI_READ_AI(i)
							UI_vals[i] = ai
						}

					}
				}) $$

				button("hard", COLOR_WHITE, 0, $(e) {
					if e {

						MSG::ShowAlert("Info:", "Too long message... 124213 14324 1234 535422", null)
					}
				}) $$
			}

			for i, reg in UIs {
				row(false, 3) $
				{
					let label = "AI [" + (i+1) + "]: "
					label(label, GUI_ALIGN_CENTER) $$
					input_int(reg, 0, 2, GUI_ALIGN_CENTER, true) $$

					// if DummyVar > 50 {
					// 	let a = DummyVar - 5*i
					// 	inputs = a
					// 	ref0++
					// 	foo3(DummyVar, i)
					// }

					if ctx.isValueChanged() {
						UI_CFG(i, reg)
						if reg == 0 {
							UI_CFG_SET_RANGE(i, 0, 1, 0)
						} else if reg == 1 {
							UI_CFG_SET_RANGE(i, 40, 200, 0)
						} else if reg == 2 {
							UI_CFG_SET_RANGE(i, -600, 800, 0)
							UI_CFG_SET_B(i, 1050)
						}
					}
						if reg == 0 {
							var di = UI_READ_DI(i) ? 1 : 0
							inputs |= (di << i)
							UI_vals[i] = di
							combo_box(di, COLOR_WHITE, ["false", "true"], 2,  false) $$
						} else if reg == 1 {
							var ai = UI_READ_AI(i)
							UI_vals[i] = ai
							input_float(ai, 4.0f, 20.f, 1, GUI_ALIGN_CENTER, false) $$
						} else if reg == 2 {
							var ai = UI_READ_AI(i)
							UI_vals[i] = ai
							input_float(ai, -60.0f, 80.f, 1, GUI_ALIGN_CENTER, false) $$
						}
				}

				// if UIs[i] == 0 {
				// 	var di = UI_READ_DI(i) ? 1 : 0
				// 	inputs |= (di << i)
				// 	UI_vals[i] = di
				// } else {
				// 	var ai = UI_READ_AI(i)
				// 	UI_vals[i] = ai
				// }

				// if (prevUIs[i] != UIs[i]) {
				// 	prevUIs[i] = UIs[i]
					
				// }
			}

			MBL_I_INPUTS = inputs
			

			for i, reg in AOs {
				row(false, 3) $
				{
					let label = "AO [" + (i+1) + "]: "
					label(label, GUI_ALIGN_CENTER) $$
					fill(COLOR_WHITE) $$
					input_int(reg, 0, 10000, GUI_ALIGN_CENTER, true) $$
					if ctx.isApplied() {
						AO_OUTPUT(i, reg)
					}
				}
			}

			for i in 0 to RELAYS_COUNT-1 {
				row(false, [50, 25, 25]) $
				{
					let label = "Relay [" + (i+1) + "]: "
					label(label, GUI_ALIGN_CENTER) $$
					fill(COLOR_WHITE) $$
					switcher(MBL_H_RELAYS, i) $$
					if ctx.isValueChanged() {
						RELAYS_SET(MBL_H_RELAYS, 1)
						RELAYS_SET(~MBL_H_RELAYS, 0)
					}
				}
			}

		}
	}

	// layout(20, 1) $ 
	// {
	// 	var tmp = 0
	// 	switcher(tmp, 0) $$
	// }
}

func MyFunc() {
	Println("1)"+ UI_vals[0] + " : " + UI_vals[1] )
	UI_vals[1] = 5000
	Println("nothing...")
	Println("2)"+ UI_vals[0] + " : " + UI_vals[1] )
}



var tmrTicks = 0


struct DWIN_PANEL {
	//-- Begin (Must be call before start add Modbus regs) 
	MODBUS_MODULE_DECLARE_BEGIN()
	//-- name, type (MB_REM_HOLDING/MB_REM_INPUT), address
	MODBUS_ADD_REMOTE_REG(DW_States, MB_REM_HOLDING, 20480) // 0 bit = Global, 1 bit = Work    
	MODBUS_ADD_REMOTE_REG(DW_ambTemp, MB_REM_HOLDING, 20481) // ambient sensor
	MODBUS_ADD_REMOTE_REG(DW_chanTemp, MB_REM_HOLDING, 20482) // channel sensor 
	MODBUS_ADD_REMOTE_REG(DW_electroHeat, MB_REM_HOLDING, 20483) // power of heating
	MODBUS_ADD_REMOTE_REG(reserv_1, MB_REM_HOLDING, 20484)    
	MODBUS_ADD_REMOTE_REG(reserv_2, MB_REM_HOLDING, 20485)
	   MODBUS_ADD_REMOTE_REG(reserv_3, MB_REM_HOLDING, 20486)    
	   MODBUS_ADD_REMOTE_REG(reserv_4, MB_REM_HOLDING, 20487)
	   MODBUS_ADD_REMOTE_REG(reserv_5, MB_REM_HOLDING, 20488)    
	   MODBUS_ADD_REMOTE_REG(reserv_6, MB_REM_HOLDING, 20489)
	   MODBUS_ADD_REMOTE_REG(DW_Cmd_OnOff, MB_REM_HOLDING, 20490) // turn on system    
	   MODBUS_ADD_REMOTE_REG(DW_Cms_SetT, MB_REM_HOLDING, 20491) // uset temp set point
	   MODBUS_ADD_REMOTE_REG(DW_Cmd_SetFan, MB_REM_HOLDING, 20492) // fan speed setting
	//-- end (Must be call after All Modbus regs was added) 
	MODBUS_MODULE_DECLARE_END()
   
	func init(portNum: uint32, devAddr: uint32) {
	 self.comPort = portNum
	 self.devAddr = devAddr  
	 self.timeout = 300
	 self.interval = 1000
	 self.interval2 = 10000  
	 self.isEnabled = 1
	 self.errors = 0  
	 self.reqTryCount = 3
		   self.packSize = 0        
		   self.isHoldingsRead = 1
		   self.isAutoRead = 1        
		   self.connectionRestoreCallback = connectionRestoreCB
	 //-- Init Modbus Table for instance (Must be call after init instance)
	 MODBUS_MODULE_INIT(self)
	}
   
	func GetError() -> uint32 {  // функция проверки наличия ошибки связи. Функция вернет статус последнего запроса и обнулит ошибку. В следующем цикле, если ошибок связи не было, то функция вернет 0.  
		let error = self.errors
	 	self.errors = 0  
	 return error
	}
   }


   func connectionRestoreCB(inst: mut &ModbusRemModuleBase_t) { 
	inst.errors = 0
   }


   var panel = mk DWIN_PANEL{_}

   extern demangle func UART_SET_FRAME_CFG(uint32, uint32, uint8)

func init() {

    UART_CFG(1, 9600, 0, 0)
    MODBUS_CFG(1, MB_MASTER_ID, 0, 1)

	panel.init(1, 1)

	UART_SET_FRAME_CFG(1, 680, 1)
	//MyFunc()
	//MyFunc()

	// for i in 0 to 6 {
	// 	//prevUIs[i] = UIs[i]
	// 	UI_CFG(i, UIs[i])
	// 	if UIs[i] == 0 {
	// 		UI_CFG_SET_RANGE(i, 0, 1, 0)
	// 	} else if UIs[i] == 1 {
	// 		UI_CFG_SET_RANGE(i, 40, 200, 0)
	// 	} else if UIs[i] == 2 {
	// 		UI_CFG_SET_RANGE(i, -600, 800, 0)
	// 		UI_CFG_SET_B(i, 1050)
	// 	}
	// }

	for i, reg in UIs {
		UI_CFG(i, reg)
		if reg == 0 {
			UI_CFG_SET_RANGE(i, 0, 1, 0)
		} else if reg == 1 {
			UI_CFG_SET_RANGE(i, 40, 200, 0)
		} else if reg == 2 {
			UI_CFG_SET_RANGE(i, -600, 800, 0)
			UI_CFG_SET_B(i, 1050)
		}
	}

	// for i, reg in AOs {
	// 	AO_OUTPUT(i, reg)
	// }

	// RELAYS_SET(MBL_H_RELAYS, 1)
	// RELAYS_SET(~MBL_H_RELAYS, 0)

	GUI_setDraw(DrawGUI_7)

    // Timer::CreateTimer(0, 3000, false, null, $(timerPtr) {
    //     MSG::ShowAlert("Info:", "Too long message... 124213 14324 1234 535422", null)
    // }).runDetach()


    // Timer::CreateTimer(0, 300, true, tmrTicks, $(timerPtr) {

    //     let ticks: mut &int = timerPtr.getUserData()
	// 	ticks++

    //     Println("Show me! Ticks is " + ticks + "It's wonderfull!" + timerPtr.getId())
        
    // }).runDetach()
}


func loop() {
	DelayMs(1000)
}
