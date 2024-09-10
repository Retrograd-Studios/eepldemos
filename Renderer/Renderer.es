

import * from EEmbCore

import Display from EEmbDisplay
import Render from EEmbRender

let CELL_SIZE = 4
let CELL_H_SIZE = CELL_SIZE / 2

let WIDTH = Display::DisplayWidth/CELL_SIZE
let HEIGHT = (Display::DisplayHeight-32)/CELL_SIZE

let BG_COLOR = 0x0000


var ScreenBuf: uint16[HEIGHT][WIDTH]
var ScreenData: uint16[HEIGHT][WIDTH]

var IsReqFlush = false


func drawCell(x: uint32, y: uint32, color: uint16) {

    if color == 0x00 {

        Render::DrawFillRect(x*CELL_SIZE, y*CELL_SIZE, CELL_SIZE, CELL_SIZE, BG_COLOR)

    } else {

        Render::DrawRect(x*CELL_SIZE, y*CELL_SIZE, CELL_SIZE, CELL_SIZE, (~color)&0x9652 )
        Render::DrawFillRect(x*CELL_SIZE+1, y*CELL_SIZE+1, CELL_H_SIZE, CELL_H_SIZE, color)
        
    }

}

func InitBufScreen() {

    IsReqFlush = false

    let color1 = GET_COLOR(0x7, 0x7, 0x7)

    for i in 0 to WIDTH {

        ScreenBuf[0][i] = color1
        ScreenBuf[HEIGHT-1][i] = color1

    }

}

func FlushBufScreen() {

    IsReqFlush = true

}


func Update() {

    if !IsReqFlush {
        return
    }


    for y, row in ScreenData {

        for x, color in row {

            let bufColor = ScreenBuf[y][x]

            if color != bufColor {

                ScreenData[y, x] = bufColor
                drawCell(x, y, bufColor)

            }

        }

    }

    InitBufScreen()

}